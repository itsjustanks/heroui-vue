import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { ToggleGroupRoot } from 'reka-ui'
import { toggleButtonGroupVariants, type ToggleButtonGroupVariants, type ToggleButtonVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TOGGLE_BUTTON_GROUP_CONTEXT } from './toggle-group-context'

/** Flow axis for the group container. */
type TOrientation = 'horizontal' | 'vertical'

/**
 * ToggleButtonGroup — faithful Vue port of HeroUI v3 `ToggleButtonGroup`.
 *
 * Backed by reka-ui `ToggleGroupRoot`. Computes `toggleButtonGroupVariants` slot
 * map and provides it to compound parts (`ToggleButtonGroup.Separator`), plus
 * propagates `size` to child `ToggleButton` items via the same context.
 */
export const ToggleButtonGroupRoot = defineComponent({
  name: 'ToggleButtonGroup',
  inheritAttrs: false,
  props: {
    class:          { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Stretch group to fill container width. @default false */
    fullWidth:      { type: Boolean as PropType<ToggleButtonGroupVariants['fullWidth']>, default: false },
    /** Detached — gaps between buttons instead of connected. @default false */
    isDetached:     { type: Boolean as PropType<ToggleButtonGroupVariants['isDetached']>, default: false },
    /** Flow axis. @default 'horizontal' */
    orientation:    { type: String as PropType<TOrientation>, default: 'horizontal' },
    /** Size propagated to all child ToggleButtons. */
    size:           { type: String as PropType<ToggleButtonVariants['size']>, default: undefined },
    /** Disable the entire group. */
    isDisabled:     { type: Boolean, default: false },
    /**
     * HeroUI API: `selectionMode` maps to reka-ui `type`.
     * 'single' allows one selected at a time; 'multiple' allows many.
     */
    selectionMode:  { type: String as PropType<'single' | 'multiple'>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() =>
      toggleButtonGroupVariants({
        fullWidth:   props.fullWidth,
        isDetached:  props.isDetached,
        orientation: props.orientation as ToggleButtonGroupVariants['orientation'],
      })
    )

    provide(TOGGLE_BUTTON_GROUP_CONTEXT, {
      slots: styles,
      get size ()       { return props.size },
      get isDisabled () { return props.isDisabled }
    })

    return () => (
      <ToggleGroupRoot
        {...attrs}
        type={(props.selectionMode ?? 'single') as 'single' | 'multiple'}
        data-slot="toggle-button-group"
        class={cn(styles.value.base(), props.class)}
      >
        {(slotProps: Record<string, unknown>) => slots.default?.(slotProps)}
      </ToggleGroupRoot>
    )
  }
})

export default ToggleButtonGroupRoot
