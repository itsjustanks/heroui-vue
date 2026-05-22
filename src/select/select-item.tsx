import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectItem as RekaSelectItem, SelectItemIndicator, SelectItemText } from 'reka-ui'
import { Check as IconCheck } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * SelectItem — HeroUI `list-box-item`.
 *
 * A selectable option. HeroUI's `select__popover` styles list items with
 * `px-2.5` and a `rounded-lg` highlight; the selected-state checkmark sits in
 * the leading gutter. Interactive states use reka-ui's `data-[highlighted]` /
 * `data-[disabled]` / `data-[state]` attributes.
 */
export const SelectItem = defineComponent({
  name: 'SelectItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaSelectItem
        {...attrs}
        class={cn(
          'relative flex w-full cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.class
        )}
      >
        <span class="absolute left-2 flex size-3.5 items-center justify-center">
          <SelectItemIndicator>
            <IconCheck class="size-4" />
          </SelectItemIndicator>
        </span>
        <SelectItemText>{slots.default?.()}</SelectItemText>
      </RekaSelectItem>
    )
  }
})

export default SelectItem
