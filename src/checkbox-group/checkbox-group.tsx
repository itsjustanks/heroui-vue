import { computed, defineComponent, toRef, type HTMLAttributes, type PropType } from 'vue'
import { CheckboxGroupRoot as RekaCheckboxGroupRoot } from 'reka-ui'
import { checkboxGroupVariants, type CheckboxGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { provideCheckboxGroupContext } from './checkbox-group-context'

/**
 * CheckboxGroup — a grouped set of checkboxes sharing one `string[]` value.
 * Faithful Vue port of HeroUI v3 `CheckboxGroup` over reka-ui `CheckboxGroupRoot`.
 *
 * Uses `checkboxGroupVariants` from `@heroui/styles` (flat variant, returns a string)
 * for BEM class generation. Provides variant / disabled / invalid state to descendant
 * `CheckboxGroupItem`s via context.
 */
export const CheckboxGroupRoot = defineComponent({
  name: 'CheckboxGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Emphasis variant — propagated to each item. @default 'primary' */
    variant: { type: String as PropType<CheckboxGroupVariants['variant']>, default: 'primary' },
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

    const styles = computed(() => checkboxGroupVariants({ variant: props.variant }))
    const dataInvalid = computed(() => (props.invalid ? 'true' : undefined))

    return () => (
      <RekaCheckboxGroupRoot
        {...attrs}
        disabled={props.disabled}
        data-slot="checkbox-group"
        data-invalid={dataInvalid.value}
        aria-invalid={props.invalid || undefined}
        class={cn(styles.value, props.class)}
      >
        {slots.default?.()}
      </RekaCheckboxGroupRoot>
    )
  }
})

export default CheckboxGroupRoot
