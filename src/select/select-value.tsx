import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { SelectValue as RekaSelectValue } from 'reka-ui'
import { selectVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SELECT_CONTEXT } from './select-context'

/**
 * SelectValue — renders the selected item's text inside the trigger (HeroUI `select__value`).
 *
 * Placeholder state is styled via `select__value[data-placeholder]` in `select.css`.
 */
export const SelectValue = defineComponent({
  name: 'SelectValue',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    placeholder: { type: String, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SELECT_CONTEXT, null)
    return () => (
      <RekaSelectValue
        {...attrs}
        placeholder={props.placeholder ?? ctx?.placeholder.value}
        data-slot="select-value"
        class={cn((ctx?.slots.value ?? selectVariants()).value(), props.class)}
      >
        {slots.default?.()}
      </RekaSelectValue>
    )
  }
})

export default SelectValue
