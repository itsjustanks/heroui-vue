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
        class={cn(
          // HeroUI menu-item.css: min-h-9, gap-3, rounded-2xl, px-2 (dropdown overrides to px-2.5).
          'relative flex min-h-9 w-full cursor-pointer select-none items-center justify-start gap-3 rounded-2xl px-2.5 py-1.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          '[&>svg]:size-4 [&>svg]:shrink-0',
          props.variant === 'danger' && 'text-danger data-[highlighted]:text-danger',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaDropdownMenuItem>
    )
  }
})

export default DropdownMenuItem
