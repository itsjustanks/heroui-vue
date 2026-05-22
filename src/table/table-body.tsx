import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableBody — HeroUI `table__body` (`<tbody>`).
 */
export const TableBody = defineComponent({
  name: 'TableBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <tbody {...attrs} class={cn('table__body', props.class)}>
        {slots.default?.()}
      </tbody>
    )
  }
})

export default TableBody
