import { defineComponent } from 'vue'
import { CalendarGridHead as RekaCalendarGridHead } from 'reka-ui'

/** CalendarGridHead — the `<thead>` holding the weekday row. HeroUI v3 BEM: `calendar__grid-header`. */
export const CalendarGridHead = defineComponent({
  name: 'CalendarGridHead',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaCalendarGridHead {...attrs} class="calendar__grid-header">{slots.default?.()}</RekaCalendarGridHead>
  }
})

export default CalendarGridHead
