import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectIcon, SelectTrigger as RekaSelectTrigger } from 'reka-ui'
import { ChevronDown as IconChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * SelectTrigger — HeroUI `select__trigger`.
 *
 * The clickable field that opens the listbox. Styling is adapted from HeroUI's
 * `select.css` (`select__trigger` + `select__indicator`): a `rounded-lg` field
 * surface with a placeholder-aware value and a trailing chevron. Tokens are
 * mapped to the repo's shadcn tokens; interactive states use reka-ui's
 * `data-[placeholder]` / `data-[state]` attributes.
 */
export const SelectTrigger = defineComponent({
  name: 'SelectTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaSelectTrigger
        {...attrs}
        class={cn(
          // HeroUI select__trigger: min-h-9, rounded-field, bg-field, border, px-3 py-2, text-sm.
          'relative isolate flex min-h-9 w-full select-none items-center justify-between gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors',
          'data-[placeholder]:text-muted-foreground',
          'hover:bg-accent/40',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          '[&>span]:truncate [&>span]:text-start',
          props.class
        )}
      >
        {slots.default?.()}
        <SelectIcon as-child>
          <IconChevronDown class="size-4 shrink-0 text-muted-foreground transition-transform duration-150" />
        </SelectIcon>
      </RekaSelectTrigger>
    )
  }
})

export default SelectTrigger
