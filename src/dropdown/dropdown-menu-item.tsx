import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuItem as RekaDropdownMenuItem } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DropdownMenuItem — HeroUI `menu-item`.
 *
 * `variant="danger"` maps to HeroUI's `menu-item--danger`. Interactive states use
 * reka-ui's `data-[highlighted]` / `data-[disabled]` attributes.
 */
export const DropdownMenuItem = defineComponent({
  name: 'DropdownMenuItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<'default' | 'danger'>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuItem
        {...attrs}
        data-slot="menu-item"
        class={cn(
          'menu-item',
          props.variant === 'danger' ? 'menu-item--danger' : 'menu-item--default',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaDropdownMenuItem>
    )
  }
})

export default DropdownMenuItem
