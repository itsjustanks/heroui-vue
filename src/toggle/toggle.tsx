import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Toggle as RekaToggle } from 'reka-ui'
import { toggleButtonVariants, type ToggleButtonVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * ToggleButton — faithful Vue port of HeroUI v3 `ToggleButton`.
 *
 * A two-state pressed/unpressed control backed by reka-ui `Toggle`.
 * Styling is sourced exclusively from `@heroui/styles` `toggleButtonVariants`.
 * All reka `Toggle` props/emits (`pressed`, `disabled`, `onUpdate:pressed`, …)
 * forward via `{...attrs}`.
 */
export const ToggleButtonRoot = defineComponent({
  name: 'ToggleButton',
  inheritAttrs: false,
  props: {
    class:      { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'default' */
    variant:    { type: String as PropType<ToggleButtonVariants['variant']>, default: 'default' },
    /** Size scale. @default 'md' */
    size:       { type: String as PropType<ToggleButtonVariants['size']>, default: 'md' },
    /** Renders a square icon-only button (removes horizontal padding). */
    isIconOnly: { type: Boolean as PropType<ToggleButtonVariants['isIconOnly']>, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaToggle
        {...attrs}
        data-slot="toggle-button"
        class={cn(
          toggleButtonVariants({
            variant:    props.variant,
            size:       props.size,
            isIconOnly: props.isIconOnly
          }),
          props.class
        )}
      >
        {(slotProps: Record<string, unknown>) => slots.default?.(slotProps)}
      </RekaToggle>
    )
  }
})

export default ToggleButtonRoot
