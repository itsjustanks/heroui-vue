import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectItem as SelectItemBase, SelectItemIndicator, SelectItemText } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaSelectItem: any = SelectItemBase
import { IconCheck } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * SelectItem — HeroUI `list-box-item`.
 *
 * Emits HeroUI v3 BEM class names from `list-box-item.css`. Interactive states
 * (hover, focus-visible, pressed, disabled, selected) are handled by CSS via
 * native pseudo-classes and reka-ui data-attributes.
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
        {...(attrs as Record<string, any>)}
        data-slot="list-box-item"
        class={cn('list-box-item list-box-item--default', props.class)}
      >
        <SelectItemIndicator class="list-box-item__indicator" data-slot="list-box-item-indicator">
          <IconCheck class="size-4" data-slot="list-box-item-indicator--checkmark" />
        </SelectItemIndicator>
        <SelectItemText>{slots.default?.()}</SelectItemText>
      </RekaSelectItem>
    )
  }
})

export default SelectItem
