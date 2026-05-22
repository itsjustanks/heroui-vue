import { defineComponent, provide, type HTMLAttributes, type InjectionKey, type PropType } from 'vue'
import { ToggleGroupRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { type TToggleVariants } from '../toggle/toggle-variants'

/** Shared variant/size context for `ToggleGroupItem`. */
export interface IToggleGroupContext {
  variant?: TToggleVariants['variant']
  size?: TToggleVariants['size']
}

export const TOGGLE_GROUP_KEY: InjectionKey<IToggleGroupContext> = Symbol('toggleGroup')

/** Toolbar flow axis — mirrors reka-ui's `DataOrientation`. */
type TToggleGroupOrientation = 'horizontal' | 'vertical'

/**
 * ToggleGroup — HeroUI v3 `toggle-button-group` ported to Vue over reka-ui
 * `ToggleGroupRoot`.
 *
 * Emits HeroUI BEM class names from `toggle-button-group.styles.js`. Provides
 * `variant` / `size` to its `ToggleGroupItem` children via Vue `provide`. All
 * reka `ToggleGroupRoot` props/emits (`type`, `modelValue`, …) forward via
 * `{...attrs}`.
 */
export const ToggleGroup = defineComponent({
  name: 'ToggleGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Shared item variant — forwarded to each `ToggleGroupItem`. */
    variant: { type: String as PropType<TToggleVariants['variant']>, default: undefined },
    /** Shared item size — forwarded to each `ToggleGroupItem`. */
    size: { type: String as PropType<TToggleVariants['size']>, default: undefined },
    /** Flow axis for the group container. */
    orientation: { type: String as PropType<TToggleGroupOrientation>, default: 'horizontal' },
    /** Stretch group to fill container width. */
    fullWidth: { type: Boolean, default: false },
    /** Detached mode — gaps between buttons instead of connected. */
    isDetached: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    provide(TOGGLE_GROUP_KEY, {
      variant: props.variant,
      size: props.size
    })

    return () => (
      <ToggleGroupRoot
        {...attrs}
        class={cn(
          'toggle-button-group',
          props.orientation === 'vertical' ? 'toggle-button-group--vertical' : 'toggle-button-group--horizontal',
          props.fullWidth && 'toggle-button-group--full-width',
          props.isDetached && 'toggle-button-group--detached',
          props.class
        )}
      >
        {(slotProps: Record<string, unknown>) => slots.default?.(slotProps)}
      </ToggleGroupRoot>
    )
  }
})

export default ToggleGroup
