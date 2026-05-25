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
 *
 * @see https://www.heroui.com/docs/react/components/alert-dialog
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
import { Button } from '@/button'
import { h } from 'vue'

const AlertDialogContent = (props: any, { slots, attrs }: any) => h(
  AlertDialogBackdrop,
  null,
  () => h(
    AlertDialogContainer,
    { size: props?.size ?? 'md', placement: props?.placement ?? 'center' },
    () => h(AlertDialogDialog, { ...attrs, class: props?.class }, () => slots.default?.())
  )
)

const AlertDialogDescription = AlertDialogBody
const AlertDialogTitle = AlertDialogHeading
const AlertDialogCancel = (props: any, { slots, attrs }: any) => h(
  AlertDialogCloseTrigger,
  null,
  () => h(Button, { ...attrs, variant: props?.variant ?? 'secondary', class: props?.class }, () => slots.default?.())
)
const AlertDialogAction = (props: any, { slots, attrs }: any) => h(
  Button,
  { ...attrs, variant: props?.variant ?? 'danger', class: props?.class },
  () => slots.default?.()
)

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
  CloseTrigger: AlertDialogCloseTrigger,
  /** @deprecated Use Backdrop > Container > Dialog. */
  Content: AlertDialogContent,
  /** @deprecated Use Heading. */
  Title: AlertDialogTitle,
  /** @deprecated Use Body. */
  Description: AlertDialogDescription,
  /** @deprecated Use CloseTrigger + Button. */
  Cancel: AlertDialogCancel,
  /** @deprecated Use Button. */
  Action: AlertDialogAction
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
