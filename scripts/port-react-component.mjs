/**
 * port-react-component — source-driven HeroUI React -> Vue TSX starter.
 *
 * This intentionally starts from the upstream React component folder every time.
 * It generates Vue TSX that keeps the same exported parts, `data-slot` values,
 * style slot calls, and React prop spellings (`className`, `isDisabled`,
 * `onPress`, etc.) so docs snippets can be copied with minimal edits.
 *
 * Usage:
 *   node scripts/port-react-component.mjs badge
 *   node scripts/port-react-component.mjs badge --write --force
 */
import { existsSync, rmSync } from 'node:fs'
import { basename, join } from 'node:path'
import {
  OSS_REACT_ROOT,
  OSS_STYLES_ROOT,
  ROOT,
  ensureDir,
  extractStyleSlots,
  parseCompoundParts,
  parseDataSlots,
  parseNamedExports,
  parsePropNames,
  pathExists,
  readText,
  writeJsonFile
} from './parity-utils.mjs'
import { writeFileSync } from 'node:fs'

const args = process.argv.slice(2)
const WRITE = args.includes('--write')
const FORCE = args.includes('--force')
const COMPONENTS = args.filter((arg) => !arg.startsWith('--'))

if (!COMPONENTS.length) {
  console.error('usage: node scripts/port-react-component.mjs <component> [--write] [--force]')
  process.exit(1)
}

for (const component of COMPONENTS) {
  portComponent(component)
}

function portComponent (component) {
  const reactDir = join(OSS_REACT_ROOT, 'src/components', component)
  const sourcePath = join(reactDir, `${component}.tsx`)
  const indexPath = join(reactDir, 'index.ts')
  const stylePath = join(OSS_STYLES_ROOT, 'src/components', component, `${component}.styles.ts`)

  for (const path of [sourcePath, indexPath, stylePath]) {
    if (!pathExists(path)) throw new Error(`missing upstream source: ${path}`)
  }

  const reactSource = readText(sourcePath)
  const reactIndex = readText(indexPath)
  const styleSource = readText(stylePath)
  const styleInfo = extractStyleSlots(styleSource)
  const variantFunction = `${camel(component)}Variants`
  const variantType = `${pascal(component)}Variants`
  const contextName = `${constant(component)}_CONTEXT`
  const parts = exportedParts(reactSource, reactIndex)
  const compoundParts = parseCompoundParts(reactIndex)
  const outDir = WRITE ? join(ROOT, 'src', component) : join(ROOT, 'codemod-output', component)

  if (existsSync(outDir) && FORCE) rmSync(outDir, { recursive: true, force: true })
  if (existsSync(outDir) && !FORCE) {
    throw new Error(`${outDir} already exists; pass --force to overwrite`)
  }

  ensureDir(outDir)
  writeFileSync(join(outDir, `${component}.tsx`), renderComponentFile({
    component,
    contextName,
    parts,
    reactSource,
    styleSlots: styleInfo.slots,
    variantFunction,
    variantType
  }))
  writeFileSync(join(outDir, 'index.ts'), renderIndexFile({ component, compoundParts, parts, variantFunction, variantType }))
  writeJsonFile(join(outDir, 'parity-source.json'), {
    component,
    source: {
      reactComponent: sourcePath,
      reactIndex: indexPath,
      styles: stylePath
    },
    generated: {
      output: outDir,
      writeMode: WRITE ? 'src' : 'codemod-output'
    },
    upstream: {
      exports: parseNamedExports(reactIndex),
      compoundParts,
      propNames: parsePropNames(reactSource),
      dataSlots: parseDataSlots(reactSource),
      styleSlots: styleInfo.slots
    }
  })

  console.log(`ported ${component} -> ${outDir}`)
}

function renderComponentFile ({ component, contextName, parts, reactSource, styleSlots, variantFunction, variantType }) {
  const componentPascal = pascal(component)
  const importedVariantType = reactSource.includes(variantType) ? `, type ${variantType}` : ''
  const body = parts.map((part) => renderPart({ component, contextName, part, styleSlots, variantFunction, variantType })).join('\n\n')

  return `import { computed, defineComponent, inject, provide, type ComputedRef, type InjectionKey, type PropType } from 'vue'
import { ${variantFunction}${importedVariantType} } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps, reactDisabled, reactDisabledProps, reactPressAttrs } from '@/lib/react-compat'

type T${componentPascal}Slots = ReturnType<typeof ${variantFunction}>

const ${contextName}: InjectionKey<{ slots: ComputedRef<T${componentPascal}Slots> }> = Symbol('heroui-vue-${component}')

function use${componentPascal}Slots () {
  const ctx = inject(${contextName}, null)
  return ctx?.slots.value ?? ${variantFunction}()
}

const unknownProp = {
  type: [String, Number, Boolean, Object, Array, Function] as PropType<unknown>,
  default: undefined
}

${body}
`
}

function renderPart ({ component, contextName, part, styleSlots, variantFunction, variantType }) {
  const slice = componentSlice(part.name, part.source)
  const dataSlot = parseDataSlots(slice)[0] ?? slotFromPart(component, part.name)
  const tag = hostTag(slice)
  const styleSlot = styleSlotFor(component, dataSlot, styleSlots)
  const propNames = propsForPart(part.name, part.source)
  const variantProps = propNames.filter((prop) => part.source.includes(`${variantType}["${prop}"]`))
  const hasOwnSlots = part.name.endsWith('Root') || part.name === pascal(component)

  return `export const ${part.name} = defineComponent({
  name: '${part.name}',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    ...reactDisabledProps,
${renderProps(propNames, variantProps, variantType)}
  },
  setup (props, { attrs, slots }) {
${hasOwnSlots ? `    const slotMap = computed(() => ${variantFunction}(${variantObject(variantProps)}))
    provide(${contextName}, { slots: slotMap })
` : ''}
    return () => {
      const componentSlots = ${hasOwnSlots ? 'slotMap.value' : `use${pascal(component)}Slots()`}
      const isDisabled = reactDisabled(props)

      return (
        <${tag}
          {...reactPressAttrs(attrs)}
          data-disabled={isDisabled ? 'true' : undefined}
          data-slot="${dataSlot}"
          class={cn(${slotClassExpression(styleSlot)}, reactClass(props))}
        >
          {slots.default?.()}
        </${tag}>
      )
    }
  }
})`
}

function renderIndexFile ({ component, compoundParts, parts, variantFunction, variantType }) {
  const root = parts.find((part) => part.name.endsWith('Root'))?.name ?? parts[0].name
  const compound = compoundParts.length ? compoundParts : ['Root', ...parts.filter((part) => part.name !== root).map((part) => part.name.replace(new RegExp(`^${pascal(component)}`), ''))]

  return `import { ${parts.map((part) => part.name).join(', ')} } from './${component}'

export const ${pascal(component)} = Object.assign(${root}, {
${compound.map((part) => `  ${part}: ${part === 'Root' ? root : pascal(component) + part}`).join(',\n')}
})

export { ${parts.map((part) => part.name).join(', ')} }
export { ${variantFunction} } from '@heroui/styles'
export type { ${variantType} } from '@heroui/styles'
`
}

function renderProps (propNames, variantProps, variantType) {
  return propNames
    .filter((prop) => !['children', 'className'].includes(prop))
    .filter((prop) => !['disabled', 'isDisabled'].includes(prop))
    .map((prop) => `    ${prop}: ${variantProps.includes(prop) ? variantProp(prop, variantType) : 'unknownProp'},`)
    .join('\n')
}

function variantProp (prop, variantType) {
  return `{ type: String as PropType<${variantType}['${prop}']>, default: undefined }`
}

function variantObject (variantProps) {
  if (!variantProps.length) return ''
  return `{ ${variantProps.map((prop) => `${prop}: props.${prop}`).join(', ')} }`
}

function slotClassExpression (styleSlot) {
  if (styleSlot === 'base') return 'componentSlots.base?.() ?? componentSlots.base'
  return `componentSlots.${styleSlot}?.() ?? componentSlots.${styleSlot}`
}

function exportedParts (reactSource, reactIndex) {
  const exported = parseNamedExports(reactSource)
    .filter((name) => /^[A-Z]/.test(name))
    .map((name) => ({ name, source: reactSource }))

  if (exported.length) return exported

  return parseNamedExports(reactIndex)
    .filter((name) => /^[A-Z]/.test(name))
    .map((name) => ({ name, source: reactSource }))
}

function componentSlice (name, source) {
  const start = source.search(new RegExp(`(?:const|function)\\s+${name}\\b`))
  if (start === -1) return source

  const rest = source.slice(start)
  const next = rest.slice(1).search(/\n(?:const|function)\s+[A-Z]/)
  return next === -1 ? rest : rest.slice(0, next + 1)
}

function propsForPart (name, source) {
  const interfaceMatch = source.match(new RegExp(`interface\\s+${name}Props[\\s\\S]*?\\{([\\s\\S]*?)\\n\\}`))
  if (!interfaceMatch) return []
  return [...interfaceMatch[1].matchAll(/^\s*([A-Za-z_$][\w$]*)\??\s*:/gm)].map((match) => match[1])
}

function hostTag (source) {
  const match = source.match(/<dom\.([a-z][\w-]*)\b/) ?? source.match(/<([a-z][\w-]*)\b/)
  return match?.[1] ?? 'div'
}

function styleSlotFor (component, dataSlot, styleSlots) {
  if (styleSlots.base && (dataSlot === component || dataSlot === `${component}-root`)) return 'base'

  const suffix = dataSlot.replace(new RegExp(`^${component}-?`), '')
  const camelSlot = camel(suffix)
  return styleSlots[camelSlot] ? camelSlot : 'base'
}

function slotFromPart (component, part) {
  return `${component}-${kebab(part.replace(new RegExp(`^${pascal(component)}`), '') || 'root')}`
}

function pascal (value) {
  return value.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('')
}

function camel (value) {
  const pascalValue = pascal(value)
  return pascalValue.charAt(0).toLowerCase() + pascalValue.slice(1)
}

function constant (value) {
  return value.toUpperCase().replace(/-/g, '_')
}

function kebab (value) {
  return basename(value)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase()
}
