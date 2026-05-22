import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Separator } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ListBoxSeparator — a divider between ListBox sections. HeroUI v3 uses the
 * generic `Separator` inside a ListBox; this is the convenience Vue part.
 *
 * Per `list-box.css`, a horizontal separator spans 94% of the width and is
 * centred.
 */
export const ListBoxSeparator = defineComponent({
  name: 'ListBoxSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <Separator
        {...attrs}
        data-slot="separator"
        class={cn(props.class)}
      />
    )
  }
})

export default ListBoxSeparator
