import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DateFieldInput as RekaDateFieldInput } from 'reka-ui'
import type { SegmentPart } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { TDateSegment } from './date-field-input'

/**
 * DateFieldSegment — a single date segment (day / month / year / hour / minute /
 * dayPeriod / timeZoneName / literal). HeroUI v3 `DateField.Segment`.
 *
 * Renders reka-ui `DateFieldInput` (one `part`) for editable segments and a
 * plain inert span for literals. Mirrors `TimeFieldSegment`'s styling — a
 * `rounded` focus chip, `text-foreground` selection, muted placeholder.
 */
export const DateFieldSegment = defineComponent({
  name: 'DateFieldSegment',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The segment descriptor handed down from `DateFieldInput`'s render-prop. */
    segment: { type: Object as PropType<TDateSegment>, required: true }
  },
  setup (props, { attrs }) {
    return () => {
      const isLiteral = props.segment.part === 'literal'
      if (isLiteral) {
        return (
          <span
            {...attrs}
            class={cn('px-px text-muted-foreground', props.class)}
          >
            {props.segment.value}
          </span>
        )
      }
      return (
        <RekaDateFieldInput
          {...attrs}
          part={props.segment.part as SegmentPart}
          class={cn(
            'rounded px-0.5 py-0.5 text-foreground caret-transparent outline-none tabular-nums',
            'focus:bg-primary focus:text-primary-foreground',
            'data-[placeholder]:text-muted-foreground',
            'aria-[valuetext=Empty]:text-muted-foreground',
            props.class
          )}
        >
          {props.segment.value}
        </RekaDateFieldInput>
      )
    }
  }
})

export default DateFieldSegment
