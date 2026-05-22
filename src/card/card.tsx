import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

type TCardVariant = 'default' | 'secondary' | 'tertiary' | 'transparent'

/**
 * Card — the surface container. HeroUI v3 BEM: `card` base, `card--{variant}`
 * modifier. Defaults to `card--default`.
 */
export const Card = defineComponent({
  name: 'Card',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant matching HeroUI `card--{variant}`. */
    variant: { type: String as PropType<TCardVariant>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        class={cn(
          'card',
          `card--${props.variant}`,
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Card
