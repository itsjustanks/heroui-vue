import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { injectCheckboxRootContext } from 'reka-ui'
import { checkboxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CHECKBOX_CONTEXT } from '../checkbox/checkbox-context'

/**
 * CheckboxGroupItemIndicator — the checkmark/icon layer inside a `CheckboxGroupItemControl`.
 * Faithful port of HeroUI v3 `Checkbox.Indicator`.
 *
 * Reads checked state from reka-ui's `injectCheckboxRootContext`. The context exposes
 * `state: Ref<boolean | 'indeterminate'>` — NOT the deprecated `isChecked`/`isIndeterminate`.
 */
export const CheckboxGroupItemIndicator = defineComponent({
  name: 'CheckboxGroupItemIndicator',
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

export default CheckboxGroupItemIndicator
