import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * TimeFieldGroup — the segmented-input surface. HeroUI v3 `TimeField.Group`.
 *
 * Maps to HeroUI's `date-input-group` BEM: bordered/muted surface with
 * `primary` / `secondary` variants. Holds the optional `TimeFieldPrefix`,
 * the `TimeFieldInput`, and the optional `TimeFieldSuffix`.
 */
export const TimeFieldGroup = defineComponent({
  name: 'TimeFieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI surface variant — `primary` (bordered) or `secondary` (muted). */
    variant: { type: String as PropType<'primary' | 'secondary'>, default: 'primary' },
    /** HeroUI `fullWidth` — stretch the group to fill its container. */
    fullWidth: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="time-field-group"
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

export default TimeFieldGroup
