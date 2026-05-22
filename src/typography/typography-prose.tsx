import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { typographyVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * Prose — HeroUI v3 typography container for long-form content.
 *
 * Styles raw HTML descendants (headings, paragraphs, lists, code, blockquotes)
 * using the `typography-prose` slot from `@heroui/styles` `typographyVariants`.
 * Use for rendered markdown or rich-text bodies where child tags are not
 * individually wrapped.
 */
export const Prose = defineComponent({
  name: 'TypographyProse',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="prose"
        class={cn(typographyVariants().prose(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Prose
