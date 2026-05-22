import { h, type FunctionalComponent } from 'vue'

/**
 * heroui-vue icons — the **gravity-ui** icon set
 * (https://github.com/gravity-ui/icons), the icon family HeroUI v3 uses.
 *
 * Each export is a Vue functional component rendering a 16x16 SVG with
 * `currentColor` fill and a `1em` default size. Pass `class` (e.g. `size-4`) to
 * size it; `class`, `data-*` and other attributes fall through to the `<svg>`.
 *
 * SVG path data is vendored verbatim from `@gravity-ui/icons` (MIT).
 */
type IconProps = Record<string, any>

function gravityIcon (body: string): FunctionalComponent<IconProps> {
  return () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
    width: '1em',
    height: '1em',
    fill: 'none',
    innerHTML: body
  })
}

export const IconCheck = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"/>')

export const IconChevronDown = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>')

export const IconChevronLeft = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>')

export const IconChevronRight = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0" clip-rule="evenodd"/>')

export const IconChevronUp = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M13.03 10.53a.75.75 0 0 1-1.06 0L8 6.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06" clip-rule="evenodd"/>')

export const IconChevronsLeft = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M12.53 5.03a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L9.56 8zm-5 0a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06L4.56 8z" clip-rule="evenodd"/>')

export const IconChevronsRight = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M3.47 10.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 1.06L6.44 8zm5 0a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 1.06L11.44 8z" clip-rule="evenodd"/>')

export const IconCircle = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"/>')

export const IconCalendarDays = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M5.25 5.497a.75.75 0 0 1-.75-.75V4A1.5 1.5 0 0 0 3 5.5v1h10v-1A1.5 1.5 0 0 0 11.5 4v.75a.75.75 0 0 1-1.5 0V4H6v.747a.75.75 0 0 1-.75.75M10 2.5H6v-.752a.75.75 0 1 0-1.5 0V2.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0zM3 8v3.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8z" clip-rule="evenodd"/>')

export const IconExternalLink = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M10 1.5A.75.75 0 0 0 10 3h1.94L6.97 7.97a.75.75 0 0 0 1.06 1.06L13 4.06V6a.75.75 0 0 0 1.5 0V2.25a.75.75 0 0 0-.75-.75zM7.5 3.25a.75.75 0 0 0-.75-.75H4.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9.25a.75.75 0 0 0-1.5 0v2.25a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 3 11.5v-6A1.5 1.5 0 0 1 4.5 4h2.25a.75.75 0 0 0 .75-.75" clip-rule="evenodd"/>')

export const IconMinus = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M1.75 8a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11A.75.75 0 0 1 1.75 8" clip-rule="evenodd"/>')

export const IconPlus = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clip-rule="evenodd"/>')

export const IconMoreHorizontal = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/>')

export const IconX = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>')

export const IconLoader = gravityIcon('<path fill="currentColor" fill-rule="evenodd" d="M6.906 1.085a7 7 0 0 1 2.188 0 .75.75 0 0 1-.232 1.482 5.6 5.6 0 0 0-1.724 0 .75.75 0 0 1-.232-1.482M4.933 2.502a.75.75 0 0 1-.166 1.048c-.466.34-.878.75-1.217 1.217a.75.75 0 0 1-1.213-.882 7 7 0 0 1 1.548-1.548.75.75 0 0 1 1.048.165m6.135 0a.75.75 0 0 1 1.047-.165 7 7 0 0 1 1.548 1.548.75.75 0 0 1-1.213.882 5.5 5.5 0 0 0-1.217-1.217.75.75 0 0 1-.165-1.048M1.943 6.28a.75.75 0 0 1 .624.857 5.6 5.6 0 0 0 0 1.724.75.75 0 0 1-1.482.232 7 7 0 0 1 0-2.188.75.75 0 0 1 .858-.625m12.115 0a.75.75 0 0 1 .857.625 7 7 0 0 1 0 2.188.75.75 0 1 1-1.482-.232 5.5 5.5 0 0 0 0-1.724.75.75 0 0 1 .624-.857M2.502 11.068a.75.75 0 0 1 1.048.165c.34.466.75.878 1.217 1.217a.75.75 0 0 1-.882 1.213 7 7 0 0 1-1.548-1.548.75.75 0 0 1 .165-1.047m10.996 0a.75.75 0 0 1 .165 1.047 7 7 0 0 1-1.548 1.548.75.75 0 0 1-.883-1.213 5.5 5.5 0 0 0 1.218-1.217.75.75 0 0 1 1.048-.165m-7.217 2.99a.75.75 0 0 1 .857-.625 5.5 5.5 0 0 0 1.724 0 .75.75 0 0 1 .232 1.482 7 7 0 0 1-2.188 0 .75.75 0 0 1-.625-.857" clip-rule="evenodd"/>')
