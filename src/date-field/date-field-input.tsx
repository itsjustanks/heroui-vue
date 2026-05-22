import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { injectDateFieldRootContext } from 'reka-ui'
import { cn } from '@/lib/utils'

/** One editable/literal date segment, as exposed by reka-ui's root context. */
export type TDateSegment = { part: string; value: string }

/**
 * DateFieldInput — the segment container. HeroUI v3 `DateField.Input`.
 *
 * Reads reka-ui's `DateFieldRoot` context (`segmentContents`) and exposes each
 * segment to a render-prop child, mirroring HeroUI's
 * `<DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>`.
 */
export const DateFieldInput = defineComponent({
  name: 'DateFieldInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const rootContext = injectDateFieldRootContext()
    return () => (
      <div
        {...attrs}
        data-slot="date-field-input"
        class={cn('flex items-center', props.class)}
      >
        {rootContext.segmentContents.value.map((item: TDateSegment) => (
          slots.default
            ? slots.default(item)
            : <span key={item.part}>{item.value}</span>
        ))}
      </div>
    )
  }
})

export default DateFieldInput
