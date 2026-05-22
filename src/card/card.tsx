import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { cardVariants, type CardVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CARD_CONTEXT } from './card-context'

/**
 * Card — the surface container. Faithful Vue port of HeroUI v3 `Card`.
 *
 * The root computes HeroUI's `cardVariants` slot map and provides it to the
 * compound parts (`Card.Header`, `Card.Title`, …), so every part is styled
 * straight from `@heroui/styles` — never a hand-written class string.
 */
export const CardRoot = defineComponent({
  name: 'Card',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant — `card--{variant}`. @default 'default' */
    variant: { type: String as PropType<CardVariants['variant']>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => cardVariants({ variant: props.variant }))
    provide(CARD_CONTEXT, { slots: styles })

    return () => (
      <div {...attrs} data-slot="card" class={cn(styles.value.base(), props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default CardRoot
