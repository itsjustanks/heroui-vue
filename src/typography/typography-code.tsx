import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { type TypographyVariants } from '@heroui/styles'
import { TypographyRoot } from './typography-root'

/**
 * Code — HeroUI v3 typography preset. Renders inline `<code>` with a muted
 * monospace style; a thin wrapper over `TypographyRoot` with `type="code"`.
 */
export const Code = defineComponent({
  name: 'TypographyCode',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<TypographyVariants['align']>, default: undefined },
    color: { type: String as PropType<TypographyVariants['color']>, default: undefined },
    weight: { type: String as PropType<TypographyVariants['weight']>, default: undefined },
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
