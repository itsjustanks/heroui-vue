import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { cardVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CARD_CONTEXT } from './card-context'

/** Card.Description — supporting text under the title (HeroUI `card__description`), a `<p>`. */
export const CardDescription = defineComponent({
  name: 'CardDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(CARD_CONTEXT, null)
    return () => (
      <p
        {...attrs}
        data-slot="card-description"
        class={cn((ctx?.slots.value ?? cardVariants()).description(), props.class)}
      >
        {slots.default?.()}
      </p>
    )
  }
})

export default CardDescription
