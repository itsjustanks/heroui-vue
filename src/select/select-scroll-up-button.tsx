import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectScrollUpButton as RekaSelectScrollUpButton } from 'reka-ui'
import { ChevronUp as IconChevronUp } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * SelectScrollUpButton — the affordance shown when the listbox can scroll up.
 * reka-ui handles visibility; this only carries layout + the chevron fallback.
 */
export const SelectScrollUpButton = defineComponent({
  name: 'SelectScrollUpButton',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaSelectScrollUpButton
        {...attrs}
        class={cn('flex cursor-default items-center justify-center py-1 text-muted-foreground', props.class)}
      >
        {slots.default ? slots.default() : <IconChevronUp class="size-4" />}
      </RekaSelectScrollUpButton>
    )
  }
})

export default SelectScrollUpButton
