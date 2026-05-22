import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Label } from '@/label'

/**
 * FieldLabel — the label for a `Field`. Faithful port of
 * `shadcn/field/FieldLabel`.
 *
 * Wraps the shared `Label` primitive (no HeroUI-Vue label port yet — Phase 2)
 * and adds the field-specific `has-[…]` selectors for selectable card labels.
 */
export const FieldLabel = defineComponent({
  name: 'FieldLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Label
        {...attrs}
        data-slot="label"
        class={cn('label', props.class)}
      >
        {slots.default?.()}
      </Label>
    )
  }
})

export default FieldLabel
