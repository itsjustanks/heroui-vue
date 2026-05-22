import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

type TInputVariant = 'primary' | 'secondary'

/**
 * Input — HeroUI-Vue text-field control. Faithful port of `shadcn-vue`.
 *
 * Emits HeroUI v3 BEM class names from `input.css`:
 *   base: `input`
 *   variant: `input--primary` | `input--secondary`
 *   full-width: `input--full-width`
 */
export const Input = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names -- faithful HeroUI/shadcn part name; never registered as a global `<input>` override
  name: 'Input',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    defaultValue: { type: [String, Number] as PropType<string | number>, default: undefined },
    modelValue: { type: [String, Number] as PropType<string | number>, default: undefined },
    variant: { type: String as PropType<TInputVariant>, default: 'primary' },
    fullWidth: { type: Boolean, default: false }
  },
  emits: {
    'update:modelValue': (_payload: string | number) => true
  },
  setup (props, { attrs, emit }) {
    const modelValue = useVModel(props, 'modelValue', emit, {
      passive: true,
      defaultValue: props.defaultValue
    })

    return () => (
      <input
        {...attrs}
        value={modelValue.value as string | number | undefined}
        onInput={(e: Event) => {
          modelValue.value = (e.target as HTMLInputElement).value
        }}
        class={cn(
          'input',
          props.variant === 'secondary' ? 'input--secondary' : 'input--primary',
          props.fullWidth && 'input--full-width',
          props.class
        )}
      />
    )
  }
})

export default Input
