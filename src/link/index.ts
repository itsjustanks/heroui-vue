/**
 * HeroUI-Vue Link — faithful HeroUI v3 link primitive (styled anchor).
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * Compound API mirrors HeroUI v3: `Link` (= `LinkRoot`) with `.Root` / `.Icon`
 * dot-notation parts. Built over reka-ui `Primitive` for `as` / `asChild`.
 */
import { LinkRoot } from './link-root'
import { LinkIcon } from './link-icon'

/** Compound component — `Link` is `LinkRoot` with dot-notation parts attached. */
export const Link = Object.assign(LinkRoot, {
  Root: LinkRoot,
  Icon: LinkIcon
})

export { LinkRoot, LinkIcon }

export default Link
