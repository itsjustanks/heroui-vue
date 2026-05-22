import { toast as sonnerToast } from 'vue-sonner'

/**
 * Toast queue — Vue transcription of HeroUI v3's `toast-queue.ts`.
 *
 * HeroUI React's `ToastQueue` wraps React Aria's `UNSTABLE_ToastQueue`.
 * heroui-vue's toast runtime is `vue-sonner`, so this `ToastQueue` is a thin
 * class around vue-sonner's imperative `toast`, keeping HeroUI's public shape
 * (`add`, `close`, `clear`, `pauseAll`, `resumeAll`) so consumers can hold a
 * `new ToastQueue()` and call `.add(...)` exactly as in HeroUI.
 */

/** Default toast timeout in milliseconds (matches HeroUI / sonner). */
export const DEFAULT_TOAST_TIMEOUT = 4000

export interface ToastQueueOptions {
  /** The maximum number of toasts to display at a time (visual only). */
  maxVisibleToasts?: number
}

/** A toast's content payload — mirrors HeroUI's `ToastContentValue`. */
export interface ToastContentValue {
  indicator?: unknown
  title?: unknown
  description?: unknown
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'danger'
  actionProps?: Record<string, unknown>
  isLoading?: boolean
}

/** Per-toast options — mirrors HeroUI's `HeroUIToastOptions`. */
export interface HeroUIToastOptions {
  description?: unknown
  indicator?: unknown
  variant?: ToastContentValue['variant']
  actionProps?: Record<string, unknown>
  isLoading?: boolean
  timeout?: number
  onClose?: () => void
}

/** HeroUI `variant` → vue-sonner `toast` method. */
function variantToSonner (variant?: ToastContentValue['variant']) {
  switch (variant) {
    case 'success': return sonnerToast.success
    case 'warning': return sonnerToast.warning
    case 'danger':  return sonnerToast.error
    case 'accent':  return sonnerToast.info
    default:        return sonnerToast
  }
}

/**
 * ToastQueue — HeroUI-shaped queue backed by vue-sonner.
 */
export class ToastQueue<T extends object = ToastContentValue> {
  readonly maxVisibleToasts?: number

  constructor (options?: ToastQueueOptions) {
    this.maxVisibleToasts = options?.maxVisibleToasts
  }

  /** Enqueue a toast. Returns the toast id. */
  add (content: T, options?: HeroUIToastOptions): string {
    const c = content as ToastContentValue
    const fn = variantToSonner(c.variant ?? options?.variant)
    const message = (c.title ?? '') as string
    const timeout = options?.timeout !== undefined ? options.timeout : DEFAULT_TOAST_TIMEOUT

    const id = fn(message, {
      description: c.description ?? options?.description,
      duration: timeout === 0 ? Infinity : timeout,
      onAutoClose: options?.onClose,
      onDismiss: options?.onClose
    } as Record<string, unknown>)

    return String(id)
  }

  /** Dismiss a toast by id. */
  close (key: string): void {
    sonnerToast.dismiss(key)
  }

  /** Dismiss every toast. */
  clear (): void {
    sonnerToast.dismiss()
  }

  /** Pause auto-dismiss timers (vue-sonner pauses on hover automatically). */
  pauseAll (): void {
    /* vue-sonner has no programmatic pause — no-op for API parity. */
  }

  /** Resume auto-dismiss timers. */
  resumeAll (): void {
    /* vue-sonner has no programmatic resume — no-op for API parity. */
  }

  /** The underlying queue — returns this instance (vue-sonner has no separate state). */
  getQueue (): this {
    return this
  }
}

/** Shared default queue instance. */
export const toastQueue = new ToastQueue<ToastContentValue>()
