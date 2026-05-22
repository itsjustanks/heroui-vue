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
        class={cn(
          'text-foreground',
          '[&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight',
          '[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight',
          '[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight',
          '[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight',
          '[&_h5]:text-lg [&_h5]:font-semibold [&_h5]:tracking-tight',
          '[&_h6]:text-base [&_h6]:font-semibold [&_h6]:tracking-tight',
          '[&_p]:text-base [&_p]:leading-7',
          '[&_li]:text-base [&_li]:leading-7',
          '[&_code]:rounded-md [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm',
          '[&_a]:font-medium [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4',
          '[&_blockquote]:mt-4 [&_blockquote]:border-l-4 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground',
          '[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6',
          '[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6',
          '[&_hr]:my-8 [&_hr]:border-border',
          '[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed',
          '[&_strong]:font-semibold [&_strong]:text-foreground',
          '[&_em]:italic',
          '[&_img]:my-4 [&_img]:rounded-xl',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default Prose
