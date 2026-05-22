import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { searchFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SEARCH_FIELD_CONTEXT } from './search-field-context'

/**
 * SearchFieldGroup — the bordered input row. Faithful Vue port of HeroUI v3
 * `SearchField.Group` (`data-slot="search-field-group"`). Holds the search
 * icon, the input, and the clear button.
 */
export const SearchFieldGroup = defineComponent({
  name: 'SearchFieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SEARCH_FIELD_CONTEXT, null)

    return () => (
      <div
        {...attrs}
        role="group"
        data-slot="search-field-group"
        class={cn((ctx?.slots.value ?? searchFieldVariants()).group(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default SearchFieldGroup
