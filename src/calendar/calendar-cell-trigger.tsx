import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CalendarCellTrigger as RekaCalendarCellTrigger, useForwardProps } from 'reka-ui'
import type { CalendarCellTriggerProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

/**
 * CalendarCellTrigger — the pressable day button inside a cell.
 *
 * HeroUI `calendar__cell`: `rounded-lg` day, `bg-primary` when selected,
 * `bg-accent` for today, muted outside-month days. State is driven by reka-ui's
 * `data-[selected]` / `data-[today]` / `data-[disabled]` / `data-[unavailable]`
 * / `data-[outside-view]` attributes.
 */
export const CalendarCellTrigger = defineComponent({
  name: 'CalendarCellTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    day: { type: Object as PropType<CalendarCellTriggerProps['day']>, required: true },
    month: { type: Object as PropType<CalendarCellTriggerProps['month']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as Omit<CalendarCellTriggerProps, 'day' | 'month'>)
    return () => (
      <RekaCalendarCellTrigger
        {...forwardedProps.value}
        day={props.day}
        month={props.month}
        class={cn(
          buttonVariants({ variant: 'ghost' }),
          'size-9 rounded-lg p-0 font-normal',
          // Today
          '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
          // Selected
          'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
          // Disabled
          'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
          // Unavailable
          'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
          // Outside months
          'data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaCalendarCellTrigger>
    )
  }
})

export default CalendarCellTrigger
