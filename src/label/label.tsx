import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Label as RekaLabel } from 'reka-ui'
import { labelVariants, type LabelVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * LabelRoot — faithful Vue port of HeroUI v3 `LabelRoot`.
 *
 * Wraps reka-ui `Label` and applies BEM classes from `labelVariants`
 * in `@heroui/styles`. Flat style — `labelVariants({...})` returns a class
 * string directly.
 */
export const LabelRoot = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'LabelRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    for: { type: String, default: undefined },
    htmlFor: { type: String, default: undefined },
    isDisabled: { type: Boolean as PropType<LabelVariants['isDisabled']>, default: false },
    isInvalid: { type: Boolean as PropType<LabelVariants['isInvalid']>, default: false },
    isRequired: { type: Boolean as PropType<LabelVariants['isRequired']>, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaLabel
        {...attrs}
        for={props.htmlFor ?? props.for}
        data-slot="label"
        class={cn(
          labelVariants({ isDisabled: props.isDisabled, isInvalid: props.isInvalid, isRequired: props.isRequired }),
          props.class
        )}
      >
        {slots.default?.()}
      </RekaLabel>
    )
  }
})

export default LabelRoot
