import { defineComponent } from 'vue'
import { CalendarGridBody as RekaCalendarGridBody } from 'reka-ui'

/** CalendarGridBody — the `<tbody>` holding the week rows. HeroUI v3 BEM: `calendar__grid-body`. */
export const CalendarGridBody = defineComponent({
  name: 'CalendarGridBody',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaCalendarGridBody {...attrs} class="calendar__grid-body">{slots.default?.()}</RekaCalendarGridBody>
  }
})

export default CalendarGridBody
