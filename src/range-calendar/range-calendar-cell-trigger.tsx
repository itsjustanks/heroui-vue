import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RangeCalendarCellTrigger as RekaRangeCalendarCellTrigger, useForwardProps } from 'reka-ui'
import type { RangeCalendarCellTriggerProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

/**
 * RangeCalendarCellTrigger — the pressable day button inside a cell. HeroUI v3
 * `RangeCalendar.CellTrigger`.
 *
 * Adapts HeroUI's `range-calendar__cell-button`: a `rounded-full` day circle.
 * The two **range caps** (`data-selection-start` / `data-selection-end`) fill
 * with `bg-primary`; days in between keep the cell-level `bg-accent/40` band
 * (drawn by `RangeCalendarCell`) and stay text-only. `bg-accent` marks today,
 * `data-highlighted` marks the live drag-preview range. State is driven by
 * reka-ui's `data-[selected]` / `data-[selection-start]` / `data-[selection-end]`
 * / `data-[highlighted]` / `data-[today]` / `data-[disabled]` /
 * `data-[unavailable]` / `data-[outside-view]` attributes.
 */
export const RangeCalendarCellTrigger = defineComponent({
  name: 'RangeCalendarCellTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    day: { type: Object as PropType<RangeCalendarCellTriggerProps['day']>, required: true },
    month: { type: Object as PropType<RangeCalendarCellTriggerProps['month']>, required: true }
  },
  setup (props, { attrs, slots }) {
    const forwardedProps = useForwardProps(attrs as Omit<RangeCalendarCellTriggerProps, 'day' | 'month'>)
    return () => (
      <RekaRangeCalendarCellTrigger
        {...forwardedProps.value}
        day={props.day}
        month={props.month}
        class={cn(
          buttonVariants({ variant: 'ghost' }),
          'relative z-10 size-9 rounded-full p-0 font-normal',
          // Today
          '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
          // Live drag-preview range
          'data-[highlighted]:bg-accent/40 data-[highlighted]:text-accent-foreground',
          // Range caps — start / end of the selection
          'data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground',
          'data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground',
          // Disabled
          'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
          // Unavailable
          'data-[unavailable]:text-destructive data-[unavailable]:line-through',
          // Outside months
          'data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaRangeCalendarCellTrigger>
    )
  }
})

export default RangeCalendarCellTrigger
