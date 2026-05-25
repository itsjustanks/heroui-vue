/**
 * HeroUI-Vue Drawer — faithful HeroUI v3 drawer over reka-ui Dialog.
 *
 * An edge-anchored sliding panel. Compound (HeroUI `drawer.css`):
 * Backdrop > Content (positioning, owns `placement`) > Dialog (the panel).
 * Use via dot notation (`Drawer.Trigger`, …) or the named exports.
 *
 * Compound API (mirrors HeroUI v3 React `index.ts`):
 *   Drawer / Drawer.Root, .Trigger, .Backdrop, .Content, .Dialog,
 *   .Header, .Heading, .Body, .Footer, .Handle, .CloseTrigger
 *
 * @see https://www.heroui.com/docs/react/components/drawer
 */
import DrawerRoot from './drawer'
import DrawerTrigger from './drawer-trigger'
import DrawerBackdrop from './drawer-backdrop'
import DrawerContent from './drawer-content'
import DrawerDialog from './drawer-dialog'
import DrawerHeader from './drawer-header'
import DrawerHeading from './drawer-heading'
import DrawerBody from './drawer-body'
import DrawerFooter from './drawer-footer'
import DrawerHandle from './drawer-handle'
import DrawerCloseTrigger from './drawer-close-trigger'

/** Compound component — `Drawer` is the root, with parts attached via dot notation. */
export const Drawer = Object.assign(DrawerRoot, {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Backdrop: DrawerBackdrop,
  Content: DrawerContent,
  Dialog: DrawerDialog,
  Header: DrawerHeader,
  Heading: DrawerHeading,
  Body: DrawerBody,
  Footer: DrawerFooter,
  Handle: DrawerHandle,
  CloseTrigger: DrawerCloseTrigger
})

export {
  DrawerRoot,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerContent,
  DrawerDialog,
  DrawerHeader,
  DrawerHeading,
  DrawerBody,
  DrawerFooter,
  DrawerHandle,
  DrawerCloseTrigger
}

export { drawerVariants } from '@heroui/styles'
export type { DrawerVariants } from '@heroui/styles'

export default Drawer
