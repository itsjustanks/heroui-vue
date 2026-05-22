import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectScrollDownButton as RekaSelectScrollDownButton } from 'reka-ui'
import { IconChevronDown } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * SelectScrollDownButton — the affordance shown when the listbox can scroll down.
 * reka-ui handles visibility; this only carries layout + the chevron fallback.
 */
export const SelectScrollDownButton = defineComponent({
  name: 'SelectScrollDownButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaSelectScrollDownButton
        {...attrs}
        class={cn(props.class)}
      >
        {slots.default ? slots.default() : <IconChevronDown class="size-4" />}
      </RekaSelectScrollDownButton>
    )
  }
})

export default SelectScrollDownButton
