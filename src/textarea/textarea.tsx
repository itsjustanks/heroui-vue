import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
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
    defaultValue: { type: [String, Number] as PropType<string | number>, default: undefined },
    modelValue:   { type: [String, Number] as PropType<string | number>, default: undefined },
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
          data-slot="textarea"
          value={modelValue.value as string | number | undefined}
          onInput={(e: Event) => {
            modelValue.value = (e.target as HTMLTextAreaElement).value
          }}
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
