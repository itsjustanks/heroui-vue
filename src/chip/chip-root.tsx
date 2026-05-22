import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { ChipLabel } from './chip-label'
import { chipVariants, type TChipVariants } from './chip-variants'

/**
 * ChipRoot — HeroUI-Vue Chip primitive. A compact, pill-shaped tag.
 *
 * Faithful port of HeroUI v3 `ChipRoot`. Renders a `<span>` by default;
 * `as` / `asChild` polymorphism via reka-ui `Primitive`. A plain string/number
 * default slot is auto-wrapped in `ChipLabel`; pass elements for richer content.
 */
export const ChipRoot = defineComponent({
  name: 'ChipRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Foreground/background color family. */
    color: { type: String as PropType<TChipVariants['color']>, default: undefined },
    /** Visual emphasis. */
    variant: { type: String as PropType<TChipVariants['variant']>, default: undefined },
    /** Density. */
    size: { type: String as PropType<TChipVariants['size']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'span' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const renderChildren = () => {
      const children = slots.default?.()
      const only = children?.length === 1 ? children[0] : undefined
      if (only && (typeof only.children === 'string' || typeof only.children === 'number')) {
        return <ChipLabel>{only.children}</ChipLabel>
      }
      return children
    }

    const classes = computed(() => cn(
      chipVariants({ color: props.color, variant: props.variant, size: props.size }),
      props.class
    ))

    return () => (
      <Primitive
        {...attrs}
        as={props.as}
        asChild={props.asChild}
        data-slot="chip"
        class={classes.value}
      >
        {renderChildren()}
      </Primitive>
    )
  }
})

export default ChipRoot
