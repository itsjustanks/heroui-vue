import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { searchFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CloseButton } from '@/close-button'
import { SEARCH_FIELD_CONTEXT } from './search-field-context'

/**
 * SearchFieldClearButton — empties the field. Faithful Vue port of HeroUI v3
 * `SearchField.ClearButton` (`data-slot="search-field-clear-button"`).
 *
 * Built on `CloseButton`, carries `slot="clear"` (HeroUI's CSS keys the input's
 * right radius off it) and is hidden via `[data-empty="true"]` on the root when
 * there is nothing to clear.
 */
export const SearchFieldClearButton = defineComponent({
  name: 'SearchFieldClearButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(SEARCH_FIELD_CONTEXT, null)

    return () => {
      const closeButtonAttrs = {
        ...attrs,
        slot: 'clear',
        'aria-label': 'Clear search',
        'data-slot': 'search-field-clear-button',
        class: cn((ctx?.slots.value ?? searchFieldVariants()).clearButton(), props.class),
        onClick: () => ctx?.clear()
      } as Record<string, unknown>

      return <CloseButton {...closeButtonAttrs} />
    }
  }
})

export default SearchFieldClearButton
