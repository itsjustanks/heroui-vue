import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CheckboxIndicator } from 'reka-ui'
import { IconCheck } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * CheckboxGroupItemIndicator — the checkmark inside a CheckboxGroupItemControl.
 * Faithful port of HeroUI v3 `Checkbox.Indicator` (`checkbox.css`).
 *
 * Built over reka-ui `CheckboxIndicator`, which renders only when the parent
 * `CheckboxRoot` is checked / indeterminate. With no children it renders the
 * default check icon.
 */
export const CheckboxGroupItemIndicator = defineComponent({
  name: 'CheckboxGroupItemIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <CheckboxIndicator
        {...attrs}
        class={cn('checkbox__indicator', props.class)}
      >
        {slots.default ? slots.default() : <IconCheck class="size-3.5" />}
      </CheckboxIndicator>
    )
  }
})

export default CheckboxGroupItemIndicator
