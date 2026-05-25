import type { ComputedRef, InjectionKey } from 'vue'
import type { toggleButtonGroupVariants, ToggleButtonVariants } from '@heroui/styles'

/** The `toggleButtonGroupVariants()` slot map — one class-name function per part. */
export type ToggleButtonGroupSlots = ReturnType<typeof toggleButtonGroupVariants>

export interface ToggleButtonGroupContext {
  /** Reactive slot map — recomputed when root variant props change. */
  slots: ComputedRef<ToggleButtonGroupSlots>
  /** Size to propagate to all child ToggleButtons. */
  size?: ToggleButtonVariants['size']
  /** Whether the group is disabled. */
  isDisabled?: boolean
}

/** Provided by `ToggleButtonGroup`, consumed by `ToggleButtonGroupSeparator`. */
export const TOGGLE_BUTTON_GROUP_CONTEXT: InjectionKey<ToggleButtonGroupContext> =
  Symbol('heroui-vue-toggle-button-group')

/** Marker key — set on direct children of `ToggleButtonGroup` so they can read context. */
export const TOGGLE_BUTTON_GROUP_CHILD = '__toggle_button_group_child'
