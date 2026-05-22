import { computed, defineComponent, h, type HTMLAttributes, type PropType } from 'vue'
import { typographyVariants, type TypographyVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

type TypographyType = NonNullable<TypographyVariants['type']>

/** Default intrinsic element for each typography `type`. */
const DEFAULT_ELEMENT_BY_TYPE: Record<TypographyType, string> = {
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
 * TypographyRoot — the styled text element. Faithful Vue port of HeroUI v3 `TypographyRoot`.
 *
 * The host tag is derived from `type` (overridable via `as`). Classes come
 * from `@heroui/styles` `typographyVariants` — never hand-written strings.
 * Heading, Paragraph, and Code are thin presets over this component.
 */
export const TypographyRoot = defineComponent({
  name: 'TypographyRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Text role / size step — also picks the default host element. @default 'body' */
    type: { type: String as PropType<TypographyVariants['type']>, default: 'body' },
    /** Horizontal alignment. @default 'start' */
    align: { type: String as PropType<TypographyVariants['align']>, default: 'start' },
    /** Foreground color. @default 'default' */
    color: { type: String as PropType<TypographyVariants['color']>, default: 'default' },
    /** Font weight override. */
    weight: { type: String as PropType<TypographyVariants['weight']>, default: undefined },
    /** Single-line truncation with ellipsis. */
    truncate: { type: Boolean, default: false },
    /** Override the host element (defaults to the element implied by `type`). */
    as: { type: String, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const tag = computed(
      () => props.as ?? DEFAULT_ELEMENT_BY_TYPE[(props.type ?? 'body') as TypographyType]
    )

    const classes = computed(() => {
      const result = typographyVariants({
        type: props.type,
        align: props.align,
        color: props.color,
        weight: props.weight,
        truncate: props.truncate || undefined
      })
      return cn(result.base(), props.class)
    })

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
