import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { cardVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CARD_CONTEXT } from './card-context'

/** Card.Footer — the bottom action region (HeroUI `card__footer`). */
export const CardFooter = defineComponent({
  name: 'CardFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CARD_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="card-footer"
        class={cn((ctx?.slots.value ?? cardVariants()).footer(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default CardFooter
