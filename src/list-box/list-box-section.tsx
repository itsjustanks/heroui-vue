import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ListboxGroup } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ListBoxSection — a labelled section of items within a ListBox. Faithful port
 * of HeroUI v3 `ListBox.Section` (`list-box-section.css`).
 *
 * Wraps reka-ui `ListboxGroup`; pair it with a `ListBoxSectionHeader` and a set
 * of `ListBoxItem`s. A vertical flex container, `gap-0`.
 */
export const ListBoxSection = defineComponent({
  name: 'ListBoxSection',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ListboxGroup
        {...attrs}
        data-slot="list-box-section"
        class={cn('list-box-section', props.class)}
      >
        {slots.default?.()}
      </ListboxGroup>
    )
  }
})

export default ListBoxSection
