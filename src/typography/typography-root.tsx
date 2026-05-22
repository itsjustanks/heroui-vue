import { computed, defineComponent, h, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import {
  typographyVariants,
  type TTypographyType,
  type TTypographyVariants
} from './typography-variants'

/** Default intrinsic element for each typography `type`. */
const DEFAULT_ELEMENT_BY_TYPE: Record<TTypographyType, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  'body-sm': 'p',
  'body-xs': 'p',
  code: 'code'
}

/**
 * TypographyRoot — HeroUI-Vue Typography primitive.
 *
 * Faithful port of HeroUI v3 `TypographyRoot`: a styled text element whose host
 * tag is derived from `type` (overridable via `as`). Carries `align`, `color`,
 * `weight`, `truncate`. Heading/Paragraph/Code are thin presets over this.
 */
export const TypographyRoot = defineComponent({
  name: 'TypographyRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Text role / size step — also picks the default host element. */
    type: { type: String as PropType<TTypographyVariants['type']>, default: 'body' },
    /** Horizontal alignment. */
    align: { type: String as PropType<TTypographyVariants['align']>, default: 'start' },
    /** Foreground color. */
    color: { type: String as PropType<TTypographyVariants['color']>, default: 'default' },
    /** Font weight override. */
    weight: { type: String as PropType<TTypographyVariants['weight']>, default: undefined },
    /** Single-line truncation with ellipsis. */
    truncate: { type: Boolean, default: false },
    /** Override the host element (defaults to the element implied by `type`). */
    as: { type: String, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const tag = computed(
      () => props.as ?? DEFAULT_ELEMENT_BY_TYPE[(props.type ?? 'body') as TTypographyType]
    )

    const classes = computed(() => cn(
      typographyVariants({
        type: props.type,
        align: props.align,
        color: props.color,
        weight: props.weight,
        truncate: props.truncate || undefined
      }),
      props.class
    ))

    return () => h(
      tag.value,
      {
        ...attrs,
        'data-slot': 'typography',
        'data-type': props.type,
        class: classes.value
      },
      slots.default?.()
    )
  }
})

export default TypographyRoot
