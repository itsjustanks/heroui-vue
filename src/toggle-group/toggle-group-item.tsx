import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { ToggleGroupItem as ToggleGroupItemBase } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaToggleGroupItem: any = ToggleGroupItemBase
import { cn } from '@/lib/utils'
import { toggleVariants, type TToggleVariants } from '../toggle/toggle-variants'
import { TOGGLE_GROUP_KEY } from './toggle-group'

/**
 * ToggleGroupItem — HeroUI v3 `toggle-button` as a member of a
 * `toggle-button-group`, over reka-ui `ToggleGroupItem`.
 *
 * Resolves `variant` / `size` from the `ToggleGroup` context first, falling back
 * to its own props — identical precedence to the shadcn-vue source. All reka
 * `ToggleGroupItem` props (`value`, `disabled`, …) forward via `{...attrs}`.
 */
export const ToggleGroupItem = defineComponent({
  name: 'ToggleGroupItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TToggleVariants['variant']>, default: undefined },
    size: { type: String as PropType<TToggleVariants['size']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const context = inject(TOGGLE_GROUP_KEY, undefined)

    return () => (
      <RekaToggleGroupItem
        {...(attrs as Record<string, any>)}
        class={cn(
          toggleVariants({
            variant: context?.variant || props.variant,
            size: context?.size || props.size
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
