import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

type TKbdVariant = 'default' | 'light'

/**
 * Kbd — a keyboard key hint.
 *
 * Emits HeroUI v3 BEM class names from `kbd.css`:
 *   base: `kbd`
 *   variant: `kbd--default` | `kbd--light`
 */
export const Kbd = defineComponent({
  // `kbd` is a reserved HTML element name — keep the PascalCase export, name the
  // defineComponent uniquely so vue/no-reserved-component-names stays quiet.
  name: 'HeroKbd',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TKbdVariant>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <kbd
        {...attrs}
        data-slot="kbd"
        class={cn(
          'kbd',
          props.variant === 'light' ? 'kbd--light' : 'kbd--default',
          props.class
        )}
      >
        {slots.default?.()}
      </kbd>
    )
  }
})

export default Kbd
