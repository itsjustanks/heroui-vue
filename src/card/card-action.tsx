import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** CardAction — trailing actions slot, pushed to the end of the header row. */
export const CardAction = defineComponent({
  name: 'CardAction',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('ml-auto flex items-center gap-2', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default CardAction
