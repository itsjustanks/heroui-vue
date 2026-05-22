import { defineComponent, inject, type HTMLAttributes, type InputHTMLAttributes, type PropType } from 'vue'
import { searchFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SEARCH_FIELD_CONTEXT } from './search-field-context'

/**
 * SearchFieldInput — the `<input type="search">`. Faithful Vue port of HeroUI
 * v3 `SearchField.Input` (`data-slot="search-field-input"`).
 *
 * Reads/writes the query string from `SearchFieldRoot`'s context and clears it
 * on `Escape`, matching React-Aria's SearchField behaviour.
 */
export const SearchFieldInput = defineComponent({
  name: 'SearchFieldInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Placeholder text. */
    placeholder: { type: String as PropType<InputHTMLAttributes['placeholder']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(SEARCH_FIELD_CONTEXT, null)

    return () => (
      <input
        {...attrs}
        type="search"
        data-slot="search-field-input"
        placeholder={props.placeholder}
        value={ctx?.value.value ?? ''}
        class={cn((ctx?.slots.value ?? searchFieldVariants()).input(), props.class)}
        onInput={(e: Event) => {
          if (ctx) ctx.value.value = (e.target as HTMLInputElement).value
        }}
        onKeydown={(e: KeyboardEvent) => {
          if (e.key === 'Escape' && ctx && ctx.value.value) {
            e.preventDefault()
            ctx.clear()
          }
        }}
      />
    )
  }
})

export default SearchFieldInput
