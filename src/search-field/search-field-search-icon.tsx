import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { searchFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { IconSearch } from '@/icons'
import { SEARCH_FIELD_CONTEXT } from './search-field-context'

/**
 * SearchFieldSearchIcon — the leading magnifier. Faithful Vue port of HeroUI v3
 * `SearchField.SearchIcon` (`data-slot="search-field-search-icon"`).
 *
 * Defaults to `IconSearch`; pass a child via the default slot to substitute a
 * custom icon (it still receives the `search-field__search-icon` class).
 */
export const SearchFieldSearchIcon = defineComponent({
  name: 'SearchFieldSearchIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SEARCH_FIELD_CONTEXT, null)

    return () => {
      const iconClass = cn((ctx?.slots.value ?? searchFieldVariants()).searchIcon(), props.class)

      if (slots.default) {
        return (
          <span
            {...attrs}
            aria-hidden="true"
            data-slot="search-field-search-icon"
            class={iconClass}
          >
            {slots.default()}
          </span>
        )
      }

      return (
        <IconSearch
          {...(attrs as Record<string, unknown>)}
          data-slot="search-field-search-icon"
          class={iconClass}
        />
      )
    }
  }
})

export default SearchFieldSearchIcon
