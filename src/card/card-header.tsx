import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { cardVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CARD_CONTEXT } from './card-context'

/** Card.Header — the top region holding the title and description (HeroUI `card__header`). */
export const CardHeader = defineComponent({
  name: 'CardHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CARD_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="card-header"
        class={cn((ctx?.slots.value ?? cardVariants()).header(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default CardHeader
