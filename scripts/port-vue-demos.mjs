#!/usr/bin/env node
// React → Vue TSX porter using @babel AST. Run AFTER port-playground-demos
// has copied the React side. For each playground/src/demos/react/<c>/<slug>.tsx
// it produces a sibling playground/src/demos/vue/<c>/<slug>.tsx that:
//
//   1. Swaps imports: @heroui/react → @itsjustanks/heroui-vue, drops "react".
//   2. Rewrites useState/useRef/useEffect/useMemo/useCallback to Vue equivalents:
//        useState(init)              → ref(init), .value access where needed
//        useRef<T>(init)             → ref<T | null>(init)
//        useEffect(fn, deps?)        → onMounted(fn) | watch(deps, fn)
//        useMemo(fn, deps)           → computed(fn)
//        useCallback(fn, deps)       → fn  (Vue doesn't need referential stability)
//   3. Renames className → class on JSX attributes.
//   4. Adds .value to references of converted state inside expressions.
//   5. Wraps the component function in defineComponent.
//   6. Falls back to a "pending" Vue stub for files we cannot safely transform.
//
// Pure stdlib + @babel. Idempotent — overwrites Vue files we previously wrote.

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from '@babel/parser'
import _traverse from '@babel/traverse'
import _generate from '@babel/generator'
import * as t from '@babel/types'

const traverse = _traverse.default || _traverse
const generate = _generate.default || _generate

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = path.resolve(__dirname, '..')
const REACT_DIR = path.join(REPO, 'playground/src/demos/react')
const VUE_DIR   = path.join(REPO, 'playground/src/demos/vue')

const STUB_SOURCE = (c, slug) => `import { defineComponent } from 'vue'

/** Vue port of \`${c}/${slug}\` not yet possible via auto-port (complex hooks /
 *  generics). See React side for upstream example. */
export default defineComponent(() => () => (
  <div class="demo-col" style={{ color: 'var(--color-muted-foreground)', fontSize: '0.875rem' }}>
    <p>Vue port pending — see the React side for the upstream example.</p>
  </div>
))
`

let total = 0
let ported = 0
let stubbed = 0
let kept = 0  // existing hand-port; preserved
const stubbedFiles = []
const errors = []

const HAND_PORT_MARKER = '/** Hand-port' // Files marked with this header are left untouched.

function listFiles (dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) out.push(...listFiles(p))
    else if (/\.tsx$/.test(name)) out.push(p)
  }
  return out
}

function transform (src) {
  const ast = parse(src, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
    errorRecovery: false,
  })

  // Track state mappings: identifier (state name) → kind ('ref'|'computed'),
  // plus setter mappings so we can rewrite setX(v) → x.value = v.
  const refNames = new Set()
  const computedNames = new Set()
  const setterToState = new Map()  // 'setFoo' → 'foo'
  const stateInitsByName = new Map()  // 'foo' → init expression
  const vueImports = new Set(['defineComponent'])

  // 1) Imports rewrite + collect useState mappings.
  for (const node of ast.program.body) {
    if (!t.isImportDeclaration(node)) continue
    const src = node.source.value
    if (src === '@heroui/react') node.source.value = '@itsjustanks/heroui-vue'
    if (src === '@gravity-ui/icons') {
      // React-icon package. Repoint to our Vue shim that exports the same
      // PascalCase names backed by raw SVGs. Demos live at
      // playground/src/demos/vue/<component>/<slug>.tsx so the shim is at
      // ../../../gravity-icons-vue (3 up: slug → component → vue → demos → src).
      node.source.value = '../../../gravity-icons-vue'
    }
    if (src === 'react') {
      node.specifiers = []
      node.importKind = 'value'
    }
  }
  // Remove empty import nodes (react drop).
  ast.program.body = ast.program.body.filter((n) =>
    !(t.isImportDeclaration(n) && n.specifiers.length === 0 && /^(react)$/.test(n.source.value))
  )

  // 2) Find the exported component function.
  //    Supports: `export function X() {...}`, `export default function X() {...}`,
  //              `export const X = () => {...}`, `export default () => {...}`.
  let componentFn = null  // { fn, idx }

  function fnFromArrow (arrow) {
    // Normalize arrow into a synthetic FunctionDeclaration-like object
    // with body as BlockStatement (wrap single-expression bodies).
    let body
    if (t.isBlockStatement(arrow.body)) body = arrow.body
    else body = t.blockStatement([t.returnStatement(arrow.body)])
    return { id: null, params: arrow.params, body }
  }

  for (let i = 0; i < ast.program.body.length; i++) {
    const node = ast.program.body[i]
    if (t.isExportNamedDeclaration(node) && t.isFunctionDeclaration(node.declaration)) {
      componentFn = { fn: node.declaration, idx: i }
      break
    }
    if (t.isExportDefaultDeclaration(node) && t.isFunctionDeclaration(node.declaration)) {
      componentFn = { fn: node.declaration, idx: i }
      break
    }
    if (t.isExportNamedDeclaration(node) && t.isVariableDeclaration(node.declaration)) {
      const decl = node.declaration.declarations[0]
      if (decl && (t.isArrowFunctionExpression(decl.init) || t.isFunctionExpression(decl.init))) {
        componentFn = { fn: fnFromArrow(decl.init), idx: i }
        break
      }
    }
    if (t.isExportDefaultDeclaration(node) && (t.isArrowFunctionExpression(node.declaration) || t.isFunctionExpression(node.declaration))) {
      componentFn = { fn: fnFromArrow(node.declaration), idx: i }
      break
    }
  }
  if (!componentFn) throw new Error('No exported component function found')

  const fn = componentFn.fn

  // 3) Walk the function body: rewrite useState/useRef/useEffect/useMemo/useCallback.
  const newBodyStmts = []
  for (const stmt of fn.body.body) {
    // const [a, setA] = useState<T>(init)
    if (t.isVariableDeclaration(stmt) && stmt.declarations.length === 1) {
      const d = stmt.declarations[0]
      if (
        t.isArrayPattern(d.id) && d.id.elements.length === 2 &&
        t.isCallExpression(d.init) && t.isIdentifier(d.init.callee, { name: 'useState' })
      ) {
        const [aPat, setAPat] = d.id.elements
        if (t.isIdentifier(aPat) && t.isIdentifier(setAPat)) {
          refNames.add(aPat.name)
          setterToState.set(setAPat.name, aPat.name)
          stateInitsByName.set(aPat.name, d.init.arguments[0] || t.identifier('undefined'))
          vueImports.add('ref')
          newBodyStmts.push(
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier(aPat.name),
                t.callExpression(t.identifier('ref'), d.init.arguments)
              )
            ])
          )
          continue
        }
      }
      // const x = useRef<T>(init) | const x = useMemo(fn, deps) | const x = useCallback(fn, deps)
      if (t.isIdentifier(d.id) && t.isCallExpression(d.init)) {
        const callee = d.init.callee
        if (t.isIdentifier(callee, { name: 'useRef' })) {
          refNames.add(d.id.name)
          vueImports.add('ref')
          newBodyStmts.push(
            t.variableDeclaration(stmt.kind, [
              t.variableDeclarator(
                d.id,
                t.callExpression(t.identifier('ref'), d.init.arguments.length ? d.init.arguments : [t.nullLiteral()])
              )
            ])
          )
          continue
        }
        if (t.isIdentifier(callee, { name: 'useMemo' })) {
          computedNames.add(d.id.name)
          vueImports.add('computed')
          newBodyStmts.push(
            t.variableDeclaration(stmt.kind, [
              t.variableDeclarator(
                d.id,
                t.callExpression(t.identifier('computed'), [d.init.arguments[0]])
              )
            ])
          )
          continue
        }
        if (t.isIdentifier(callee, { name: 'useCallback' })) {
          newBodyStmts.push(
            t.variableDeclaration(stmt.kind, [
              t.variableDeclarator(d.id, d.init.arguments[0])
            ])
          )
          continue
        }
      }
    }

    // useEffect(fn, deps?)
    if (
      t.isExpressionStatement(stmt) &&
      t.isCallExpression(stmt.expression) &&
      t.isIdentifier(stmt.expression.callee, { name: 'useEffect' })
    ) {
      const [callback, deps] = stmt.expression.arguments
      if (deps && t.isArrayExpression(deps) && deps.elements.length > 0) {
        vueImports.add('watch')
        newBodyStmts.push(
          t.expressionStatement(
            t.callExpression(t.identifier('watch'), [
              deps.elements.length === 1 ? deps.elements[0] : t.arrayExpression(deps.elements),
              callback,
              t.objectExpression([t.objectProperty(t.identifier('immediate'), t.booleanLiteral(true))])
            ])
          )
        )
      } else {
        vueImports.add('onMounted')
        newBodyStmts.push(
          t.expressionStatement(
            t.callExpression(t.identifier('onMounted'), [callback])
          )
        )
      }
      continue
    }

    newBodyStmts.push(stmt)
  }

  // 4) Walk the rewritten body and JSX to:
  //    - rewrite `setX(v)` → `x.value = v`
  //    - rename className → class
  //    - prefix .value on bare references to ref state inside expressions
  //      (NOT inside JSX attribute names, NOT for property keys, NOT shadowed)
  const tempFn = t.functionDeclaration(fn.id, fn.params, t.blockStatement(newBodyStmts))
  traverse(t.file(t.program([tempFn])), {
    CallExpression (p) {
      const c = p.node.callee
      if (t.isIdentifier(c) && setterToState.has(c.name)) {
        // setX(arg) → x.value = arg
        const stateName = setterToState.get(c.name)
        const arg = p.node.arguments[0]
        if (!arg) return
        const assign = t.assignmentExpression(
          '=',
          t.memberExpression(t.identifier(stateName), t.identifier('value')),
          // If arg is a function (updater fn), call it with current .value
          t.isArrowFunctionExpression(arg) || t.isFunctionExpression(arg)
            ? t.callExpression(arg, [t.memberExpression(t.identifier(stateName), t.identifier('value'))])
            : arg
        )
        p.replaceWith(assign)
      }
    },
    JSXAttribute (p) {
      if (t.isJSXIdentifier(p.node.name) && p.node.name.name === 'className') {
        p.node.name.name = 'class'
      }
    },
    Identifier (p) {
      const name = p.node.name

      // Setter passed as a reference, e.g. `onChange={setSelected}` —
      // wrap as `(v) => (selected.value = v)`. Skip when called (handled by
      // CallExpression above) or in import/declaration positions.
      if (setterToState.has(name)) {
        const par = p.parent
        const inCall = t.isCallExpression(par) && par.callee === p.node
        const inDecl = t.isVariableDeclarator(par) && par.id === p.node
        const inMemberProp = t.isMemberExpression(par) && par.property === p.node && !par.computed
        const inObjKey = t.isObjectProperty(par) && par.key === p.node && !par.computed && !par.shorthand
        const inImport = t.isImportSpecifier(par) || t.isExportSpecifier(par)
        if (!inCall && !inDecl && !inMemberProp && !inObjKey && !inImport) {
          const stateName = setterToState.get(name)
          p.replaceWith(t.arrowFunctionExpression(
            [t.identifier('v')],
            t.assignmentExpression(
              '=',
              t.memberExpression(t.identifier(stateName), t.identifier('value')),
              t.identifier('v')
            )
          ))
          p.skip()
          return
        }
      }

      if (!refNames.has(name) && !computedNames.has(name)) return
      const parent = p.parent
      // LHS of variable declaration — skip
      if (t.isVariableDeclarator(parent) && parent.id === p.node) return
      // Object property KEY (not value) — skip when literal key
      if (t.isObjectProperty(parent) && parent.key === p.node && !parent.computed && !parent.shorthand) return
      // Shorthand object property `{ foo }` — expand to `{ foo: foo.value }`
      if (t.isObjectProperty(parent) && parent.shorthand && parent.key === p.node) {
        parent.shorthand = false
        parent.value = t.memberExpression(t.identifier(name), t.identifier('value'))
        p.skip()
        return
      }
      // Already wrapped as `x.value` — skip
      if (t.isMemberExpression(parent) && parent.object === p.node && t.isIdentifier(parent.property, { name: 'value' })) return
      // MemberExpression property position (non-computed): `obj.x` — skip
      if (t.isMemberExpression(parent) && parent.property === p.node && !parent.computed) return
      // OptionalMemberExpression property position (non-computed): `obj?.x` — skip
      if (t.isOptionalMemberExpression(parent) && parent.property === p.node && !parent.computed) return
      // JSX attribute / element name — skip
      if (t.isJSXAttribute(parent) || t.isJSXIdentifier(parent)) return
      // Function parameter declarations — skip
      if (t.isFunction(parent) && parent.params.includes(p.node)) return
      if (t.isArrowFunctionExpression(parent) && parent.params.includes(p.node)) return
      // Import/export specifiers — skip
      if (t.isImportSpecifier(parent) || t.isExportSpecifier(parent) || t.isImportDefaultSpecifier(parent) || t.isImportNamespaceSpecifier(parent)) return
      // Anywhere inside a TS type — skip (TSTypeQuery, TSTypeReference, TSTypeAnnotation, …)
      if (/^TS/.test(parent.type)) return
      // Inside a binding pattern (destructuring) — skip
      if (t.isObjectPattern(parent) || t.isArrayPattern(parent)) return
      if (t.isAssignmentPattern(parent) && parent.left === p.node) return
      if (t.isRestElement(parent) && parent.argument === p.node) return
      // LabeledStatement label — skip
      if (t.isLabeledStatement(parent) && parent.label === p.node) return
      // Catch clause param — skip
      if (t.isCatchClause(parent) && parent.param === p.node) return
      // Class member key — skip
      if ((t.isClassProperty(parent) || t.isClassMethod(parent) || t.isMethodDefinition?.(parent)) && parent.key === p.node && !parent.computed) return
      // Walk up to ensure we are not inside a TS type subtree (handles type annotations on params, etc.)
      let cursor = p.parentPath
      while (cursor) {
        if (/^TS/.test(cursor.node.type)) return
        if (t.isFunction(cursor.node) || t.isProgram(cursor.node)) break
        cursor = cursor.parentPath
      }
      // Replace bare identifier with x.value
      p.replaceWith(t.memberExpression(t.identifier(name), t.identifier('value')))
      p.skip()
    },
  })

  // 5) Build the new top-level code:
  //    Replace componentFn (the original export) with:
  //      `export default defineComponent(() => { ...stmts; return () => (JSX) })`
  // Pull return JSX out.
  const finalBody = tempFn.body.body
  let returnExpr = null
  const beforeReturn = []
  for (const s of finalBody) {
    if (t.isReturnStatement(s)) { returnExpr = s.argument; break }
    beforeReturn.push(s)
  }
  if (!returnExpr) throw new Error('No return statement in component function')

  const renderFn = t.arrowFunctionExpression([], returnExpr)
  const setupFn = beforeReturn.length === 0
    ? t.arrowFunctionExpression([], renderFn)
    : t.arrowFunctionExpression(
        [],
        t.blockStatement([
          ...beforeReturn,
          t.returnStatement(renderFn)
        ])
      )
  const defineCall = t.callExpression(t.identifier('defineComponent'), [setupFn])
  const exportDecl = t.exportDefaultDeclaration(defineCall)

  // Replace the original export with the new one.
  ast.program.body[componentFn.idx] = exportDecl

  // 6) Add the `vue` import line.
  const vueImportNode = t.importDeclaration(
    [...vueImports].sort().map((n) => t.importSpecifier(t.identifier(n), t.identifier(n))),
    t.stringLiteral('vue')
  )
  // Insert at top — after any other imports.
  let insertAt = 0
  while (insertAt < ast.program.body.length && t.isImportDeclaration(ast.program.body[insertAt])) insertAt++
  ast.program.body.splice(insertAt, 0, vueImportNode)

  const { code } = generate(ast, { jsescOption: { minimal: true } })
  return code
}

const files = listFiles(REACT_DIR).sort()
for (const reactPath of files) {
  total++
  const rel = path.relative(REACT_DIR, reactPath)
  const vuePath = path.join(VUE_DIR, rel)

  // Preserve hand-ported Vue files marked with our header.
  if (existsSync(vuePath)) {
    const existing = readFileSync(vuePath, 'utf8')
    if (existing.includes(HAND_PORT_MARKER)) { kept++; continue }
  }

  mkdirSync(path.dirname(vuePath), { recursive: true })
  try {
    const reactSrc = readFileSync(reactPath, 'utf8')
    const vueSrc = transform(reactSrc)
    writeFileSync(vuePath, vueSrc + '\n')
    ported++
  } catch (e) {
    const parts = rel.replace(/\.tsx$/, '').split(path.sep)
    const c = parts[0]; const slug = parts.slice(1).join('/') || 'default'
    writeFileSync(vuePath, STUB_SOURCE(c, slug))
    stubbed++
    stubbedFiles.push(rel)
    errors.push(`${rel}: ${e.message}`)
  }
}

console.log(`\nVue demo port:`)
console.log(`  total React demos:  ${total}`)
console.log(`  ported via AST:     ${ported}`)
console.log(`  stubbed (failed):   ${stubbed}`)
console.log(`  hand-ports kept:    ${kept}`)
if (errors.length) {
  console.log(`\nFirst 10 errors:`)
  for (const e of errors.slice(0, 10)) console.log(`  ${e}`)
}
