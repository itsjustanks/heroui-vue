import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { injectListboxItemContext } from 'reka-ui'
import { listboxItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { LIST_BOX_ITEM_CONTEXT } from './list-box-item-context'

/**
 * ListBoxItemIndicator — the selected-state checkmark for a ListBoxItem.
 * Faithful Vue port of HeroUI v3 `ListBox.ItemIndicator`.
 *
 * Always rendered in the DOM; visibility is CSS-driven via `data-visible`.
 * The default content is the same animated SVG checkmark as HeroUI React
 * (strokeDashoffset animates 66 → 44 on selection). Override via default slot.
 */
export const ListBoxItemIndicator = defineComponent({
  name: 'ListBoxItemIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(LIST_BOX_ITEM_CONTEXT, null)
    // Also consume reka-ui context directly in case used outside ListBoxItemRoot.
    const rekaCtx = injectListboxItemContext(null)

    return () => {
      // Prefer the reka-ui ListboxItem context injected directly here — the
      // indicator IS a descendant of reka's ListboxItem, so this is the live
      // value. `ctx.isSelected` (from ListBoxItemRoot) is always `false`: that
      // parent sits ABOVE reka's ListboxItem and cannot inject its context —
      // and `??` would not fall through a literal `false`.
      const isSelected = rekaCtx?.isSelected.value ?? ctx?.isSelected.value ?? false
      const indicatorClass = (ctx?.slots.value ?? listboxItemVariants()).indicator()

      const content = slots.default
        ? slots.default()
        : (
          <svg
            aria-hidden="true"
            data-slot="list-box-item-indicator--checkmark"
            fill="none"
            role="presentation"
            stroke="currentColor"
            stroke-dasharray={22}
            stroke-dashoffset={isSelected ? 44 : 66}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={2}
            viewBox="0 0 17 18"
          >
            <polyline points="1 9 7 14 15 4" />
          </svg>
        )

      return (
        <span
          {...attrs}
          aria-hidden="true"
          data-slot="list-box-item-indicator"
          data-visible={isSelected || undefined}
          class={cn(indicatorClass, props.class)}
        >
          {content}
        </span>
      )
    }
  },
})

export default ListBoxItemIndicator
