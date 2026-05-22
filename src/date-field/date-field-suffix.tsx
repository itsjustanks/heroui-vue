import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * DateFieldSuffix — trailing adornment slot (icon / button). HeroUI v3
 * `DateField.Suffix`. Adapts HeroUI's `date-input-group__suffix`; `ml-auto`
 * pushes it to the trailing edge of the group.
 */
export const DateFieldSuffix = defineComponent({
  name: 'DateFieldSuffix',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        data-slot="date-field-suffix"
        class={cn('ml-auto flex shrink-0 items-center text-muted-foreground', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default DateFieldSuffix
