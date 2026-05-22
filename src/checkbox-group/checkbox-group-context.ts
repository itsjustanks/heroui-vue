/**
 * CheckboxGroup shared context — variant and state propagated from `CheckboxGroup`
 * to descendant `CheckboxGroupItem`s. Kept in its own module to avoid circular
 * dependencies.
 */
import { createContext } from 'reka-ui'
import type { Ref } from 'vue'
import type { CheckboxVariants } from '@heroui/styles'

export type CheckboxGroupVariantProp = CheckboxVariants['variant']

export interface ICheckboxGroupContext {
  /** Emphasis variant forwarded to each item's `checkboxVariants`. */
  variant: Ref<CheckboxGroupVariantProp>
  /** Whether the whole group is disabled. */
  isDisabled: Ref<boolean>
  /** Whether the group is in an invalid state. */
  isInvalid: Ref<boolean>
}

export const [useCheckboxGroup, provideCheckboxGroupContext] =
  createContext<ICheckboxGroupContext>('CheckboxGroup')
