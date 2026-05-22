import { defineComponent, inject, type HTMLAttributes, type PropType, type TextareaHTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { textAreaVariants, type TextAreaVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TEXT_FIELD_CONTEXT } from '@/textfield/textfield-context'

/**
 * TextArea — faithful Vue port of HeroUI v3 `TextArea`.
 *
 * Mirrors React: reads `variant` from a parent `TextField` context when not
 * explicitly set (matching HeroUI's `TextFieldContext` fallback).
 * Renders a native `<textarea>` with `data-slot="textarea"` and `textAreaVariants` classes.
 */
export const TextAreaRoot = defineComponent({
  // No `name`: vue/no-reserved-component-names rejects HTML element names.
  inheritAttrs: false,
  props: {
    class:        { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    id:           { type: String, default: undefined },
    name:         { type: String, default: undefined },
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
    rows:         { type: [String, Number] as PropType<TextareaHTMLAttributes['rows']>, default: undefined },
    cols:         { type: [String, Number] as PropType<TextareaHTMLAttributes['cols']>, default: undefined },
    minlength:    { type: [String, Number] as PropType<string | number>, default: undefined },
    minLength:    { type: [String, Number] as PropType<string | number>, default: undefined },
    maxlength:    { type: [String, Number] as PropType<string | number>, default: undefined },
    maxLength:    { type: [String, Number] as PropType<string | number>, default: undefined },
    wrap:         { type: String as PropType<TextareaHTMLAttributes['wrap']>, default: undefined },
    onInput:      { type: Function as PropType<(event: Event) => void>, default: undefined },
    onChange:     { type: Function as PropType<(event: Event) => void>, default: undefined },
    onFocus:      { type: Function as PropType<(event: FocusEvent) => void>, default: undefined },
    onBlur:       { type: Function as PropType<(event: FocusEvent) => void>, default: undefined },
    /** Visual variant — falls back to parent TextField context. */
    variant:      { type: String as PropType<TextAreaVariants['variant']>, default: undefined },
    /** Stretch to fill container width. @default false */
    fullWidth:    { type: Boolean as PropType<TextAreaVariants['fullWidth']>, default: false }
  },
  emits: {
    'update:modelValue': (_payload: string | number) => true
  },
  setup (props, { attrs, emit }) {
    const textFieldCtx = inject(TEXT_FIELD_CONTEXT, null)
    const modelValue = useVModel(props, 'modelValue', emit, {
      passive:      true,
      defaultValue: props.defaultValue
    })

    return () => {
      // Mirror HeroUI: variant prop > TextField context
      const resolvedVariant = props.variant ?? textFieldCtx?.variant.value

      return (
        <textarea
          {...attrs}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          disabled={props.isDisabled ?? props.disabled}
          readonly={props.readOnly ?? props.readonly}
          required={props.isRequired ?? props.required}
          autocomplete={props.autoComplete ?? props.autocomplete}
          rows={props.rows}
          cols={props.cols}
          minlength={props.minLength ?? props.minlength}
          maxlength={props.maxLength ?? props.maxlength}
          wrap={props.wrap}
          data-slot="textarea"
          value={(props.modelValue !== undefined ? modelValue.value : props.value ?? modelValue.value) as string | number | undefined}
          onInput={(e: Event) => {
            props.onInput?.(e)
            modelValue.value = (e.target as HTMLTextAreaElement).value
          }}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          class={cn(
            textAreaVariants({ variant: resolvedVariant, fullWidth: props.fullWidth }),
            props.class
          )}
        />
      )
    }
  }
})

export default TextAreaRoot
