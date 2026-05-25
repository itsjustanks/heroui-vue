/**
 * Sonner / Toast — HeroUI v3 `Toast` compound, runtime backed by `vue-sonner`.
 *
 * heroui-vue's family directory is `sonner`, but — matching HeroUI — the
 * exported compound component is `Toast`.
 *
 * Compound API (HeroUI v3):
 *   `Toast`               — the single toast surface (= `ToastRoot`)
 *   `Toast.Provider`      — the toast region (`vue-sonner` `Toaster`)
 *   `Toast.Content`       — `ToastContent`
 *   `Toast.Indicator`     — `ToastIndicator`
 *   `Toast.Title`         — `ToastTitle`
 *   `Toast.Description`   — `ToastDescription`
 *   `Toast.ActionButton`  — `ToastActionButton`
 *   `Toast.CloseButton`   — `ToastCloseButton`
 *   `Toast.Queue`         — `ToastQueue` class
 *   `Toast.toast`         — imperative `toast()` API
 *
 * ⚠️  ARCHITECTURAL NOTE
 * HeroUI React's `Toast` is built on React Aria's `UNSTABLE_Toast` primitives.
 * heroui-vue's runtime is `vue-sonner`; the compound parts above are faithful
 * BEM transcriptions (see `toast-parts.tsx`) for use inside a `Toast.Provider`
 * custom render function, and `Toast.Provider` wraps vue-sonner's `Toaster`.
 *
 * @see https://www.heroui.com/docs/react/components/toast
 */
import ToastProvider from './sonner'
import { toast } from 'vue-sonner'
import { toastVariants } from '@heroui/styles'
import {
  ToastRoot,
  ToastContent,
  ToastIndicator,
  ToastTitle,
  ToastDescription,
  ToastActionButton,
  ToastCloseButton
} from './toast-parts'
import { ToastQueue, toastQueue } from './toast-queue'

/** Compound component — `Toast.Provider`, `Toast.Content`, … (HeroUI v3 API). */
export const Toast = Object.assign(ToastRoot, {
  Provider: ToastProvider,
  Content: ToastContent,
  Indicator: ToastIndicator,
  Title: ToastTitle,
  Description: ToastDescription,
  ActionButton: ToastActionButton,
  CloseButton: ToastCloseButton,
  Queue: ToastQueue,
  toast
})

/* -------------------------------------------------------------------------------------------------
 * Named Components
 * -----------------------------------------------------------------------------------------------*/
export {
  ToastProvider,
  ToastRoot,
  ToastContent,
  ToastIndicator,
  ToastTitle,
  ToastDescription,
  ToastActionButton,
  ToastCloseButton
}

/** Keep `Toaster` as a backward-compatible alias for `ToastProvider`. */
export { default as Toaster } from './sonner'

/* -------------------------------------------------------------------------------------------------
 * Utilities
 * -----------------------------------------------------------------------------------------------*/
export { ToastQueue, toastQueue }

/** `toast()` imperative API from `vue-sonner` (mirrors HeroUI's `toast` export). */
export { toast }

/* -------------------------------------------------------------------------------------------------
 * Constants
 * -----------------------------------------------------------------------------------------------*/
export { DEFAULT_TOAST_TIMEOUT, DEFAULT_MAX_VISIBLE_TOAST, DEFAULT_GAP } from './toast-queue'
export type { ToastQueueOptions, ToastContentValue } from './toast-queue'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { toastVariants }
export type { ToastVariants } from '@heroui/styles'

export default ToastProvider
