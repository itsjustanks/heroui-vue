import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { linkVariants } from '@heroui/styles'
import { IconExternalLink } from '@/icons'
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
          {child ?? <IconExternalLink data-slot="link-default-icon" />}
        </span>
      )
    }
  }
})

export default LinkIcon
