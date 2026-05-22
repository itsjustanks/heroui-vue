/** A single syntax chunk inside the Vue side of a paired diff row. */
export interface DiffPart {
  text: string
  added: boolean
}

/** A single aligned row of the Vue ↔ React source diff. */
export interface DiffRow {
  vue: string | null
  react: string | null
  vueParts: DiffPart[]
  reactParts: DiffPart[]
  /** `changed` means the row is aligned, with Vue-only characters highlighted in `vueParts`. */
  type: 'same' | 'changed' | 'vue' | 'react'
}

/**
 * Similarity-based source diff of two demos, producing aligned side-by-side rows.
 * The playground compares Vue TSX against React TSX, so exact line matching is
 * too brittle: wrappers and JSX aliases shift indentation and make useful lines
 * look unrelated. We align similar lines first, then highlight only the
 * Vue-side characters that are not present in the paired React line.
 */
export function diffLines (vueSource: string, reactSource: string): DiffRow[] {
  const a = vueSource.split('\n')
  const b = reactSource.split('\n')

  return alignLines(a, b).map((row) => {
    if (row.vueIndex !== null && row.reactIndex !== null) {
      const vue = a[row.vueIndex]
      const react = b[row.reactIndex]
      const same = vue === react
      return {
        vue,
        react,
        vueParts: same ? [{ text: vue, added: false }] : diffAddedParts(vue, react),
        reactParts: [{ text: react, added: false }],
        type: same ? 'same' : 'changed'
      }
    }

    if (row.vueIndex !== null) {
      const vue = a[row.vueIndex]
      return {
        vue,
        react: null,
        vueParts: [{ text: vue, added: true }],
        reactParts: [],
        type: 'vue'
      }
    }

    const react = b[row.reactIndex]
    return {
      vue: null,
      react,
      vueParts: [],
      reactParts: [{ text: react, added: false }],
      type: 'react'
    }
  })
}

interface AlignmentRow {
  vueIndex: number | null
  reactIndex: number | null
}

const GAP_SCORE = -0.75
const MIN_PAIR_SIMILARITY = 0.5

function alignLines (vueLines: string[], reactLines: string[]): AlignmentRow[] {
  const m = vueLines.length
  const n = reactLines.length
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))

  for (let i = m - 1; i >= 0; i--) dp[i][n] = dp[i + 1][n] + GAP_SCORE
  for (let j = n - 1; j >= 0; j--) dp[m][j] = dp[m][j + 1] + GAP_SCORE

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const similarity = lineSimilarity(vueLines[i], reactLines[j])
      const pair = similarity >= MIN_PAIR_SIMILARITY
        ? dp[i + 1][j + 1] + similarity * 2
        : Number.NEGATIVE_INFINITY
      const vueOnly = dp[i + 1][j] + GAP_SCORE
      const reactOnly = dp[i][j + 1] + GAP_SCORE
      dp[i][j] = Math.max(pair, vueOnly, reactOnly)
    }
  }

  const rows: AlignmentRow[] = []
  let i = 0
  let j = 0
  while (i < m || j < n) {
    if (i < m && j < n) {
      const similarity = lineSimilarity(vueLines[i], reactLines[j])
      const pair = similarity >= MIN_PAIR_SIMILARITY
        ? dp[i + 1][j + 1] + similarity * 2
        : Number.NEGATIVE_INFINITY
      if (nearlyEqual(dp[i][j], pair)) {
        rows.push({ vueIndex: i, reactIndex: j })
        i++; j++
        continue
      }
    }

    if (i < m && (j === n || nearlyEqual(dp[i][j], dp[i + 1][j] + GAP_SCORE))) {
      rows.push({ vueIndex: i, reactIndex: null })
      i++
      continue
    }

    rows.push({ vueIndex: null, reactIndex: j })
    j++
  }

  return rows
}

function nearlyEqual (a: number, b: number): boolean {
  return Math.abs(a - b) < 0.000001
}

function lineSimilarity (vueLine: string, reactLine: string): number {
  const vue = normalizeLine(vueLine)
  const react = normalizeLine(reactLine)
  if (vue === react) return 1
  if (!vue || !react) return 0

  const common = lcsLength(vue, react)
  return (common * 2) / (vue.length + react.length)
}

function normalizeLine (line: string): string {
  return line
    .trim()
    .replace(/\bclassName\b/g, 'class')
    .replace(/\bstrokeWidth\b/g, 'stroke-width')
    .replace(/\bstrokeLinecap\b/g, 'stroke-linecap')
    .replace(/\bstrokeLinejoin\b/g, 'stroke-linejoin')
    .replace(/\bfillRule\b/g, 'fill-rule')
    .replace(/\bclipRule\b/g, 'clip-rule')
    .replace(/@itsjustanks\/heroui-vue|@heroui\/react/g, '@heroui/component')
    .replace(/^export default defineComponent\(\(\) => \(\) => \($/, 'export default component')
    .replace(/^export default function\s+\w+\s*\(\)\s*\{$/, 'export default component')
    .replace(/\s+/g, ' ')
}

function diffAddedParts (source: string, reference: string): DiffPart[] {
  const lcs = buildLcsTable(source, reference)
  const parts: DiffPart[] = []
  let i = 0
  let j = 0

  while (i < source.length) {
    if (j < reference.length && source[i] === reference[j]) {
      pushPart(parts, source[i], false)
      i++; j++
    } else if (j < reference.length && lcs[i][j + 1] >= lcs[i + 1][j]) {
      j++
    } else {
      pushPart(parts, source[i], true)
      i++
    }
  }

  return parts
}

function pushPart (parts: DiffPart[], text: string, added: boolean): void {
  const previous = parts[parts.length - 1]
  if (previous && previous.added === added) {
    previous.text += text
    return
  }
  parts.push({ text, added })
}

function lcsLength (a: string, b: string): number {
  return buildLcsTable(a, b)[0][0]
}

function buildLcsTable (a: string, b: string): number[][] {
  const m = a.length
  const n = b.length

  // lcs[i][j] = length of the longest common subsequence of a[i:] and b[j:]
  const lcs: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      lcs[i][j] = a[i] === b[j]
        ? lcs[i + 1][j + 1] + 1
        : Math.max(lcs[i + 1][j], lcs[i][j + 1])
    }
  }

  return lcs
}
