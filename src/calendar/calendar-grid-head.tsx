import { defineComponent } from 'vue'
import { CalendarGridHead as RekaCalendarGridHead } from 'reka-ui'

/** CalendarGridHead — the `<thead>` holding the weekday row. */
export const CalendarGridHead = defineComponent({
  name: 'CalendarGridHead',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaCalendarGridHead {...attrs}>{slots.default?.()}</RekaCalendarGridHead>
  }
})

export default CalendarGridHead
