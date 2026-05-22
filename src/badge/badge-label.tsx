import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { badgeVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { BADGE_CONTEXT } from './badge-context'

/** Badge.Label — the text span inside a Badge (HeroUI `badge__label`). */
export const BadgeLabel = defineComponent({
  name: 'BadgeLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(BADGE_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="badge-label"
        class={cn((ctx?.slots.value ?? badgeVariants()).label(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default BadgeLabel
