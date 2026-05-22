import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * KbdGroup — clusters several `Kbd` keys into one inline shortcut hint
 * (e.g. ⌘ + K). Faithful port of `shadcn/kbd`'s `KbdGroup`.
 */
export const KbdGroup = defineComponent({
  name: 'KbdGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <kbd
        {...attrs}
        data-slot="kbd-group"
        class={cn(props.class)}
      >
        {slots.default?.()}
      </kbd>
    )
  }
})

export default KbdGroup
