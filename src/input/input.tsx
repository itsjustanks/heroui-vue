import { defineComponent, inject, type HTMLAttributes, type InputHTMLAttributes, type PropType } from 'vue'
import { ComboboxInput } from 'reka-ui'
import { inputVariants, type InputVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TEXT_FIELD_CONTEXT } from '@/textfield/textfield-context'
import { COMBO_BOX_CONTEXT } from '@/combo-box/combo-box-context'

/**
 * Input — faithful Vue port of HeroUI v3 `Input`.
 *
 * Mirrors React: reads `variant` from a parent `TextField` or `ComboBox` context
 * when not explicitly set (matching HeroUI's `TextFieldContext` + `ComboBoxContext` fallback).
 * Renders a native `<input>` with `data-slot="input"` and `inputVariants` classes.
 *
 * When nested inside a `ComboBox.InputGroup` (detected via `COMBO_BOX_CONTEXT`),
 * Input renders reka-ui's `ComboboxInput` (`as="input"`) so the combobox's
 * filtering/open behaviour is wired — matching HeroUI React, where `ComboBox`
 * composes with the standalone `Input`.
 */
export const InputRoot = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names -- faithful HeroUI part name
  name: 'Input',
  inheritAttrs: false,
  props: {
    class:        { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    id:           { type: String, default: undefined },
    name:         { type: String, default: undefined },
    type:         { type: String as PropType<InputHTMLAttributes['type']>, default: 'text' },
    value:        { type: [String, Number] as PropType<string | number>, default: undefined },
    defaultValue: { type: [String, Number] as PropType<string | number>, default: undefined },
    modelValue:   { type: [String, Number] as PropType<string | number>, default: undefined },
    placeholder:  { type: String, default: undefined },
    disabled:     { type: Boolean as PropType<boolean | undefined>, default: undefined },
    isDisabled:   { type: Boolean as PropType<boolean | undefined>, default: undefined },
    readonly:     { type: Boolean as PropType<boolean | undefined>, default: undefined },
    readOnly:     { type: Boolean as PropType<boolean | undefined>, default: undefined },
    required:     { type: Boolean as PropType<boolean | undefined>, default: undefined },
    isRequired:   { type: Boolean as PropType<boolean | undefined>, default: undefined },
    autocomplete: { type: String, default: undefined },
    autoComplete: { type: String, default: undefined },
    autocapitalize: { type: String, default: undefined },
    autoCapitalize: { type: String, default: undefined },
    minlength:    { type: [String, Number] as PropType<string | number>, default: undefined },
    minLength:    { type: [String, Number] as PropType<string | number>, default: undefined },
    maxlength:    { type: [String, Number] as PropType<string | number>, default: undefined },
    maxLength:    { type: [String, Number] as PropType<string | number>, default: undefined },
    min:          { type: [String, Number] as PropType<string | number>, default: undefined },
    max:          { type: [String, Number] as PropType<string | number>, default: undefined },
    step:         { type: [String, Number] as PropType<string | number>, default: undefined },
    pattern:      { type: String, default: undefined },
    onInput:      { type: Function as PropType<(event: Event) => void>, default: undefined },
    onChange:     { type: Function as PropType<(event: Event) => void>, default: undefined },
    onFocus:      { type: Function as PropType<(event: FocusEvent) => void>, default: undefined },
    onBlur:       { type: Function as PropType<(event: FocusEvent) => void>, default: undefined },
    /** Visual variant — falls back to parent TextField/ComboBox context. */
    variant:      { type: String as PropType<InputVariants['variant']>, default: undefined },
    /** Stretch to fill container width. @default false */
    fullWidth:    { type: Boolean as PropType<InputVariants['fullWidth']>, default: false }
  },
  emits: {
    'update:modelValue': (_payload: string | number) => true
  },
  setup (props, { attrs, emit }) {
    const textFieldCtx = inject(TEXT_FIELD_CONTEXT, null)
    const comboBoxCtx  = inject(COMBO_BOX_CONTEXT, null)

    return () => {
      // Mirror HeroUI: variant prop > TextField context > ComboBox context
      const resolvedVariant = props.variant
        ?? textFieldCtx?.variant.value
        ?? comboBoxCtx?.variant?.value

      const isControlled = props.modelValue !== undefined
      const inputAttrs: Record<string, unknown> = {
        ...attrs,
        id: props.id,
        name: props.name,
        type: props.type,
        placeholder: props.placeholder,
        disabled: props.isDisabled ?? props.disabled,
        readonly: props.readOnly ?? props.readonly,
        required: props.isRequired ?? props.required,
        autocomplete: props.autoComplete ?? props.autocomplete,
        autocapitalize: props.autoCapitalize ?? props.autocapitalize,
        minlength: props.minLength ?? props.minlength,
        maxlength: props.maxLength ?? props.maxlength,
        min: props.min,
        max: props.max,
        step: props.step,
        pattern: props.pattern,
        'data-slot': 'input',
        class: cn(inputVariants({ variant: resolvedVariant, fullWidth: props.fullWidth }), props.class),
      }

      if (isControlled) {
        inputAttrs.value = props.modelValue
        inputAttrs.onInput = (e: Event) => {
          props.onInput?.(e)
          emit('update:modelValue', (e.target as HTMLInputElement).value)
        }
      } else if (props.value !== undefined) {
        inputAttrs.value = props.value
        inputAttrs.onInput = props.onInput
      } else if (props.defaultValue !== undefined) {
        inputAttrs.defaultValue = props.defaultValue
      }
      if (!inputAttrs.onInput && props.onInput) inputAttrs.onInput = props.onInput
      if (props.onChange) inputAttrs.onChange = props.onChange
      if (props.onFocus) inputAttrs.onFocus = props.onFocus
      if (props.onBlur) inputAttrs.onBlur = props.onBlur

      // Inside a ComboBox, render reka-ui's ComboboxInput so the combobox
      // filtering/open wiring is connected (HeroUI composes ComboBox with Input).
      if (comboBoxCtx) {
        return <ComboboxInput {...inputAttrs} as="input" />
      }

      return <input {...inputAttrs} />
    }
  }
})

export default InputRoot
