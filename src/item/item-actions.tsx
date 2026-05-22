import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ItemActions — the trailing slot for buttons, toggles, and other controls. */
export const ItemActions = defineComponent({
  name: 'ItemActions',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="item-actions"
        class={cn('flex items-center gap-2', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ItemActions
