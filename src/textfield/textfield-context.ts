import type { ComputedRef, InjectionKey } from 'vue'

/** Field-level state a `TextField` shares down to a nested `InputGroup` / `Label`. */
export interface TextFieldContext {
  /** Visual variant, inherited by a nested `InputGroup`. */
  variant: ComputedRef<'primary' | 'secondary' | undefined>
}

/** Provided by `TextField`, consumed by `InputGroup`. */
export const TEXT_FIELD_CONTEXT: InjectionKey<TextFieldContext> = Symbol('heroui-vue-textfield')
