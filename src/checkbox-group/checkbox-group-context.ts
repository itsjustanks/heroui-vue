import type { ComputedRef, InjectionKey } from 'vue'
import type { CheckboxGroupVariants } from '@heroui/styles'

/** State a `CheckboxGroup` shares down to each nested `Checkbox`. */
export interface CheckboxGroupContext {
  /** Visual variant, inherited by each `Checkbox` in the group. */
  variant: ComputedRef<CheckboxGroupVariants['variant']>
}

/** Provided by `CheckboxGroup`, consumed by each `Checkbox`. */
export const CHECKBOX_GROUP_CONTEXT: InjectionKey<CheckboxGroupContext> =
  Symbol('heroui-vue-checkbox-group')
