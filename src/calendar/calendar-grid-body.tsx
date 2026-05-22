import { defineComponent } from 'vue'
import { CalendarGridBody as RekaCalendarGridBody } from 'reka-ui'

/** CalendarGridBody — the `<tbody>` holding the week rows. */
export const CalendarGridBody = defineComponent({
  name: 'CalendarGridBody',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaCalendarGridBody {...attrs}>{slots.default?.()}</RekaCalendarGridBody>
  }
})

export default CalendarGridBody
