import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** CardDescription — muted supporting text beneath the title. */
export const CardDescription = defineComponent({
  name: 'CardDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <p {...attrs} class={cn('card__description', props.class)}>
        {slots.default?.()}
      </p>
    )
  }
})

export default CardDescription
