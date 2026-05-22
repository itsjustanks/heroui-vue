/**
 * AlertDialog — faithful Vue port of HeroUI v3 `AlertDialog`.
 *
 * Compound API (HeroUI v3):
 *   `AlertDialog`                 → AlertDialogRoot (DialogTrigger wrapper, no DOM)
 *   `AlertDialog.Trigger`         → AlertDialogTrigger
 *   `AlertDialog.Backdrop`        → AlertDialogBackdrop  (portal + overlay)
 *   `AlertDialog.Container`       → AlertDialogContainer  (modal + focus trap)
 *   `AlertDialog.Dialog`          → AlertDialogDialog  (role="alertdialog")
 *   `AlertDialog.Header`          → AlertDialogHeader
 *   `AlertDialog.Heading`         → AlertDialogHeading  (accessible title)
 *   `AlertDialog.Body`            → AlertDialogBody  (accessible description)
 *   `AlertDialog.Footer`          → AlertDialogFooter
 *   `AlertDialog.Icon`            → AlertDialogIcon
 *   `AlertDialog.CloseTrigger`    → AlertDialogCloseTrigger
 */
import { AlertDialogRoot } from './alert-dialog'
import { AlertDialogTrigger } from './alert-dialog-trigger'
import { AlertDialogBackdrop } from './alert-dialog-backdrop'
import { AlertDialogContainer } from './alert-dialog-container'
import { AlertDialogDialog } from './alert-dialog-dialog'
import { AlertDialogHeader } from './alert-dialog-header'
import { AlertDialogHeading } from './alert-dialog-heading'
import { AlertDialogBody } from './alert-dialog-body'
import { AlertDialogFooter } from './alert-dialog-footer'
import { AlertDialogIcon } from './alert-dialog-icon'
import { AlertDialogCloseTrigger } from './alert-dialog-close-trigger'

/** Compound component — `AlertDialog.Trigger`, `AlertDialog.Backdrop`, … (HeroUI v3 API). */
export const AlertDialog = Object.assign(AlertDialogRoot, {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Backdrop: AlertDialogBackdrop,
  Container: AlertDialogContainer,
  Dialog: AlertDialogDialog,
  Header: AlertDialogHeader,
  Heading: AlertDialogHeading,
  Body: AlertDialogBody,
  Footer: AlertDialogFooter,
  Icon: AlertDialogIcon,
  CloseTrigger: AlertDialogCloseTrigger
})

export {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogBackdrop,
  AlertDialogContainer,
  AlertDialogDialog,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogIcon,
  AlertDialogCloseTrigger
}

export { alertDialogVariants } from '@heroui/styles'
export type { AlertDialogVariants } from '@heroui/styles'
