import { defineComponent } from 'vue'
import { RangeCalendarGridHead as RekaRangeCalendarGridHead } from 'reka-ui'

/** RangeCalendarGridHead — the `<thead>` holding the weekday row. HeroUI v3 `RangeCalendar.GridHead`. */
export const RangeCalendarGridHead = defineComponent({
  name: 'RangeCalendarGridHead',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaRangeCalendarGridHead {...attrs}>{slots.default?.()}</RekaRangeCalendarGridHead>
  }
})

export default RangeCalendarGridHead
