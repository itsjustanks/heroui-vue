import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

/**
 * Textarea — multi-line text field. Faithful HeroUI v3 `textarea` port.
 *
 * Styling adapted from HeroUI's `textarea.css`: `rounded-field` → `rounded-md`,
 * field surface tokens → the repo's shadcn tokens (`bg-background`,
 * `border-input`, `text-foreground`, `ring-ring`), HeroUI's smooth
 * background/border/shadow transitions kept. Behaviour (v-model with passive
 * defaultValue) is identical to `shadcn/textarea`.
 */
export const Textarea = defineComponent({
  // No `name`: `vue/no-reserved-component-names` rejects HTML element names
  // (`textarea`). The export identifier `Textarea` is the public name.
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
      <textarea
        {...attrs}
        value={modelValue.value as string | number | undefined}
        onInput={(event: Event) => {
          modelValue.value = (event.target as HTMLTextAreaElement).value
        }}
        class={cn(
          'flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm',
          'transition-[background-color,border-color,box-shadow] duration-150 ease-out motion-reduce:transition-none',
          'placeholder:text-muted-foreground',
          'hover:not-focus:border-ring/40',
          'focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )}
      />
    )
  }
})

export default Textarea
