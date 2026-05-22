import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { cardVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CARD_CONTEXT } from './card-context'

/** Card.Title — the card heading (HeroUI `card__title`), rendered as an `<h3>`. */
export const CardTitle = defineComponent({
  name: 'CardTitle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CARD_CONTEXT, null)
    return () => (
      <h3
        {...attrs}
        data-slot="card-title"
        class={cn((ctx?.slots.value ?? cardVariants()).title(), props.class)}
      >
        {slots.default?.()}
      </h3>
    )
  }
})

export default CardTitle
