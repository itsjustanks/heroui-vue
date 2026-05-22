import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { badgeVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { BADGE_CONTEXT } from './badge-context'

/**
 * Badge.Anchor — the positioning wrapper that creates a relative context for an
 * absolutely-placed Badge (HeroUI `badge-anchor`).
 *
 * Wrap the anchor element in `<Badge.Anchor>` and place `<Badge>` alongside it.
 */
export const BadgeAnchor = defineComponent({
  name: 'BadgeAnchor',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(BADGE_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="badge-anchor"
        class={cn((ctx?.slots.value ?? badgeVariants()).anchor(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default BadgeAnchor
