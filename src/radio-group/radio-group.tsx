import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { RadioGroupRoot as RekaRadioGroupRoot } from 'reka-ui'
import { radioGroupVariants, type RadioGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * RadioGroupRoot — a group of mutually exclusive radio buttons.
 * Faithful Vue port of HeroUI v3 `RadioGroup` over reka-ui `RadioGroupRoot`.
 *
 * Uses `radioGroupVariants` from `@heroui/styles` (flat variant, returns a string).
 * All reka-ui `RadioGroupRoot` props (`modelValue`, `disabled`, `required`, `name`,
 * `orientation`, `loop`, …) forward through `{...attrs}`.
 */
export const RadioGroupRoot = defineComponent({
  name: 'RadioGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'primary' */
    variant: { type: String as PropType<RadioGroupVariants['variant']>, default: 'primary' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => radioGroupVariants({ variant: props.variant }))
    return () => (
      <RekaRadioGroupRoot
        {...attrs}
        data-slot="radio-group"
        class={cn(styles.value, props.class)}
      >
        {slots.default?.()}
      </RekaRadioGroupRoot>
    )
  }
})

export default RadioGroupRoot
