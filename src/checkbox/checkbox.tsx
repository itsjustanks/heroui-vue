import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { CheckboxRoot as RekaCheckboxRoot, injectCheckboxRootContext } from 'reka-ui'
import { checkboxVariants, type CheckboxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CHECKBOX_CONTEXT } from './checkbox-context'

/* -------------------------------------------------------------------------------------------------
 * CheckboxRoot — the interactive checkbox element. Faithful Vue port of HeroUI v3 `Checkbox`.
 *
 * Computes HeroUI's `checkboxVariants` slot map and provides it to compound parts
 * (`Checkbox.Control`, `Checkbox.Indicator`, `Checkbox.Content`) via context.
 * Delegates behaviour to reka-ui `CheckboxRoot`.
 * -----------------------------------------------------------------------------------------------*/
export const CheckboxRoot = defineComponent({
  name: 'Checkbox',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant — `checkbox--{variant}`. @default 'primary' */
    variant: { type: String as PropType<CheckboxVariants['variant']>, default: 'primary' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => checkboxVariants({ variant: props.variant }))
    provide(CHECKBOX_CONTEXT, { slots: styles })

    return () => (
      <RekaCheckboxRoot
        {...attrs}
        data-slot="checkbox"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaCheckboxRoot>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * CheckboxControl — the square visual control box (HeroUI `checkbox__control`).
 * -----------------------------------------------------------------------------------------------*/
export const CheckboxControl = defineComponent({
  name: 'CheckboxControl',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CHECKBOX_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="checkbox-control"
        class={cn((ctx?.slots.value ?? checkboxVariants()).control(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * CheckboxIndicator — the checkmark/icon layer inside the control (HeroUI `checkbox__indicator`).
 * Renders the default SVG checkmark when no children provided.
 * Reads checked state from reka-ui's `injectCheckboxRootContext` — `ctx.state` is
 * `Ref<boolean | 'indeterminate'>`.
 * -----------------------------------------------------------------------------------------------*/
export const CheckboxIndicator = defineComponent({
  name: 'CheckboxIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CHECKBOX_CONTEXT, null)

    // reka-ui CheckboxRootContext: { state: Ref<boolean | 'indeterminate'>, disabled: Ref<boolean> }
    let rekaCtx: ReturnType<typeof injectCheckboxRootContext> | null = null
    try {
      rekaCtx = injectCheckboxRootContext()
    } catch {
      // rendered outside a CheckboxRoot — gracefully degrade
    }

    return () => {
      const stateVal = rekaCtx?.state.value ?? false
      const isSelected = stateVal === true
      const isIndeterminate = stateVal === 'indeterminate'

      const defaultContent = isIndeterminate
        ? (
          <svg
            aria-hidden="true"
            data-slot="checkbox-default-indicator--indeterminate"
            fill="none"
            role="presentation"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="3"
            viewBox="0 0 24 24"
          >
            <line x1="21" x2="3" y1="12" y2="12" />
          </svg>
        )
        : (
          <svg
            aria-hidden="true"
            data-slot="checkbox-default-indicator--checkmark"
            fill="none"
            role="presentation"
            stroke="currentColor"
            stroke-dasharray="22"
            stroke-dashoffset={isSelected ? '44' : '66'}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 17 18"
          >
            <polyline points="1 9 7 14 15 4" />
          </svg>
        )

      return (
        <span
          aria-hidden="true"
          {...attrs}
          data-slot="checkbox-indicator"
          class={cn((ctx?.slots.value ?? checkboxVariants()).indicator(), props.class)}
        >
          {slots.default ? slots.default() : defaultContent}
        </span>
      )
    }
  }
})

/* -------------------------------------------------------------------------------------------------
 * CheckboxContent — the label/description area beside the control (HeroUI `checkbox__content`).
 * -----------------------------------------------------------------------------------------------*/
export const CheckboxContent = defineComponent({
  name: 'CheckboxContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CHECKBOX_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="checkbox-content"
        class={cn((ctx?.slots.value ?? checkboxVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default CheckboxRoot
