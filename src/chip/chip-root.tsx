import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { chipVariants, type ChipVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { CHIP_CONTEXT } from './chip-context'
import { ChipLabel } from './chip-label'

/**
 * ChipRoot — the pill-shaped tag container. Faithful Vue port of HeroUI v3 `ChipRoot`.
 *
 * The root computes HeroUI's `chipVariants` slot map and provides it to
 * compound parts (`Chip.Label`), so every part is styled from `@heroui/styles`
 * — never a hand-written class string.
 *
 * A plain string/number default slot is auto-wrapped in `ChipLabel` to match
 * the React source behaviour.
 */
export const ChipRoot = defineComponent({
  name: 'ChipRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Foreground/background color family. @default 'default' */
    color: { type: String as PropType<ChipVariants['color']>, default: 'default' },
    /** Density. */
    size: { type: String as PropType<ChipVariants['size']>, default: undefined },
    /** Visual emphasis. @default 'secondary' */
    variant: { type: String as PropType<ChipVariants['variant']>, default: 'secondary' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => chipVariants({ color: props.color, size: props.size, variant: props.variant }))
    provide(CHIP_CONTEXT, { slots: styles })

    const renderChildren = () => {
      const children = slots.default?.()
      const only = children?.length === 1 ? children[0] : undefined
      if (only && (typeof only.children === 'string' || typeof only.children === 'number')) {
        return <ChipLabel>{only.children}</ChipLabel>
      }
      return children
    }

    return () => (
      <span {...attrs} data-slot="chip" class={cn(styles.value.base(), props.class)}>
        {renderChildren()}
      </span>
    )
  }
})

export default ChipRoot
