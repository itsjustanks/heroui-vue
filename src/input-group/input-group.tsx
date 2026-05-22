import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

type TInputGroupVariant = 'primary' | 'secondary'

/**
 * InputGroup — HeroUI-Vue input-group container.
 *
 * Emits HeroUI v3 BEM class names from `input-group.css`:
 *   base: `input-group`
 *   variant: `input-group--primary` | `input-group--secondary`
 *   full-width: `input-group--full-width`
 */
export const InputGroup = defineComponent({
  name: 'InputGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TInputGroupVariant>, default: 'primary' },
    fullWidth: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="input-group"
        role="group"
        class={cn(
          'input-group',
          props.variant === 'secondary' ? 'input-group--secondary' : 'input-group--primary',
          props.fullWidth && 'input-group--full-width',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputGroup
