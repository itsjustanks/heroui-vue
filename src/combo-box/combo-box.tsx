import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ComboBox — a searchable select: a text input combined with a filterable
 * listbox. HeroUI-Vue primitive over reka-ui `ComboboxRoot`.
 *
 * Faithful port of HeroUI v3 `ComboBox` (`combo-box.css`): a `flex flex-col
 * gap-1` field stack. HeroUI also publishes the same family as `Autocomplete`
 * (a single-select combobox); both names are exported from this dir's barrel.
 *
 * reka-ui `ComboboxRoot` props/emits forward through `{...attrs}`:
 * `modelValue` / `onUpdate:modelValue` (selected value), `open` /
 * `onUpdate:open`, `multiple`, `disabled`, `by`, `ignoreFilter`,
 * `resetSearchTermOnSelect`, `name`, `required`, … — so `v-model` and
 * `v-model:open` work straight through.
 *
 * The `fullWidth` prop mirrors HeroUI's `combo-box--full-width` modifier.
 */
export const ComboBox = defineComponent({
  name: 'ComboBox',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Whether the ComboBox stretches to its container's full width. Mirrors HeroUI `combo-box--full-width`. */
    fullWidth: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ComboboxRoot
        {...attrs}
        class={cn(
          'combo-box',
          props.fullWidth && 'combo-box--full-width',
          props.class
        )}
      >
        {slots.default?.()}
      </ComboboxRoot>
    )
  }
})

export default ComboBox
