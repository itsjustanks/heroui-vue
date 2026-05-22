import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { injectSelectRootContext } from 'reka-ui'
import { selectVariants } from '@heroui/styles'
import { IconChevronDown } from '@/icons'
import { cn } from '@/lib/utils'
import { SELECT_CONTEXT } from './select-context'

/**
 * SelectIndicator — the chevron/icon that reflects the open/closed state of the Select.
 *
 * Mirrors HeroUI v3 `Select.Indicator` (`select__indicator`). Renders `data-open`
 * when the listbox is open. With no children, falls back to `IconChevronDown`.
 * Intended to be placed inside `Select.Trigger`.
 */
export const SelectIndicator = defineComponent({
  name: 'SelectIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SELECT_CONTEXT, null)
    const rootCtx = injectSelectRootContext()

    return () => {
      const indicatorClass = cn((ctx?.slots.value ?? selectVariants()).indicator(), props.class)
      const isOpen = rootCtx.open.value

      if (slots.default) {
        return (
          <span
            {...attrs}
            data-slot="select-indicator"
            data-open={isOpen ? '' : undefined}
            class={indicatorClass}
          >
            {slots.default()}
          </span>
        )
      }

      return (
        <IconChevronDown
          {...attrs}
          data-slot="select-default-indicator"
          data-open={isOpen ? '' : undefined}
          class={indicatorClass}
        />
      )
    }
  }
})

export default SelectIndicator
