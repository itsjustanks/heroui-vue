import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { DateFieldRoot as RekaDateFieldRoot, useForwardPropsEmits } from 'reka-ui'
import type { DateFieldRootProps } from 'reka-ui'
import { dateFieldVariants, type DateFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_CONTEXT } from './date-field-context'
import { dateInputGroupVariants } from '@heroui/styles'

/**
 * DateFieldRoot — the segmented date-field root. HeroUI v3 `DateField`.
 *
 * Computes `dateFieldVariants` for the wrapper and provides a `dateInputGroupVariants`
 * slot map to the compound parts (Group, Input, Segment, Prefix, Suffix).
 * Wraps reka-ui `DateFieldRoot`; all reka props and emits are forwarded.
 */
export const DateFieldRoot = defineComponent({
  name: 'DateField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the field to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<DateFieldVariants['fullWidth']>, default: false }
  },
  emits: ['update:modelValue', 'update:placeholder'],
  setup (props, { attrs, emit, slots }) {
    // Provide dateInputGroupVariants slot map — parts read this for BEM classes.
    // We store variant/fullWidth defaults here so Group can override at its level.
    const groupSlots = computed(() => dateInputGroupVariants())
    provide(DATE_FIELD_CONTEXT, { slots: groupSlots })

    const styles = computed(() => dateFieldVariants({ fullWidth: props.fullWidth }))
    const forwarded = useForwardPropsEmits(attrs as DateFieldRootProps, emit)

    return () => (
      <RekaDateFieldRoot
        {...forwarded.value}
        data-slot="date-field"
        data-required={(forwarded.value as Record<string, unknown>).required ? '' : undefined}
        class={cn(styles.value, props.class)}
      >
        {{
          default: (slotProps: Record<string, unknown>) => slots.default?.(slotProps)
        }}
      </RekaDateFieldRoot>
    )
  }
})

export default DateFieldRoot
