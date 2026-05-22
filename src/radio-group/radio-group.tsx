import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RadioGroupRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

type TRadioGroupVariant = 'primary' | 'secondary'

/**
 * RadioGroup — HeroUI-Vue primitive over reka-ui `RadioGroupRoot`.
 *
 * Emits HeroUI v3 BEM class names from `radio-group.css`.
 * All `RadioGroupRoot` props/emits (`modelValue`, `onUpdate:modelValue`,
 * `disabled`, `required`, `name`, `orientation`, `loop`, …) forward through
 * `{...attrs}` — only `class` and `variant` are declared so they can be merged via `cn()`.
 */
export const RadioGroup = defineComponent({
  name: 'RadioGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TRadioGroupVariant>, default: 'primary' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RadioGroupRoot
        {...attrs}
        class={cn(
          'radio-group',
          `radio-group--${props.variant}`,
          props.class
        )}
      >
        {slots.default?.()}
      </RadioGroupRoot>
    )
  }
})

export default RadioGroup
