import { computed, defineComponent, provide, inject, type HTMLAttributes, type PropType } from 'vue'
import { ListboxItem, ComboboxItem, injectListboxItemContext, type AcceptableValue } from 'reka-ui'
import { listboxItemVariants, type ListBoxItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { LIST_BOX_ITEM_CONTEXT } from './list-box-item-context'
import { COMBO_BOX_CONTEXT } from '@/combo-box/combo-box-context'

/**
 * ListBoxItemRoot — a selectable option within a ListBox. Faithful Vue port of
 * HeroUI v3 `ListBox.Item`.
 *
 * Computes `listboxItemVariants` slot map and provides it (plus `isSelected`
 * state from reka-ui context) to `ListBoxItemIndicator`. All reka-ui
 * `ListboxItem` props (`value`, `disabled`, `textValue`, `onSelect`, …) pass
 * through via `{...attrs}`.
 *
 * When nested inside a `ComboBox` (detected via `COMBO_BOX_CONTEXT`), renders
 * reka-ui's `ComboboxItem` so the combobox selection/filtering wiring applies —
 * matching HeroUI React, where `ComboBox` composes with `ListBox.Item`.
 */
export const ListBoxItemRoot = defineComponent({
  name: 'ListBoxItem',
  inheritAttrs: false,
  props: {
    class:   { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The unique key for this option (HeroUI's `id`). */
    id:      { type: [String, Number, Object, null] as PropType<AcceptableValue>, default: undefined },
    /** The unique value for this option — reka-ui `ListboxItem` alias of `id`. */
    value:   { type: [String, Number, Object, null] as PropType<AcceptableValue>, default: undefined },
    /** Visual variant. @default 'default' */
    variant: { type: String as PropType<ListBoxItemVariants['variant']>, default: 'default' },
  },
  setup (props, { attrs, slots }) {
    const itemSlots = computed(() => listboxItemVariants({ variant: props.variant }))

    // reka-ui's ListboxItem injects `isSelected` onto descendant components.
    // Because reka provides this context from the ListboxItem component itself,
    // we forward a reactive ref that ListBoxItemIndicator can read.
    const rekaCtx = injectListboxItemContext(null)
    const isSelected = computed(() => rekaCtx?.isSelected.value ?? false)

    provide(LIST_BOX_ITEM_CONTEXT, { slots: itemSlots, isSelected })

    const comboBoxCtx = inject(COMBO_BOX_CONTEXT, null)

    return () => {
      const value = (props.value ?? props.id) as AcceptableValue

      // Inside a ComboBox, render reka-ui's ComboboxItem so the combobox's
      // filtering and single-selection behaviour is wired up.
      if (comboBoxCtx) {
        return (
          <ComboboxItem
            {...attrs}
            value={value}
            data-slot="list-box-item"
            class={cn(itemSlots.value.item(), props.class)}
          >
            {slots.default?.()}
          </ComboboxItem>
        )
      }

      return (
        <ListboxItem
          {...attrs}
          value={value}
          data-slot="list-box-item"
          class={cn(itemSlots.value.item(), props.class)}
        >
          {slots.default?.()}
        </ListboxItem>
      )
    }
  },
})

export default ListBoxItemRoot
