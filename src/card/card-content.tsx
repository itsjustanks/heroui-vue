import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { cardVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CARD_CONTEXT } from './card-context'

/** Card.Content — the card's main body region (HeroUI `card__content`). */
export const CardContent = defineComponent({
  name: 'CardContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CARD_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="card-content"
        class={cn((ctx?.slots.value ?? cardVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default CardContent
