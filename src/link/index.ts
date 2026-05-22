/**
 * Link — a faithful Vue port of HeroUI v3 `Link`.
 *
 * Compound API (HeroUI v3): `Link` (= `LinkRoot`) with `.Root` / `.Icon`
 * dot-notation parts. The flat part exports (`LinkRoot`, `LinkIcon`) are
 * available too. Built over reka-ui `Primitive` for `as`/`asChild`.
 */
import { LinkRoot } from './link-root'
import { LinkIcon } from './link-icon'

/** Compound component — `Link.Root`, `Link.Icon` (HeroUI v3 API). */
export const Link = Object.assign(LinkRoot, {
  Root: LinkRoot,
  Icon: LinkIcon
})

export { LinkRoot, LinkIcon }
export { linkVariants } from '@heroui/styles'
export type { LinkVariants } from '@heroui/styles'
