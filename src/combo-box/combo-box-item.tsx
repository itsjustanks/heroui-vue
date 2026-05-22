import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxItem, type AcceptableValue } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ComboBoxItem — a selectable option in the ComboBox popover. Faithful port of
 * the `ListBox.Item` rendered inside HeroUI v3's `ComboBox.Popover`
 * (`combo-box.css` `[data-slot="list-box-item"]`, `px-2.5`).
 *
 * Built over reka-ui `ComboboxItem`; styled to match `heroui/list-box`'s item
 * (`min-h-9`, `gap-3`, `rounded-2xl`, hover/highlight states). reka-ui
 * `ComboboxItem` props/emits (`value`, `textValue`, `disabled`, `onSelect`, …)
 * forward through `{...attrs}`.
 */
export const ComboBoxItem = defineComponent({
  name: 'ComboBoxItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The unique value of this option — required by reka-ui `ComboboxItem`. */
    value: { type: [String, Number, Object, null] as PropType<AcceptableValue>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ComboboxItem
        {...attrs}
        value={props.value as AcceptableValue}
        data-slot="list-box-item"
        class={cn('list-box-item', props.class)}
      >
        {slots.default?.()}
      </ComboboxItem>
    )
  }
})

export default ComboBoxItem
