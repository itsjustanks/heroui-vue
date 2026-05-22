import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RadioGroupRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * RadioGroup — HeroUI-Vue primitive over reka-ui `RadioGroupRoot`.
 *
 * The root container that owns single-selection state for its `RadioGroupItem`
 * children. All `RadioGroupRoot` props/emits (`modelValue`, `onUpdate:modelValue`,
 * `disabled`, `required`, `name`, `orientation`, `loop`, …) forward through
 * `{...attrs}` — only `class` is declared so it can be merged via `cn()`.
 */
export const RadioGroup = defineComponent({
  name: 'RadioGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RadioGroupRoot
        {...attrs}
        class={cn('grid gap-2', props.class)}
      >
        {slots.default?.()}
      </RadioGroupRoot>
    )
  }
})

export default RadioGroup
