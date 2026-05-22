import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import {
  badgeDotColors,
  badgeVariants,
  type TBadgeColor,
  type TBadgeVariants
} from './badge-variants'

/**
 * Badge — HeroUI-Vue chip/badge primitive.
 *
 * Faithful port of `shadcn/badge`: same props (`variant`, `size`, `class`,
 * `label`, `color`, `isDot`, `isStatus`) and the `icon` + default slots.
 * Restyled to HeroUI v3 chip taste — `rounded-full` pill, `text-xs`, soft
 * semantic-color backgrounds. `color` takes precedence over `variant`.
 */
export const Badge = defineComponent({
  name: 'Badge',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<TBadgeVariants['variant']>, default: undefined },
    size: { type: String as PropType<TBadgeVariants['size']>, default: undefined },
    /** Text label rendered inside the badge */
    label: { type: String, default: undefined },
    /** Shorthand color name mapped to a color-based variant */
    color: { type: String as PropType<TBadgeColor>, default: undefined },
    /** Show as small dot indicator */
    isDot: { type: Boolean, default: false },
    /** Show as vertical status bar */
    isStatus: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    /** When `color` is provided it takes precedence over `variant` */
    const resolvedVariant = computed(
      (): TBadgeVariants['variant'] => props.color ?? props.variant ?? 'default'
    )

    const dotColorClasses = computed(
      () => badgeDotColors[resolvedVariant.value as string] ?? 'bg-neutral-800'
    )

    return () => (
      <div
        {...attrs}
        class={cn(badgeVariants({ variant: resolvedVariant.value, size: props.size }), props.class)}
      >
        {props.isDot && (
          <span class={cn('inline-block size-1.5 rounded-full', dotColorClasses.value)} />
        )}
        {props.isStatus && (
          <span class={cn('h-3 w-1 rounded-full', dotColorClasses.value)} />
        )}
        {!props.isDot && !props.isStatus && slots.icon?.()}
        {slots.default ? slots.default() : props.label}
      </div>
    )
  }
})

export default Badge
