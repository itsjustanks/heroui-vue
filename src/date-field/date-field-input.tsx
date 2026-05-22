import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { injectDateFieldRootContext } from 'reka-ui'
import { dateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_CONTEXT } from './date-field-context'

/** Segment descriptor from reka-ui's DateFieldRoot slot context. */
export type DateFieldSegmentItem = { part: string; value: string }

/**
 * DateField.Input — the segment container that iterates all date segments.
 * HeroUI v3 `DateField.Input` (maps to `DateInputGroupInput`).
 *
 * In reka-ui, there is no single-element date input container; this component
 * reads `segmentContents` from `injectDateFieldRootContext` and renders each
 * segment via `slots.default({ part, value })`. Maps to HeroUI's
 * `DateInputGroupInput` BEM class (`date-input-group__input`).
 */
export const DateFieldInput = defineComponent({
  name: 'DateFieldInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DATE_FIELD_CONTEXT, null)
    const rootCtx = injectDateFieldRootContext()

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group-input"
        class={cn((ctx?.slots.value ?? dateInputGroupVariants()).input(), props.class)}
      >
        {rootCtx.segmentContents.value.map((item: DateFieldSegmentItem) =>
          slots.default ? slots.default(item) : <span key={item.part}>{item.value}</span>
        )}
      </div>
    )
  }
})

export default DateFieldInput
