import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TabsList as RekaTabsList } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TabsList — the segmented track that holds the triggers.
 *
 * HeroUI `tabs__list`: a contained `bg-default` rail with compact `p-1` padding
 * and a generous radius. Styling is adapted from HeroUI's `tabs.css`, expressed
 * with the repo's surface tokens (`bg-muted`).
 */
export const TabsList = defineComponent({
  name: 'TabsList',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTabsList
        {...attrs}
        class={cn(
          'inline-flex items-center justify-center gap-1 rounded-lg bg-muted p-1 text-muted-foreground',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaTabsList>
    )
  }
})

export default TabsList
