import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TypographyRoot } from './typography-root'
import type { TTypographyVariants } from './typography-variants'

/**
 * Code — HeroUI v3 typography preset. Renders inline `<code>` with a muted
 * monospace pill; a thin wrapper over `TypographyRoot` with `type="code"`.
 */
export const Code = defineComponent({
  name: 'TypographyCode',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<TTypographyVariants['align']>, default: undefined },
    color: { type: String as PropType<TTypographyVariants['color']>, default: undefined },
    weight: { type: String as PropType<TTypographyVariants['weight']>, default: undefined },
    truncate: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <TypographyRoot
        {...attrs}
        type="code"
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

export default Code
