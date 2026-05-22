import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TableBody — HeroUI `table__body` (`<tbody>`). Last row drops its bottom
 * hairline so the table closes flush.
 */
export const TableBody = defineComponent({
  name: 'TableBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <tbody {...attrs} class={cn('[&_tr:last-child]:border-0', props.class)}>
        {slots.default?.()}
      </tbody>
    )
  }
})

export default TableBody
