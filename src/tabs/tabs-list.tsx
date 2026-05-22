import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TabsList as RekaTabsList } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TabsList — the segmented track that holds the triggers.
 *
 * Maps to HeroUI `tabs__list-container` (outer) + `tabs__list` (reka list).
 * reka-ui sets `data-orientation` which HeroUI CSS uses for layout.
 */
export const TabsList = defineComponent({
  name: 'TabsList',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div class="tabs__list-container">
        <RekaTabsList
          {...attrs}
          class={cn('tabs__list', props.class)}
        >
          {slots.default?.()}
        </RekaTabsList>
      </div>
    )
  }
})

export default TabsList
