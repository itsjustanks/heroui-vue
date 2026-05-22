/**
 * HeroUI-Vue Toolbar — faithful HeroUI v3 toolbar primitive.
 * Part of the HeroUI-for-Vue primitive library.
 *
 * A horizontal/vertical action bar with arrow-key roving focus, built over
 * reka-ui `ToolbarRoot`/`ToolbarButton`/`ToolbarLink`/`ToolbarSeparator`.
 * HeroUI v3 ships only `ToolbarRoot`; the Button/Link/Separator parts are the
 * sanctioned reka-ui composition surface, exposed as dot-notation parts.
 */
import { ToolbarRoot } from './toolbar-root'
import { ToolbarButton } from './toolbar-button'
import { ToolbarLink } from './toolbar-link'
import { ToolbarSeparator } from './toolbar-separator'

/** Compound component — `Toolbar` is `ToolbarRoot` with dot-notation parts attached. */
export const Toolbar = Object.assign(ToolbarRoot, {
  Root: ToolbarRoot,
  Button: ToolbarButton,
  Link: ToolbarLink,
  Separator: ToolbarSeparator
})

export { ToolbarRoot, ToolbarButton, ToolbarLink, ToolbarSeparator }
export { toolbarVariants } from './toolbar-variants'
export type { TToolbarVariants } from './toolbar-variants'

export default Toolbar
