import { Text, computed, defineComponent, provide, type HTMLAttributes, type PropType, type VNode } from 'vue'
import { badgeVariants, type BadgeVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { BADGE_CONTEXT } from './badge-context'
import { BadgeLabel } from './badge-label'

/**
 * Badge — the positioned indicator. Faithful Vue port of HeroUI v3 `Badge`.
 *
 * The root computes HeroUI's `badgeVariants` slot map and provides it to
 * compound parts (`Badge.Label`, `Badge.Anchor`), so every part is styled
 * from `@heroui/styles` — never a hand-written class string.
 */
export const BadgeRoot = defineComponent({
  name: 'Badge',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Badge color. @default 'default' */
    color: { type: String as PropType<BadgeVariants['color']>, default: 'default' },
    /** Badge placement relative to anchor. @default 'top-right' */
    placement: { type: String as PropType<BadgeVariants['placement']>, default: 'top-right' },
    /** Badge size. @default 'md' */
    size: { type: String as PropType<BadgeVariants['size']>, default: 'md' },
    /** Badge variant. @default 'primary' */
    variant: { type: String as PropType<BadgeVariants['variant']>, default: 'primary' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => badgeVariants({
      color: props.color,
      placement: props.placement,
      size: props.size,
      variant: props.variant
    }))
    provide(BADGE_CONTEXT, { slots: styles })

    return () => {
      const children = slots.default?.()
      const shouldWrapLabel = children?.length === 1 && (children[0] as VNode).type === Text

      return (
        <span {...attrs} data-slot="badge" class={cn(styles.value.base(), props.class)}>
          {shouldWrapLabel ? <BadgeLabel>{children}</BadgeLabel> : children}
        </span>
      )
    }
  }
})

export default BadgeRoot
