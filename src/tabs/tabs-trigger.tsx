import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TabsTrigger as TabsTriggerBase } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaTabsTrigger: any = TabsTriggerBase
import { cn } from '@/lib/utils'

/**
 * TabsTrigger — an individual tab inside the segmented track.
 *
 * Maps to HeroUI `tabs__tab`. reka-ui sets `data-[state=active]` on the trigger;
 * HeroUI CSS uses `[data-selected="true"]` — both are real DOM attributes that
 * native CSS selectors pick up. The separator spans `tabs__separator` for the
 * divider between unselected tabs.
 */
export const TabsTrigger = defineComponent({
  name: 'TabsTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTabsTrigger
        {...(attrs as Record<string, any>)}
        class={cn('tabs__tab', props.class)}
      >
        <span class="tabs__separator" aria-hidden="true" />
        {slots.default?.()}
      </RekaTabsTrigger>
    )
  }
})

export default TabsTrigger
