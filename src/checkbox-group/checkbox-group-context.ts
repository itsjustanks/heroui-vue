/**
 * HeroUI-Vue CheckboxGroup — shared context.
 *
 * `CheckboxGroup` provides the group-level variant / disabled / invalid state;
 * `CheckboxGroupItem` consumes it so each checkbox card can react to the group's
 * emphasis variant and validation state. Kept in its own module so the part
 * files import it without a circular dependency.
 */
import { createContext } from 'reka-ui'
import type { Ref } from 'vue'

export type TCheckboxGroupVariant = 'primary' | 'secondary'

export interface ICheckboxGroupContext {
  /** Emphasis variant — `secondary` is the lower-emphasis variant for Surfaces. */
  variant: Ref<TCheckboxGroupVariant>
  /** Whether the whole group is disabled. */
  isDisabled: Ref<boolean>
  /** Whether the group is in an invalid state. */
  isInvalid: Ref<boolean>
}

export const [useCheckboxGroup, provideCheckboxGroupContext] =
  createContext<ICheckboxGroupContext>('CheckboxGroup')
