import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { TimeFieldRoot as RekaTimeFieldRoot } from 'reka-ui'
import { timeFieldVariants, dateInputGroupVariants, type TimeFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TIME_FIELD_CONTEXT } from './time-field-context'

/**
 * TimeFieldRoot — the segmented time-field root. HeroUI v3 `TimeField`.
 *
 * Computes `timeFieldVariants` for the wrapper class and provides a
 * `dateInputGroupVariants` slot map to the compound parts (Group, Input,
 * Segment, Prefix, Suffix). Wraps reka-ui `TimeFieldRoot`.
 */
export const TimeFieldRoot = defineComponent({
  name: 'TimeField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the field to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<TimeFieldVariants['fullWidth']>, default: false }
  },
  setup (props, { attrs, slots }) {
    // Provide default dateInputGroupVariants slot map — Group overrides this for its own variant.
    const groupSlots = computed(() => dateInputGroupVariants())
    provide(TIME_FIELD_CONTEXT, { slots: groupSlots })

    const styles = computed(() => timeFieldVariants({ fullWidth: props.fullWidth }))

    return () => (
      <RekaTimeFieldRoot
        {...(attrs as Record<string, any>)}
        data-slot="time-field"
        class={cn(styles.value, props.class)}
      >
        {{
          default: (slotProps: Record<string, unknown>) => slots.default?.(slotProps)
        }}
      </RekaTimeFieldRoot>
    )
  }
})

export default TimeFieldRoot
