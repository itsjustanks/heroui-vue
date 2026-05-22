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
      <div {...attrs} class={cn('drawer__handle', props.class)}>
        <div data-slot="drawer-handle-bar" />
      </div>
    )
  }
})

export default DrawerHandle
