import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { CheckboxGroupRoot as RekaCheckboxGroupRoot } from 'reka-ui'
import { checkboxGroupVariants, type CheckboxGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CHECKBOX_GROUP_CONTEXT } from './checkbox-group-context'

/**
 * CheckboxGroup — a grouped set of checkboxes sharing one `string[]` value.
 * Faithful Vue port of HeroUI v3 `CheckboxGroup` over reka-ui `CheckboxGroupRoot`.
 *
 * Like HeroUI, this is a plain container: place `Label`, `Description` and real
 * `Checkbox` components inside it. The group shares its `variant` to each
 * `Checkbox` via context.
 */
export const CheckboxGroupRoot = defineComponent({
  name: 'CheckboxGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Emphasis variant — inherited by each `Checkbox` in the group. */
    variant: { type: String as PropType<CheckboxGroupVariants['variant']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    provide(CHECKBOX_GROUP_CONTEXT, { variant: computed(() => props.variant) })

    return () => (
      <RekaCheckboxGroupRoot
        {...attrs}
        data-slot="checkbox-group"
        class={cn(checkboxGroupVariants({ variant: props.variant }), props.class)}
      >
        {slots.default?.()}
      </RekaCheckboxGroupRoot>
    )
  }
})

export default CheckboxGroupRoot
