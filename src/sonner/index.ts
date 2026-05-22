/**
 * Sonner / Toast — HeroUI v3 `Toast.Provider` region wrapped via `vue-sonner`.
 *
 * ⚠️  ARCHITECTURAL FLAG
 * HeroUI React's `Toast` is a compound BEM component built on React Aria's
 * `UNSTABLE_Toast` / `UNSTABLE_ToastRegion` primitives with full compound parts:
 * `Toast.Root`, `Toast.Content`, `Toast.Indicator`, `Toast.Title`,
 * `Toast.Description`, `Toast.ActionButton`, `Toast.CloseButton`.
 *
 * `vue-sonner` wraps `sonner` and has no reka-ui / React Aria equivalent.
 * A faithful 1:1 port of every compound part is NOT possible without replacing
 * `vue-sonner` entirely, so this package exports only `ToastProvider` (≈
 * HeroUI's `Toast.Provider` region) and re-exports `toast` from `vue-sonner`.
 * HeroUI's BEM classes are wired via `toastVariants` so styles match.
 *
 * The legacy `Toaster` export is kept as an alias for backward compatibility.
 */
import ToastProvider from './sonner'
import { toast } from 'vue-sonner'
import { toastVariants } from '@heroui/styles'

/** `Toast` — alias for `ToastProvider` (mirrors HeroUI's `Toast.Provider` naming). */
export const Toast = Object.assign(ToastProvider, {
  Provider: ToastProvider,
})

export { ToastProvider }

/** Keep `Toaster` as a backward-compatible alias for `ToastProvider`. */
export { default as Toaster } from './sonner'

/** `toast()` imperative API from `vue-sonner` (mirrors HeroUI's `toast` export). */
export { toast }

/** BEM variant function — `toastVariants({ placement, variant })`. */
export { toastVariants }
export type { ToastVariants } from '@heroui/styles'

export default ToastProvider
