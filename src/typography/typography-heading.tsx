import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TypographyRoot } from './typography-root'
import type { TTypographyType, TTypographyVariants } from './typography-variants'

/**
 * Heading — HeroUI v3 typography preset. Renders a heading (`h1`–`h6`) sized by
 * `level`; a thin wrapper over `TypographyRoot` with `type` derived from `level`.
 */
export const Heading = defineComponent({
  name: 'TypographyHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Heading level — drives both the host tag and the size step. */
    level: { type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>, default: 1 },
    align: { type: String as PropType<TTypographyVariants['align']>, default: undefined },
    color: { type: String as PropType<TTypographyVariants['color']>, default: undefined },
    weight: { type: String as PropType<TTypographyVariants['weight']>, default: undefined },
    truncate: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const type = computed((): TTypographyType => `h${props.level}` as TTypographyType)

    return () => (
      <TypographyRoot
        {...attrs}
        type={type.value}
        align={props.align}
        color={props.color}
        weight={props.weight}
        truncate={props.truncate}
        class={props.class}
      >
        {slots.default?.()}
      </TypographyRoot>
    )
  }
})

export default Heading
