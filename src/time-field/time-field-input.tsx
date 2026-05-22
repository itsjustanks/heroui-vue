import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { injectTimeFieldRootContext } from 'reka-ui'
import { cn } from '@/lib/utils'

/** One editable/literal time segment, as exposed by reka-ui's root context. */
export type TTimeSegment = { part: string; value: string }

/**
 * TimeFieldInput — the segment container. HeroUI v3 `TimeField.Input`.
 *
 * Reads reka-ui's `TimeFieldRoot` context (`segmentContents`) and exposes each
 * segment to a render-prop child, mirroring HeroUI's
 * `<TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>`.
 */
export const TimeFieldInput = defineComponent({
  name: 'TimeFieldInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const rootContext = injectTimeFieldRootContext()
    return () => (
      <div
        {...attrs}
        data-slot="time-field-input"
        class={cn('date-input-group__input', props.class)}
      >
        {rootContext.segmentContents.value.map((item: TTimeSegment) => (
          slots.default
            ? slots.default(item)
            : <span key={item.part}>{item.value}</span>
        ))}
      </div>
    )
  }
})

export default TimeFieldInput
