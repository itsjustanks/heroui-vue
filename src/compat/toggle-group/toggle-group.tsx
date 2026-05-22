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

/**
 * ToggleGroup — HeroUI v3 `toggle-button-group` ported to Vue over reka-ui
 * `ToggleGroupRoot`.
 *
 * Provides `variant` / `size` to its `ToggleGroupItem` children via reka-style
 * context (Vue `provide`), so the group sets the look once. All reka
 * `ToggleGroupRoot` props/emits (`type`, `modelValue`, `onUpdate:modelValue`, …)
 * forward via `{...attrs}
        data-slot="toggle-group"`.
 */
export const ToggleGroup = defineComponent({
  name: 'ToggleGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TToggleVariants['variant']>, default: undefined },
    size: { type: String as PropType<TToggleVariants['size']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    provide(TOGGLE_GROUP_KEY, {
      variant: props.variant,
      size: props.size
    })

    return () => (
      <ToggleGroupRoot
        {...attrs}
        class={cn('flex items-center justify-center gap-1', props.class)}
      >
        {(slotProps: Record<string, unknown>) => slots.default?.(slotProps)}
      </ToggleGroupRoot>
    )
  }
})

export default ToggleGroup
