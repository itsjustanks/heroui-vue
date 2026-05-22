import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * CardContent — the card's body region. HeroUI v3 taste: `p-6` padding,
 * `pt-0` so it tucks beneath the header without doubling vertical space.
 */
export const CardContent = defineComponent({
  name: 'CardContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('card__content', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default CardContent
