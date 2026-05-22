import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

/**
 * Input — HeroUI-Vue text-field control. Faithful port of `shadcn/input`.
 *
 * HeroUI `input.css`: `rounded-field` surface, `bg-field`, `text-sm`, smooth
 * focus-ring transition. Tokens adapted to the repo (`bg-background`,
 * `border-input`, `ring-ring`). Behaviour (passive `v-model`, `defaultValue`)
 * is identical to the shadcn source — `v-model` desugars to `value` + `onInput`.
 */
export const Input = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names -- faithful HeroUI/shadcn part name; never registered as a global `<input>` override
  name: 'Input',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    defaultValue: { type: [String, Number] as PropType<string | number>, default: undefined },
    modelValue: { type: [String, Number] as PropType<string | number>, default: undefined }
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
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )}
      />
    )
  }
})

export default Input
