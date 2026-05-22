import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * Card — the surface container. HeroUI v3 `card.css`: a soft, rounded surface
 * with generous padding and a subtle built-in shadow. Tokens adapted to the repo
 * (`bg-card`, `text-card-foreground`, `border-border`); radius lifted to
 * `rounded-2xl` per HeroUI taste, single `shadow-sm` (no stacked shadows).
 */
export const Card = defineComponent({
  name: 'Card',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        class={cn(
          'rounded-2xl border border-border bg-card text-card-foreground shadow-sm',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Card
