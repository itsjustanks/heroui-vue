import { computed, ref, type ComputedRef, type Ref } from 'vue'

export interface UseOverlayStateOptions {
  /** Default open state (uncontrolled). @default false */
  defaultOpen?: boolean
  /** Called whenever the open state changes. */
  onChange?: (isOpen: boolean) => void
}

export interface OverlayState {
  /** Whether the overlay is currently open. */
  readonly isOpen: ComputedRef<boolean>
  /** Open the overlay. */
  open: () => void
  /** Close the overlay. */
  close: () => void
  /** Toggle the open state. */
  toggle: () => void
  /** Set the open state explicitly. */
  setOpen: (next: boolean) => void
  /** Two-way bindable ref for `v-model:open` style consumers. */
  open$: Ref<boolean>
}

/**
 * useOverlayState — Vue equivalent of React Aria's `useOverlayTriggerState`.
 * Returns an open/close API plus a bindable ref that Modal/Drawer/Popover
 * demos can pass to `:open` or destructure for controlled behaviour.
 */
export function useOverlayState (options: UseOverlayStateOptions = {}): OverlayState {
  const open$ = ref(options.defaultOpen ?? false)
  const isOpen = computed(() => open$.value)

  function setOpen (next: boolean) {
    if (open$.value === next) return
    open$.value = next
    options.onChange?.(next)
  }

  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(!open$.value),
    setOpen,
    open$,
  }
}
