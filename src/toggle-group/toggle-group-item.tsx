import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { ToggleGroupItem as RekaToggleGroupItemBase } from 'reka-ui'
// Thin wrapper: reka requires `value` but it arrives via attrs at runtime.
const RekaToggleGroupItem: any = RekaToggleGroupItemBase
import { toggleButtonVariants, type ToggleButtonVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TOGGLE_BUTTON_GROUP_CONTEXT } from './toggle-group-context'

/**
 * ToggleButton inside a ToggleButtonGroup — a member of HeroUI v3's
 * `ToggleButtonGroup`, backed by reka-ui `ToggleGroupItem`.
 *
 * Resolves `size` from the `ToggleButtonGroup` context first, falling back to
 * its own prop — mirrors the React source precedence. All reka `ToggleGroupItem`
 * props (`value`, `disabled`, …) forward via `{...attrs}`.
 */
export const ToggleGroupItem = defineComponent({
  name: 'ToggleGroupItem',
  inheritAttrs: false,
  props: {
    class:      { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'default' */
    variant:    { type: String as PropType<ToggleButtonVariants['variant']>, default: 'default' },
    /** Size — overridden by the group context size when set. @default 'md' */
    size:       { type: String as PropType<ToggleButtonVariants['size']>, default: 'md' },
    /** Renders a square icon-only button (removes horizontal padding). */
    isIconOnly: { type: Boolean as PropType<ToggleButtonVariants['isIconOnly']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TOGGLE_BUTTON_GROUP_CONTEXT, null)

    return () => (
      <RekaToggleGroupItem
        {...(attrs as Record<string, any>)}
        data-slot="toggle-button"
        class={cn(
          toggleButtonVariants({
            variant:    props.variant,
            size:       ctx?.size ?? props.size,
            isIconOnly: props.isIconOnly
          }),
          props.class
        )}
      >
        {(slotProps: Record<string, unknown>) => slots.default?.(slotProps)}
      </RekaToggleGroupItem>
    )
  }
})

export default ToggleGroupItem
