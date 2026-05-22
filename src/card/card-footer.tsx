import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * CardFooter — the bottom region for footer actions. HeroUI v3 taste: `p-6`
 * padding, `pt-0` so it tucks beneath the content region.
 */
export const CardFooter = defineComponent({
  name: 'CardFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('card__footer', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default CardFooter
