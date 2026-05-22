import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { badgeVariants, type TBadgeColor, type TBadgePlacement, type TBadgeSize, type TBadgeVariantName } from './badge-variants'

/**
 * Badge — HeroUI-Vue badge primitive.
 *
 * HeroUI BEM: `badge` base + `badge--{color}` + `badge--{variant}` + `badge--{size}`
 * + optional `badge--{placement}` modifier.
 * The `badge__label` wrapper is rendered around the default slot text.
 *
 * When `placement` is set the badge is positioned absolutely; wrap the anchor
 * element in `<span class="badge-anchor">` to create the positioning context.
 */
export const Badge = defineComponent({
  name: 'Badge',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    color: { type: String as PropType<TBadgeColor>, default: 'default' },
    variant: { type: String as PropType<TBadgeVariantName>, default: 'primary' },
    size: { type: String as PropType<TBadgeSize>, default: 'md' },
    placement: { type: String as PropType<TBadgePlacement>, default: undefined },
    /** Show as a small dot indicator (no label rendered) */
    isDot: { type: Boolean, default: false },
    /** Show as a vertical status bar */
    isStatus: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        class={cn(
          badgeVariants({ color: props.color, variant: props.variant, size: props.size, placement: props.placement }),
          props.class
        )}
      >
        {!props.isDot && !props.isStatus && (
          <span class="badge__label">
            {slots.default?.()}
          </span>
        )}
      </span>
    )
  }
})

export default Badge
