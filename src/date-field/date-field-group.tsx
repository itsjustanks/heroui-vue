import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { dateInputGroupVariants, type DateInputGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DATE_FIELD_CONTEXT } from './date-field-context'

/**
 * DateField.Group — the segmented-input surface. HeroUI v3 `DateField.Group`
 * (maps to `DateInputGroupRoot`).
 *
 * Computes `dateInputGroupVariants` and provides the slot map to
 * `DateField.Input`, `.Segment`, `.Prefix`, `.Suffix`.
 */
export const DateFieldGroup = defineComponent({
  name: 'DateFieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI surface variant — `primary` (bordered) or `secondary` (muted). @default 'primary' */
    variant: { type: String as PropType<DateInputGroupVariants['variant']>, default: 'primary' },
    /** HeroUI `fullWidth` — stretch the group to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<DateInputGroupVariants['fullWidth']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => dateInputGroupVariants({ variant: props.variant, fullWidth: props.fullWidth }))
    provide(DATE_FIELD_CONTEXT, { slots: styles })

    return () => (
      <div
        {...attrs}
        data-slot="date-input-group"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DateFieldGroup
