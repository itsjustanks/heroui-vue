import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Toggle as RekaToggle } from 'reka-ui'
import { cn } from '@/lib/utils'
import { toggleVariants, type TToggleVariants } from './toggle-variants'

/**
 * Toggle — HeroUI v3 `toggle-button` ported to Vue over reka-ui `Toggle`.
 *
 * A two-state pressed/unpressed control. `variant` / `size` drive the
 * `toggleVariants` cva map; the pressed state keys off reka-ui's
 * `data-[state=on]`. All other reka `Toggle` props/emits (`pressed`, `disabled`,
 * `onUpdate:pressed`, …) forward via `{...attrs}`.
 */
export const Toggle = defineComponent({
  name: 'Toggle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TToggleVariants['variant']>, default: 'default' },
    size: { type: String as PropType<TToggleVariants['size']>, default: 'default' },
    /** Renders a square icon-only button (removes horizontal padding). */
    isIconOnly: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaToggle
        {...attrs}
        class={cn(toggleVariants({ variant: props.variant, size: props.size, isIconOnly: props.isIconOnly }), props.class)}
      >
        {(slotProps: Record<string, unknown>) => slots.default?.(slotProps)}
      </RekaToggle>
    )
  }
})

export default Toggle
