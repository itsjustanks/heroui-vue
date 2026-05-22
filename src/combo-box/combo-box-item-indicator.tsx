import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxItemIndicator } from 'reka-ui'
import { Check as IconCheck } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * ComboBoxItemIndicator — the trailing selected-state checkmark of a
 * ComboBoxItem. Mirrors `ListBox.ItemIndicator` as used inside HeroUI v3's
 * `ComboBox.Popover`.
 *
 * Built over reka-ui `ComboboxItemIndicator`, which renders only when the item
 * is selected. With no children it renders the default check icon.
 */
export const ComboBoxItemIndicator = defineComponent({
  name: 'ComboBoxItemIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ComboboxItemIndicator
        {...attrs}
        data-slot="list-box-item-indicator--checkmark"
        class={cn('list-box-item__indicator', props.class)}
      >
        {slots.default ? slots.default() : <IconCheck class="size-3.5" />}
      </ComboboxItemIndicator>
    )
  }
})

export default ComboBoxItemIndicator
