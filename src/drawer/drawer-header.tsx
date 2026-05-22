import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** DrawerHeader — the top section (HeroUI `drawer__header`). */
export const DrawerHeader = defineComponent({
  name: 'DrawerHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('flex flex-col gap-3', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerHeader
