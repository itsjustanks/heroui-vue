import { computed, defineComponent, provide, ref, type HTMLAttributes, type PropType } from 'vue'
import { searchFieldVariants, type SearchFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SEARCH_FIELD_CONTEXT } from './search-field-context'

/**
 * SearchFieldRoot — the search-field container. Faithful Vue port of HeroUI v3
 * `SearchField` (`data-slot="search-field"`).
 *
 * HeroUI builds on React-Aria's `SearchField`; reka-ui has no equivalent
 * primitive, so the small amount of state (the query string + clear-on-Escape)
 * is owned here and shared with the compound parts via context. `data-empty`
 * drives HeroUI's CSS that hides the clear button when there is nothing to
 * clear.
 *
 * ```vue
 * <SearchField v-model="query">
 *   <SearchField.Group>
 *     <SearchField.SearchIcon />
 *     <SearchField.Input placeholder="Search…" />
 *     <SearchField.ClearButton />
 *   </SearchField.Group>
 * </SearchField>
 * ```
 */
export const SearchFieldRoot = defineComponent({
  name: 'SearchField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Controlled query string (`v-model`). */
    modelValue: { type: String as PropType<string | undefined>, default: undefined },
    /** Initial query string when uncontrolled. */
    defaultValue: { type: String, default: '' },
    /** HeroUI `fullWidth` — stretch the field to fill its container. @default false */
    fullWidth: { type: Boolean as PropType<SearchFieldVariants['fullWidth']>, default: false },
    /** Visual variant — `search-field--{variant}`. @default 'primary' */
    variant: { type: String as PropType<SearchFieldVariants['variant']>, default: 'primary' },
    /** When `true`, marks the field disabled. */
    disabled: { type: Boolean, default: false }
  },
  emits: {
    'update:modelValue': (_value: string) => true
  },
  setup (props, { attrs, emit, slots }) {
    const internal = ref(props.defaultValue)
    const value = computed<string>({
      get: () => props.modelValue ?? internal.value,
      set: (v) => {
        internal.value = v
        emit('update:modelValue', v)
      }
    })
    const styles = computed(() => searchFieldVariants({ fullWidth: props.fullWidth, variant: props.variant }))
    const clear = () => { value.value = '' }

    provide(SEARCH_FIELD_CONTEXT, { slots: styles, value, clear })

    return () => (
      <div
        {...attrs}
        data-slot="search-field"
        data-empty={value.value ? undefined : 'true'}
        data-disabled={props.disabled ? 'true' : undefined}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default SearchFieldRoot
