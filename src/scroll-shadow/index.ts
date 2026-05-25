/**
 * ScrollShadow — faithful Vue port of HeroUI v3 `ScrollShadow`.
 *
 * Compound API (HeroUI v3): `ScrollShadow`, `ScrollShadow.Root`.
 * Flat export: `ScrollShadowRoot`.
 *
 * This family maps to the heroui-vue `scroll-area` directory — the component
 * was re-named from the previous reka-ui `ScrollArea` to match HeroUI v3 exactly.
 *
 * @see https://www.heroui.com/docs/react/components/scroll-shadow
 */
import { ScrollShadowRoot } from './scroll-area'

/** Compound component — `ScrollShadow.Root` (HeroUI v3 API). */
export const ScrollShadow = Object.assign(ScrollShadowRoot, {
  Root: ScrollShadowRoot,
})

export { ScrollShadowRoot }
export type { ScrollShadowVisibility } from './scroll-area'
export { useScrollShadow } from './use-scroll-shadow'
export type { UseScrollShadowProps, UseScrollShadowReturn } from './use-scroll-shadow'
export { scrollShadowVariants } from '@heroui/styles'
export type { ScrollShadowVariants } from '@heroui/styles'
