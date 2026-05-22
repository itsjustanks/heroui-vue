import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** CardTitle — the card's primary heading. */
export const CardTitle = defineComponent({
  name: 'CardTitle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <h3 {...attrs} class={cn('text-2xl font-semibold leading-none tracking-tight', props.class)}>
        {slots.default?.()}
      </h3>
    )
  }
})

export default CardTitle
