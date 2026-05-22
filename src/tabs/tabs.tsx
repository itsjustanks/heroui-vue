import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TabsRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Tabs — root of the HeroUI-Vue tabs (HeroUI `tabs` BEM family).
 *
 * Maps to `tabs` (base) and `tabs--secondary` (variant). reka-ui sets
 * `data-orientation` on the root which HeroUI CSS already uses for
 * horizontal/vertical layout. Forwards all props/emits via `{...attrs}`.
 *
 * `variant` prop: `primary` (default) | `secondary`.
 */
export const Tabs = defineComponent({
  name: 'Tabs',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      default: 'primary'
    }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <TabsRoot
        {...attrs}
        class={cn(
          'tabs',
          props.variant === 'secondary' && 'tabs--secondary',
          props.class
        )}
      >
        {slots.default?.()}
      </TabsRoot>
    )
  }
})

export default Tabs
