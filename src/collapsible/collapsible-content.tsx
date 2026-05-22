import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CollapsibleContent as RekaCollapsibleContent } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CollapsibleContent — the collapsible panel body.
 *
 * HeroUI v3 BEM: `disclosure__content`. The height animation is driven by
 * reka-ui's `--reka-collapsible-content-height` CSS var, complemented by
 * `disclosure__body` for inner padding.
 */
export const CollapsibleContent = defineComponent({
  name: 'CollapsibleContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaCollapsibleContent
        {...attrs}
        class={cn('disclosure__content', props.class)}
      >
        <div class="disclosure__body">
          {slots.default?.()}
        </div>
      </RekaCollapsibleContent>
    )
  }
})

export default CollapsibleContent
