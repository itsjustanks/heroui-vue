import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CheckboxRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { useCheckboxGroup } from './checkbox-group-context'

/**
 * CheckboxGroupItem — one checkbox within a CheckboxGroup. Faithful port of the
 * `Checkbox` placed inside HeroUI v3's `CheckboxGroup`.
 *
 * Built over reka-ui `CheckboxRoot` with a required `value` — the value added to
 * / removed from the group's `string[]` when toggled. A `flex` row laying out a
 * `CheckboxGroupItemControl` next to a `CheckboxGroupItemContent`.
 *
 * The item's checked state is exposed to its `Control`/`Indicator`/`Content`
 * descendants via reka-ui's own `injectCheckboxRootContext`, so no extra context
 * is needed here. reka-ui `CheckboxRoot` props (`value`, `disabled`, `id`,
 * `required`, …) forward through `{...attrs}`; selection is owned by the parent
 * group.
 */
export const CheckboxGroupItem = defineComponent({
  name: 'CheckboxGroupItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The value contributed to the group's `string[]` when this item is checked. */
    value: { type: String, required: true },
    /** Whether this individual item is disabled. */
    disabled: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const group = useCheckboxGroup()

    return () => (
      <CheckboxRoot
        {...attrs}
        value={props.value}
        disabled={props.disabled || group.isDisabled.value}
        data-checkbox-group-item=""
        data-variant={group.variant.value}
        class={cn(
          'group flex w-fit items-start gap-3 outline-none',
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60',
          props.class
        )}
      >
        {slots.default?.()}
      </CheckboxRoot>
    )
  }
})

export default CheckboxGroupItem
