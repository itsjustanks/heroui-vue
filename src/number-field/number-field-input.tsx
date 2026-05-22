import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { NumberFieldInput as RekaNumberFieldInput } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * NumberFieldInput — the numeric `<input>`. HeroUI v3 `NumberField.Input`.
 *
 * Renders reka-ui `NumberFieldInput`, which is wired into `NumberFieldRoot`'s
 * context — typing, parsing, formatting and keyboard stepping are all handled
 * by reka-ui. Adapts HeroUI's `number-field__input` BEM: a borderless
 * `bg-transparent` field, `tabular-nums`, `text-sm`. It is the middle (`1fr`)
 * column of `NumberFieldGroup`'s grid.
 */
export const NumberFieldInput = defineComponent({
  name: 'NumberFieldInputView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaNumberFieldInput
        {...attrs}
        data-slot="number-field-input"
        class={cn(
          'min-w-0 border-0 bg-transparent px-3 py-2 text-center text-sm tabular-nums text-foreground shadow-none outline-none',
          'placeholder:text-muted-foreground',
          'disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )}
      />
    )
  }
})

export default NumberFieldInput
