import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGridRow as RekaRangeCalendarGridRow, useForwardProps } from 'reka-ui'
import type { RangeCalendarGridRowProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/** RangeCalendarGridRow — a single `<tr>`, a flex row of cells. HeroUI v3 `RangeCalendar.GridRow`. */
export const RangeCalendarGridRow = defineComponent({
  name: 'RangeCalendarGridRow',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as RangeCalendarGridRowProps)
    return () => (
      <RekaRangeCalendarGridRow
        {...forwardedProps.value}
        class={cn('flex', props.class)}
      >
        {slots.default?.()}
      </RekaRangeCalendarGridRow>
    )
  }
})

export default RangeCalendarGridRow
