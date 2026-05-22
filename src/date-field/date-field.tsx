import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DateFieldRoot, useForwardPropsEmits } from 'reka-ui'
import type { DateFieldRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DateField — HeroUI-Vue date-field root (primitive library, net-new).
 *
 * Faithful port of HeroUI v3 `DateField` over reka-ui `DateFieldRoot`. A
 * `DateField` is a segmented date input with **no popover / no calendar** — the
 * counterpart to `TimeField` for dates. HeroUI's `date-field` BEM is just a
 * `flex flex-col gap-1` layout wrapper; the segmented input surface lives in
 * `DateFieldGroup`. Date engine stays `@internationalized/date` via reka-ui —
 * `modelValue` / `placeholder` / `granularity` / `hourCycle` / `hideTimeZone` /
 * `step` / `minValue` / `maxValue` / `locale` / `isDateUnavailable` are all
 * forwarded.
 *
 * Compound API: `DateField`, `DateFieldGroup`, `DateFieldInput`,
 * `DateFieldSegment`, `DateFieldPrefix`, `DateFieldSuffix` — mirrors HeroUI's
 * `DateField.*` parts (HeroUI's `DateField` ships as a single root; the segment
 * compound parts mirror `TimeField`'s, the sibling control).
 */
export const DateField = defineComponent({
  name: 'DateFieldView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the field to fill its container. */
    fullWidth: { type: Boolean, default: false }
  },
  // reka-ui `DateFieldRoot` emits — declared as a string array so
  // `defineComponent`'s overload resolves and `useForwardPropsEmits` forwards.
  emits: ['update:modelValue', 'update:placeholder'],
  setup (props, { attrs, emit, slots }) {
    const forwarded = useForwardPropsEmits(attrs as DateFieldRootProps, emit)
    return () => (
      <DateFieldRoot
        {...forwarded.value}
        data-slot="date-field"
        class={cn(
          'date-field',
          props.fullWidth && 'date-field--full-width',
          props.class
        )}
      >
        {{
          // reka-ui `DateFieldRoot` exposes `segments`/`modelValue` — surface them
          // so consumers can drive a render-prop child, matching HeroUI's pattern.
          default: (slotProps: Record<string, unknown>) => slots.default?.(slotProps)
        }}
      </DateFieldRoot>
    )
  }
})

export default DateField
