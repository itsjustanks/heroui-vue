import { defineComponent } from 'vue'
import { RangeCalendarGridBody as RekaRangeCalendarGridBody } from 'reka-ui'

/** RangeCalendarGridBody — the `<tbody>` holding the week rows. HeroUI v3 `RangeCalendar.GridBody`. */
export const RangeCalendarGridBody = defineComponent({
  name: 'RangeCalendarGridBody',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaRangeCalendarGridBody {...attrs}>{slots.default?.()}</RekaRangeCalendarGridBody>
  }
})

export default RangeCalendarGridBody
