import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { type TypographyVariants } from '@heroui/styles'
import { TypographyRoot } from './typography-root'

type TypographyType = NonNullable<TypographyVariants['type']>

/** Body-text size step for `Paragraph`. */
type ParagraphSize = 'base' | 'sm' | 'xs'

/**
 * Paragraph — HeroUI v3 typography preset. Renders body text (`<p>`) at the
 * chosen `size`; a thin wrapper over `TypographyRoot`.
 */
export const Paragraph = defineComponent({
  name: 'TypographyParagraph',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Body size step — `base` → `body`, `sm`/`xs` → `body-sm`/`body-xs`. @default 'base' */
    size: { type: String as PropType<ParagraphSize>, default: 'base' },
    align: { type: String as PropType<TypographyVariants['align']>, default: undefined },
    color: { type: String as PropType<TypographyVariants['color']>, default: undefined },
    weight: { type: String as PropType<TypographyVariants['weight']>, default: undefined },
    truncate: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const type = computed(
      (): TypographyType => (props.size === 'base' ? 'body' : (`body-${props.size}` as TypographyType))
    )

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

export default Paragraph
