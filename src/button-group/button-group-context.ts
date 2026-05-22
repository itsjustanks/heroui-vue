import type { ComputedRef, InjectionKey } from 'vue'
import type { buttonGroupVariants } from '@heroui/styles'
import type { ButtonVariants } from '@heroui/styles'

/** The `buttonGroupVariants()` slot map — one class-name function per ButtonGroup part. */
export type ButtonGroupSlots = ReturnType<typeof buttonGroupVariants>

export interface ButtonGroupContext {
  /** Reactive slot map — recomputed when orientation/fullWidth change. */
  slots: ComputedRef<ButtonGroupSlots>
  /** Size forwarded to child Button elements. */
  size?: ComputedRef<ButtonVariants['size'] | undefined>
  /** Variant forwarded to child Button elements. */
  variant?: ComputedRef<ButtonVariants['variant'] | undefined>
  /** isDisabled forwarded to child Button elements. */
  isDisabled?: ComputedRef<boolean | undefined>
  /** fullWidth forwarded to child Button elements. */
  fullWidth?: ComputedRef<boolean | undefined>
}

/** Provided by `ButtonGroup`, consumed by `ButtonGroupSeparator` and child Buttons. */
export const BUTTON_GROUP_CONTEXT: InjectionKey<ButtonGroupContext> = Symbol('heroui-vue-button-group')

/** Marker key — set on direct children of ButtonGroup so they can read context. */
export const BUTTON_GROUP_CHILD = '__button_group_child'
