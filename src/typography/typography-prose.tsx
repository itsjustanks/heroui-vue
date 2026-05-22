import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * Prose — HeroUI v3 typography preset. A long-form content container that styles
 * raw HTML descendants (headings, paragraphs, lists, code, blockquotes, etc.) —
 * the equivalent of HeroUI's `typography-prose` slot. Use for rendered markdown
 * or rich-text bodies where child tags are not individually wrapped.
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
        class={cn('typography-prose', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Prose
