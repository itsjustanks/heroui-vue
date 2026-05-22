import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxInput } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ComboBoxInput — the searchable text field of a ComboBox. Faithful port of
 * HeroUI v3's `Input` used inside `ComboBox.InputGroup` (`combo-box.css`
 * `[data-slot="input"]`).
 *
 * Built over reka-ui `ComboboxInput`; styled as a HeroUI field surface
 * (`min-h-9`, `rounded-lg`, `bg-background`, a border, `pr-7` for the trailing
 * trigger). reka-ui `ComboboxInput` props (`displayValue`, `autoFocus`,
 * `disabled`, …) forward through `{...attrs}`.
 */
export const ComboBoxInput = defineComponent({
  name: 'ComboBoxInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <ComboboxInput
        {...attrs}
        class={cn(
          // HeroUI field surface — combo-box input sits in an input-group, reserves pr-7 for the trigger.
          'min-h-9 w-full min-w-0 flex-1 rounded-lg border border-input bg-background py-2 pl-3 pr-7 text-sm text-foreground outline-none transition-colors',
          'placeholder:text-muted-foreground',
          'hover:bg-accent/40',
          'focus:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )}
      />
    )
  }
})

export default ComboBoxInput
