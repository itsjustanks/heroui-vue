import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { inputVariants, type InputVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * Input — faithful Vue port of HeroUI v3 `Input`.
 *
 * Renders a native `<input>` element with full v-model support.
 * Styling is sourced exclusively from `@heroui/styles` `inputVariants`.
 */
export const InputRoot = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names -- faithful HeroUI part name; never registered as a global <input> override
  name: 'Input',
  inheritAttrs: false,
  props: {
    class:        { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    defaultValue: { type: [String, Number] as PropType<string | number>, default: undefined },
    modelValue:   { type: [String, Number] as PropType<string | number>, default: undefined },
    /** Visual variant. @default 'primary' */
    variant:      { type: String as PropType<InputVariants['variant']>, default: 'primary' },
    /** Stretch to fill container width. @default false */
    fullWidth:    { type: Boolean as PropType<InputVariants['fullWidth']>, default: false }
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
      <input
        {...attrs}
        data-slot="input"
        value={modelValue.value as string | number | undefined}
        onInput={(e: Event) => {
          modelValue.value = (e.target as HTMLInputElement).value
        }}
        class={cn(
          inputVariants({ variant: props.variant, fullWidth: props.fullWidth }),
          props.class
        )}
      />
    )
  }
})

export default InputRoot
