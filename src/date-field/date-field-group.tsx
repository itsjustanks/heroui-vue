import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import type { TDateInputGroupVariants } from '@/time-field'

/**
 * DateFieldGroup — the segmented-input surface. HeroUI v3 `DateField.Group`.
 *
 * Reuses HeroUI's shared `date-input-group` BEM (the same surface every HeroUI
 * date control uses — `time-field`, `date-picker`, `date-range-picker`):
 * `rounded-md` bordered surface, a focus-within ring, and `primary` /
 * `secondary` variants. Holds the optional `DateFieldPrefix`, the
 * `DateFieldInput`, and the optional `DateFieldSuffix`.
 */
export const DateFieldGroup = defineComponent({
  name: 'DateFieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI surface variant — `primary` (bordered) or `secondary` (muted). */
    variant: { type: String as PropType<TDateInputGroupVariants['variant']>, default: 'primary' },
    /** HeroUI `fullWidth` — stretch the group to fill its container. */
    fullWidth: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="date-field-group"
        class={cn(
          'date-input-group',
          props.variant === 'secondary' ? 'date-input-group--secondary' : 'date-input-group--primary',
          props.fullWidth && 'date-input-group--full-width',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DateFieldGroup
