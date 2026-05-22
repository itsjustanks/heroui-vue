import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { toggleButtonGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TOGGLE_BUTTON_GROUP_CONTEXT } from './toggle-group-context'

/**
 * ToggleButtonGroup.Separator — the thin divider between toggle buttons.
 * Faithful Vue port of HeroUI v3 `ToggleButtonGroupSeparator`.
 *
 * Renders `aria-hidden` `<span>` with `data-slot="toggle-button-group-separator"`.
 * The separator class is resolved from the context slot map.
 */
export const ToggleButtonGroupSeparator = defineComponent({
  name: 'ToggleButtonGroupSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(TOGGLE_BUTTON_GROUP_CONTEXT, null)

    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        data-slot="toggle-button-group-separator"
        class={cn(
          (ctx?.slots.value ?? toggleButtonGroupVariants()).separator(),
          props.class
        )}
      />
    )
  }
})

export default ToggleButtonGroupSeparator
