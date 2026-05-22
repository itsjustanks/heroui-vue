import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ExternalLink as IconExternalLink } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * LinkIcon — trailing icon slot for a Link. HeroUI v3 `link__icon`.
 *
 * Defaults to an external-link glyph when no child is provided (HeroUI's
 * `ExternalLinkIcon`); the icon strengthens to full opacity on link hover/focus.
 */
export const LinkIcon = defineComponent({
  name: 'LinkIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const child = slots.default?.()
      return (
        <span
          {...attrs}
          data-slot="link-icon"
          data-default-icon={child ? undefined : ''}
          class={cn(
            'pointer-events-none inline-flex shrink-0 items-center justify-center self-center text-current opacity-60 transition-opacity',
            !child && 'ml-0.5',
            props.class
          )}
        >
          {child ?? <IconExternalLink class="size-3" data-slot="link-default-icon" />}
        </span>
      )
    }
  }
})

export default LinkIcon
