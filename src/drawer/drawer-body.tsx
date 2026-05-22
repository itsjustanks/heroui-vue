import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** DrawerBody — the scrollable content area (HeroUI `drawer__body`). */
export const DrawerBody = defineComponent({
  name: 'DrawerBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        class={cn('drawer__body', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerBody
