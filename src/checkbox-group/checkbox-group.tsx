import { computed, defineComponent, toRef, type HTMLAttributes, type PropType } from 'vue'
import { CheckboxGroupRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { provideCheckboxGroupContext, type TCheckboxGroupVariant } from './checkbox-group-context'

/**
 * CheckboxGroup — a grouped set of checkboxes sharing one `string[]` value.
 * HeroUI-Vue primitive over reka-ui `CheckboxGroupRoot`.
 *
 * Faithful port of HeroUI v3 `CheckboxGroup` (`checkbox-group.css`): a vertical
 * `flex flex-col` stack. The root owns the array value and provides the variant
 * / disabled / invalid state to descendant `CheckboxGroupItem`s via context.
 *
 * `v-model` binds the selected values (`modelValue: string[]` /
 * `onUpdate:modelValue`). reka-ui `CheckboxGroupRoot` props/emits
 * (`defaultValue`, `name`, `required`, `orientation`, `disabled`, …) forward
 * through `{...attrs}`.
 *
 * `variant="secondary"` mirrors HeroUI's lower-emphasis variant for use on
 * Surfaces; `invalid` flags the group's validation state.
 */
export const CheckboxGroup = defineComponent({
  name: 'CheckboxGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Emphasis variant — `secondary` is the lower-emphasis variant for Surfaces. */
    variant: { type: String as PropType<TCheckboxGroupVariant>, default: 'primary' },
    /** Whether the whole group is disabled. */
    disabled: { type: Boolean, default: false },
    /** Whether the group is in an invalid state. */
    invalid: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    provideCheckboxGroupContext({
      variant: toRef(props, 'variant'),
      isDisabled: toRef(props, 'disabled'),
      isInvalid: toRef(props, 'invalid')
    })

    const dataInvalid = computed(() => (props.invalid ? 'true' : undefined))

    return () => (
      <CheckboxGroupRoot
        {...attrs}
        disabled={props.disabled}
        data-variant={props.variant}
        data-invalid={dataInvalid.value}
        aria-invalid={props.invalid || undefined}
        class={cn(
          // HeroUI checkbox-group.css: flex flex-col; items get top spacing.
          'flex flex-col gap-1 [&_[data-checkbox-group-item]]:mt-3',
          props.class
        )}
      >
        {slots.default?.()}
      </CheckboxGroupRoot>
    )
  }
})

export default CheckboxGroup
