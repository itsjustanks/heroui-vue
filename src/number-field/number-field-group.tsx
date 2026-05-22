import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { numberFieldGroupVariants, type TNumberFieldGroupVariants } from './variants'

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
    /** HeroUI surface variant — `primary` (bordered) or `secondary` (muted). */
    variant: { type: String as PropType<TNumberFieldGroupVariants['variant']>, default: 'primary' },
    /** HeroUI `fullWidth` — stretch the group to fill its container. */
    fullWidth: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        role="group"
        data-slot="number-field-group"
        style={{ gridTemplateColumns: '40px 1fr 40px' }}
        class={cn(
          numberFieldGroupVariants({ variant: props.variant, fullWidth: props.fullWidth }),
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default NumberFieldGroup
