import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { injectTimeFieldRootContext } from 'reka-ui'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TIME_FIELD_CONTEXT } from './time-field-context'

/** Segment descriptor from reka-ui's TimeFieldRoot slot context. */
export type TimeFieldSegmentItem = { part: string; value: string }

/**
 * TimeField.Input — the segment container that iterates all time segments.
 * HeroUI v3 `TimeField.Input` (maps to `DateInputGroupInput`).
 *
 * In reka-ui there is no single-element time input container; this component
 * reads `segmentContents` from `injectTimeFieldRootContext` and renders each
 * segment via `slots.default({ part, value })`. Maps to HeroUI's
 * `DateInputGroupInput` BEM class (`date-input-group__input`).
 */
export const TimeFieldInput = defineComponent({
  name: 'TimeFieldInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TIME_FIELD_CONTEXT, null)
    const rootCtx = injectTimeFieldRootContext()

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group-input"
        class={cn((ctx?.slots.value ?? dateInputGroupVariants()).input(), props.class)}
      >
        {rootCtx.segmentContents.value.map((item: TimeFieldSegmentItem) =>
          slots.default ? slots.default(item) : <span key={item.part}>{item.value}</span>
        )}
      </div>
    )
  }
})

export default TimeFieldInput
