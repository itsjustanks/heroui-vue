import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ListboxItemIndicator } from 'reka-ui'
import { IconCheck } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * ListBoxItemIndicator — the trailing selected-state checkmark of a ListBoxItem.
 * Faithful port of HeroUI v3 `ListBox.ItemIndicator` (`list-box-item.css`
 * `.list-box-item__indicator`).
 *
 * Pinned to the right gutter; shown only when the item is selected (reka-ui
 * `ListboxItemIndicator` renders nothing otherwise). With no children it renders
 * the default check icon; with children it renders the custom indicator.
 */
export const ListBoxItemIndicator = defineComponent({
  name: 'ListBoxItemIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ListboxItemIndicator
        {...attrs}
        data-slot="list-box-item-indicator"
        class={cn('list-box-item__indicator', props.class)}
      >
        {slots.default ? slots.default() : <IconCheck class="size-3.5" />}
      </ListboxItemIndicator>
    )
  }
})

export default ListBoxItemIndicator
