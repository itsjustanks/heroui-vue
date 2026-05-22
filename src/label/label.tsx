import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Label as RekaLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Label — HeroUI-Vue primitive over reka-ui `Label`.
 *
 * Emits HeroUI v3 BEM class names from `label.css`:
 *   base: `label`
 *   modifiers: `label--disabled` | `label--invalid` | `label--required`
 */
export const Label = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names -- the HeroUI/shadcn component is named Label
  name: 'Label',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    isDisabled: { type: Boolean, default: false },
    isInvalid: { type: Boolean, default: false },
    isRequired: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaLabel
        {...attrs}
        class={cn(
          'label',
          props.isDisabled && 'label--disabled',
          props.isInvalid && 'label--invalid',
          props.isRequired && 'label--required',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaLabel>
    )
  }
})

export default Label
