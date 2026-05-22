import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { textAreaVariants, type TextAreaVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * TextArea — faithful Vue port of HeroUI v3 `TextArea`.
 *
 * Renders a native `<textarea>` element with full v-model support.
 * Styling is sourced exclusively from `@heroui/styles` `textAreaVariants`.
 */
export const TextAreaRoot = defineComponent({
  // No `name`: vue/no-reserved-component-names rejects HTML element names.
  inheritAttrs: false,
  props: {
    class:        { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    defaultValue: { type: [String, Number] as PropType<string | number>, default: undefined },
    modelValue:   { type: [String, Number] as PropType<string | number>, default: undefined },
    /** Visual variant — `primary` (bordered field) or `secondary` (muted surface). @default 'primary' */
    variant:      { type: String as PropType<TextAreaVariants['variant']>, default: 'primary' },
    /** Stretch to fill container width. @default false */
    fullWidth:    { type: Boolean as PropType<TextAreaVariants['fullWidth']>, default: false }
  },
  emits: {
    'update:modelValue': (_payload: string | number) => true
  },
  setup (props, { attrs, emit }) {
    const modelValue = useVModel(props, 'modelValue', emit, {
      passive:      true,
      defaultValue: props.defaultValue
    })

    return () => (
      <textarea
        {...attrs}
        data-slot="textarea"
        value={modelValue.value as string | number | undefined}
        onInput={(e: Event) => {
          modelValue.value = (e.target as HTMLTextAreaElement).value
        }}
        class={cn(
          textAreaVariants({ variant: props.variant, fullWidth: props.fullWidth }),
          props.class
        )}
      />
    )
  }
})

export default TextAreaRoot
