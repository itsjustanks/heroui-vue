import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { dateInputGroupVariants, type TDateInputGroupVariants } from './variants'

/**
 * TimeFieldGroup — the segmented-input surface. HeroUI v3 `TimeField.Group`.
 *
 * Adapts HeroUI's `date-input-group` BEM: `rounded-md` bordered surface, a
 * focus-within ring, and `primary` / `secondary` variants. Holds the optional
 * `TimeFieldPrefix`, the `TimeFieldInput`, and the optional `TimeFieldSuffix`.
 */
export const TimeFieldGroup = defineComponent({
  name: 'TimeFieldGroup',
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
        data-slot="time-field-group"
        class={cn(
          dateInputGroupVariants({ variant: props.variant, fullWidth: props.fullWidth }),
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default TimeFieldGroup
