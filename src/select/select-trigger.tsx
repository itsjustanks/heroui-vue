import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { SelectIcon, SelectTrigger as RekaSelectTrigger } from 'reka-ui'
import { selectVariants } from '@heroui/styles'
import { IconChevronDown } from '@/icons'
import { cn } from '@/lib/utils'
import { SELECT_CONTEXT } from './select-context'

/**
 * SelectTrigger — the button that opens the Select popover (HeroUI `select__trigger`).
 *
 * Renders a default `SelectIndicator` (chevron) when no children are provided for
 * the indicator slot. Part of the HeroUI v3 `Select` compound component.
 */
export const SelectTrigger = defineComponent({
  name: 'SelectTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SELECT_CONTEXT, null)
    return () => (
      <RekaSelectTrigger
        {...attrs}
        data-slot="select-trigger"
        class={cn((ctx?.slots.value ?? selectVariants()).trigger(), props.class)}
      >
        {slots.default?.()}
        <SelectIcon asChild>
          <IconChevronDown
            class={cn((ctx?.slots.value ?? selectVariants()).indicator())}
            data-slot="select-default-indicator"
          />
        </SelectIcon>
      </RekaSelectTrigger>
    )
  }
})

export default SelectTrigger
