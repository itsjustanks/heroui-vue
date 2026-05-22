import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { linkVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { LINK_CONTEXT } from './link-context'

/**
 * LinkIcon — trailing icon slot for a Link (HeroUI `link__icon`).
 *
 * Defaults to an external-link glyph when no child is provided, matching
 * HeroUI v3's `ExternalLinkIcon` default. Classes come from the shared
 * `linkVariants` slot map injected by `LinkRoot`.
 */
export const LinkIcon = defineComponent({
  name: 'LinkIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(LINK_CONTEXT, null)
    return () => {
      const child = slots.default?.()
      return (
        <span
          {...attrs}
          data-slot="link-icon"
          data-default-icon={child ? undefined : 'true'}
          class={cn((ctx?.slots.value ?? linkVariants()).icon(), props.class)}
        >
          {child ?? (
            <svg
              aria-hidden="true"
              aria-label="External link icon"
              data-slot="link-default-icon"
              fill="none"
              height="9"
              role="presentation"
              viewBox="0 0 7 7"
              width="9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.20592 6.84333L0.379822 6.01723L4.52594 1.8672H1.37819L1.38601 0.731812H6.48742V5.83714H5.34421L5.35203 2.6933L1.20592 6.84333Z"
                fill="currentColor"
              />
            </svg>
          )}
        </span>
      )
    }
  }
})

export default LinkIcon
