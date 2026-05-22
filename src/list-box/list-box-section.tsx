import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ListboxGroup } from 'reka-ui'
import { listboxSectionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * ListBoxSection — a labelled section of items within a ListBox. Faithful Vue
 * port of HeroUI v3 `ListBox.Section`.
 *
 * `listboxSectionVariants` returns a plain class string (no slots). Pair with
 * a `Header` element (use `ListboxGroupLabel` or any heading) and a set of
 * `ListBox.Item` children. All reka-ui `ListboxGroup` props pass through attrs.
 */
export const ListBoxSection = defineComponent({
  name: 'ListBoxSection',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ListboxGroup
        {...attrs}
        data-slot="list-box-section"
        class={cn(listboxSectionVariants(), props.class)}
      >
        {slots.default?.()}
      </ListboxGroup>
    )
  },
})

export default ListBoxSection
