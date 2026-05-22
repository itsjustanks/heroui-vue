import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { Toggle as RekaToggle, ToggleGroupItem as RekaToggleGroupItemBase } from 'reka-ui'
import { toggleButtonVariants, type ToggleButtonVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TOGGLE_BUTTON_GROUP_CONTEXT } from '@/toggle-group/toggle-group-context'

// reka requires `value` on ToggleGroupItem, but HeroUI's API uses `id`; the
// thin `any` cast lets us forward `value` derived from `id` at runtime.
const RekaToggleGroupItem: any = RekaToggleGroupItemBase

/**
 * ToggleButton — faithful Vue port of HeroUI v3 `ToggleButton`.
 *
 * A two-state pressed/unpressed control. Standalone it is backed by reka-ui
 * `Toggle`; inside a `ToggleButtonGroup` it automatically becomes a reka-ui
 * `ToggleGroupItem` so it participates in the group's selection — mirroring
 * HeroUI's React `ToggleButton`, which adapts via the group context.
 *
 * Styling is sourced exclusively from `@heroui/styles` `toggleButtonVariants`.
 * `size` resolves from the group context first, then the local prop.
 */
export const ToggleButtonRoot = defineComponent({
  name: 'ToggleButton',
  inheritAttrs: false,
  props: {
    class:      { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'default' */
    variant:    { type: String as PropType<ToggleButtonVariants['variant']>, default: 'default' },
    /** Size — overridden by the group context size when set. @default 'md' */
    size:       { type: String as PropType<ToggleButtonVariants['size']>, default: 'md' },
    /** Renders a square icon-only button (removes horizontal padding). */
    isIconOnly: { type: Boolean as PropType<ToggleButtonVariants['isIconOnly']>, default: false },
    /** Identifies the button within a `ToggleButtonGroup` (HeroUI prop). */
    id:         { type: String as PropType<string>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(TOGGLE_BUTTON_GROUP_CONTEXT, null)

    return () => {
      const className = cn(
        toggleButtonVariants({
          variant:    props.variant,
          size:       ctx?.size ?? props.size,
          isIconOnly: props.isIconOnly
        }),
        props.class
      )

      // Inside a ToggleButtonGroup → render as a reka ToggleGroupItem so the
      // button participates in the group's shared selection state.
      if (ctx) {
        return (
          <RekaToggleGroupItem
            {...(attrs as Record<string, any>)}
            value={props.id}
            data-slot="toggle-button"
            class={className}
          >
            {(slotProps: Record<string, unknown>) => slots.default?.(slotProps)}
          </RekaToggleGroupItem>
        )
      }

      // `id` is a plain HTML attribute — forward it through the attrs spread
      // so reka `Toggle`'s typed prop surface stays untouched.
      const RekaToggleAny: any = RekaToggle

      return (
        <RekaToggleAny
          {...attrs}
          id={props.id}
          data-slot="toggle-button"
          class={className}
        >
          {(slotProps: Record<string, unknown>) => slots.default?.(slotProps)}
        </RekaToggleAny>
      )
    }
  }
})

export default ToggleButtonRoot
