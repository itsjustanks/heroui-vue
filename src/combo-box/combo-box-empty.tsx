import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxEmpty } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ComboBoxEmpty — the "no results" state shown when the filter matches nothing.
 * Mirrors HeroUI v3's empty-state slot inside `ComboBox.Popover`
 * (`autocomplete.css` `[data-slot="empty-state"]`).
 *
 * Built over reka-ui `ComboboxEmpty`, which renders only when the filtered
 * collection is empty.
 */
export const ComboBoxEmpty = defineComponent({
  name: 'ComboBoxEmpty',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ComboboxEmpty
        {...attrs}
        class={cn('py-6 text-center text-sm text-muted-foreground', props.class)}
      >
        {slots.default ? slots.default() : 'No results found.'}
      </ComboboxEmpty>
    )
  }
})

export default ComboBoxEmpty
