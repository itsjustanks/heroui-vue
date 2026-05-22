import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { type TypographyVariants } from '@heroui/styles'
import { TypographyRoot } from './typography-root'

type TypographyType = NonNullable<TypographyVariants['type']>

/**
 * Heading — HeroUI v3 typography preset. Renders a heading (`h1`–`h6`) sized
 * by `level`; a thin wrapper over `TypographyRoot` with `type` derived from `level`.
 */
export const Heading = defineComponent({
  name: 'TypographyHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Heading level — drives both the host tag and the size step. @default 1 */
    level: { type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>, default: 1 },
    align: { type: String as PropType<TypographyVariants['align']>, default: undefined },
    color: { type: String as PropType<TypographyVariants['color']>, default: undefined },
    weight: { type: String as PropType<TypographyVariants['weight']>, default: undefined },
    truncate: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const type = computed((): TypographyType => `h${props.level}` as TypographyType)

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
