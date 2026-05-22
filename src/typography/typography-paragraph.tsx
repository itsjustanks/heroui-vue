import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TypographyRoot } from './typography-root'
import type { TTypographyType, TTypographyVariants } from './typography-variants'

/** Body-text size step for `Paragraph`. */
type TParagraphSize = 'base' | 'sm' | 'xs'

/**
 * Paragraph — HeroUI v3 typography preset. Renders body text (`<p>`) at the
 * chosen `size`; a thin wrapper over `TypographyRoot`.
 */
export const Paragraph = defineComponent({
  name: 'TypographyParagraph',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Body size step — `base` → `body`, `sm`/`xs` → `body-sm`/`body-xs`. */
    size: { type: String as PropType<TParagraphSize>, default: 'base' },
    align: { type: String as PropType<TTypographyVariants['align']>, default: undefined },
    color: { type: String as PropType<TTypographyVariants['color']>, default: undefined },
    weight: { type: String as PropType<TTypographyVariants['weight']>, default: undefined },
    truncate: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const type = computed(
      (): TTypographyType => (props.size === 'base' ? 'body' : (`body-${props.size}` as TTypographyType))
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
