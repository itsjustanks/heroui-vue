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
        class={cn('min-h-0 flex-1 overflow-y-auto overscroll-contain text-sm leading-normal text-muted-foreground', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerBody
