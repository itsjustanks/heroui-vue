import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGridHead as RekaRangeCalendarGridHead } from 'reka-ui'
import { cn } from '@/lib/utils'

/** RangeCalendarGridHead — the `<thead>` holding the weekday row. HeroUI v3 `RangeCalendar.GridHead`. */
export const RangeCalendarGridHead = defineComponent({
  name: 'RangeCalendarGridHead',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaRangeCalendarGridHead {...attrs} class={cn('range-calendar__grid-header', props.class)}>
        {slots.default?.()}
      </RekaRangeCalendarGridHead>
    )
  }
})

export default RangeCalendarGridHead
