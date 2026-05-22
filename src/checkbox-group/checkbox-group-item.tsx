import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { CheckboxRoot as RekaCheckboxRoot } from 'reka-ui'
import { checkboxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { useCheckboxGroup } from './checkbox-group-context'
import { CHECKBOX_CONTEXT } from '../checkbox/checkbox-context'

/**
 * CheckboxGroupItem — one checkbox within a `CheckboxGroup`.
 * Faithful port of HeroUI v3 `Checkbox` placed inside `CheckboxGroup`.
 *
 * Reads the group's variant via context and provides a `CHECKBOX_CONTEXT` so
 * descendant parts (`CheckboxGroupItemControl`, `CheckboxGroupItemIndicator`,
 * `CheckboxGroupItemContent`) can pull class-name functions from `checkboxVariants`.
 * Behaviour is delegated to reka-ui `CheckboxRoot`; the `value` is added to /
 * removed from the group's `string[]` when toggled.
 */
export const CheckboxGroupItem = defineComponent({
  name: 'CheckboxGroupItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The value contributed to the group's `string[]` when this item is checked. */
    value: { type: String, required: true },
    /** Whether this individual item is disabled (in addition to group-level disabled). */
    disabled: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const group = useCheckboxGroup()
    const styles = computed(() => checkboxVariants({ variant: group.variant.value }))
    provide(CHECKBOX_CONTEXT, { slots: styles })

    return () => (
      <RekaCheckboxRoot
        {...attrs}
        value={props.value}
        disabled={props.disabled || group.isDisabled.value}
        data-slot="checkbox"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaCheckboxRoot>
    )
  }
})

export default CheckboxGroupItem
