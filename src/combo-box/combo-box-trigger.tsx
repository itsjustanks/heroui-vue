import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxTrigger } from 'reka-ui'
import { ChevronDown as IconChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * ComboBoxTrigger — the button that toggles the ComboBox popover, pinned to the
 * right edge of the input group. Faithful port of HeroUI v3 `ComboBox.Trigger`
 * (`combo-box.css` `.combo-box__trigger`).
 *
 * Built over reka-ui `ComboboxTrigger`. With no children it renders the default
 * chevron, which rotates `180deg` while the popover is open (reka-ui
 * `data-[state=open]`). With children it renders the custom trigger content.
 */
export const ComboBoxTrigger = defineComponent({
  name: 'ComboBoxTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ComboboxTrigger
        {...attrs}
        class={cn('combo-box__trigger', props.class)}
      >
        {slots.default
          ? slots.default()
          : (
            <IconChevronDown data-slot="combo-box-trigger-default-icon" class="size-4" />
          )}
      </ComboboxTrigger>
    )
  }
})

export default ComboBoxTrigger
