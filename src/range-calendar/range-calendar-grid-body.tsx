import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarGridBody as RekaRangeCalendarGridBody } from 'reka-ui'
import { cn } from '@/lib/utils'

/** RangeCalendarGridBody — the `<tbody>` holding the week rows. HeroUI v3 `RangeCalendar.GridBody`. */
export const RangeCalendarGridBody = defineComponent({
  name: 'RangeCalendarGridBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaRangeCalendarGridBody {...attrs} class={cn('range-calendar__grid-body', props.class)}>
        {slots.default?.()}
      </RekaRangeCalendarGridBody>
    )
  }
})

export default RangeCalendarGridBody
