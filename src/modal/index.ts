/**
 * HeroUI-Vue Modal — faithful HeroUI v3 modal over reka-ui Dialog.
 *
 * 3-layer compound (HeroUI `modal.css`): Backdrop (dim overlay) > Container
 * (positioning, scroll, size) > Dialog (the `role=dialog` box). Use via dot
 * notation (`Modal.Trigger`, `Modal.Backdrop`, …) or the named exports.
 *
 * Compound API (mirrors HeroUI v3 React `index.ts`):
 *   Modal / Modal.Root, .Trigger, .Backdrop, .Container, .Dialog,
 *   .Header, .Icon, .Heading, .Body, .Footer, .CloseTrigger
 */
import ModalRoot from './modal'
import ModalTrigger from './modal-trigger'
import ModalBackdrop from './modal-backdrop'
import ModalContainer from './modal-container'
import ModalDialog from './modal-dialog'
import ModalHeader from './modal-header'
import ModalIcon from './modal-icon'
import ModalHeading from './modal-heading'
import ModalBody from './modal-body'
import ModalFooter from './modal-footer'
import ModalCloseTrigger from './modal-close-trigger'

/** Compound component — `Modal` is the root, with parts attached via dot notation. */
export const Modal = Object.assign(ModalRoot, {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Backdrop: ModalBackdrop,
  Container: ModalContainer,
  Dialog: ModalDialog,
  Header: ModalHeader,
  Icon: ModalIcon,
  Heading: ModalHeading,
  Body: ModalBody,
  Footer: ModalFooter,
  CloseTrigger: ModalCloseTrigger
})

export {
  ModalRoot,
  ModalTrigger,
  ModalBackdrop,
  ModalContainer,
  ModalDialog,
  ModalHeader,
  ModalIcon,
  ModalHeading,
  ModalBody,
  ModalFooter,
  ModalCloseTrigger
}

export { modalVariants } from '@heroui/styles'
export type { ModalVariants } from '@heroui/styles'

/**
 * shadcn-vue `Dialog` compatibility aliases — let a project migrating from
 * shadcn-vue swap import paths to heroui-vue, then converge on `Modal.*`.
 */
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogScrollContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose
} from './compat'

export default Modal
