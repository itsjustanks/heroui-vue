import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * NumberFieldGroup — the segmented-input surface. HeroUI v3 `NumberField.Group`.
 *
 * Adapts HeroUI's `number-field__group` BEM: a 3-column CSS grid
 * (`40px 1fr 40px`) so the optional `NumberFieldDecrementButton`, the
 * `NumberFieldInput`, and the optional `NumberFieldIncrementButton` line up;
 * `rounded-md` bordered surface with a focus-within ring and `primary` /
 * `secondary` variants.
 */
export const NumberFieldGroup = defineComponent({
  name: 'NumberFieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the group to fill its container. */
    fullWidth: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        role="group"
        data-slot="number-field-group"
        class={cn(
          'number-field__group',
          props.fullWidth && 'number-field__group--full-width',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default NumberFieldGroup
