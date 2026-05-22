import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ListboxGroupLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ListBoxSectionHeader — the heading of a ListBoxSection. HeroUI v3 uses the
 * generic `Header` component inside `ListBox.Section`; this is the Vue
 * equivalent, wrapping reka-ui `ListboxGroupLabel`.
 *
 * A compact, muted, uppercase-weight section label (`text-xs font-medium`).
 */
export const ListBoxSectionHeader = defineComponent({
  name: 'ListBoxSectionHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ListboxGroupLabel
        {...attrs}
        class={cn('w-full px-2 py-1.5 text-xs font-medium text-muted-foreground', props.class)}
      >
        {slots.default?.()}
      </ListboxGroupLabel>
    )
  }
})

export default ListBoxSectionHeader
