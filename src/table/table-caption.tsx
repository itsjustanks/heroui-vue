import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableCaption — HeroUI `table__caption` (`<caption>`). Muted descriptive text
 * below the table.
 */
export const TableCaption = defineComponent({
  name: 'TableCaption',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <caption {...attrs} class={cn('mt-4 text-sm text-muted-foreground', props.class)}>
        {slots.default?.()}
      </caption>
    )
  }
})

export default TableCaption
