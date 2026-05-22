/**
 * HeroUI-Vue Drawer — faithful HeroUI v3 drawer over reka-ui Dialog.
 *
 * An edge-anchored sliding panel. Same 3-layer compound as the modal (HeroUI
 * `drawer.css`): Backdrop > Content (positioning, owns `placement`) > Dialog
 * (the panel). Use via dot notation (`Drawer.Trigger`, …) or the named exports.
 * Part of the HeroUI-for-Vue primitive library.
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

export default Drawer
