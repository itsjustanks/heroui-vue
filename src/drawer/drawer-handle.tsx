import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** DrawerHandle — the visual drag-handle bar (HeroUI `drawer__handle`), for edge drawers. */
export const DrawerHandle = defineComponent({
  name: 'DrawerHandle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <div {...attrs} class={cn('flex items-center justify-center pb-2', props.class)}>
        <div class="h-1 w-9 rounded-full bg-border" />
      </div>
    )
  }
})

export default DrawerHandle
