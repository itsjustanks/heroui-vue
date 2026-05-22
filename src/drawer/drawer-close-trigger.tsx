import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogClose } from 'reka-ui'
import { X as IconX } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/** DrawerCloseTrigger — the corner close button (HeroUI `drawer__close-trigger`). */
export const DrawerCloseTrigger = defineComponent({
  name: 'DrawerCloseTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DialogClose
        {...attrs}
        aria-label="Close"
        class={cn('drawer__close-trigger', props.class)}
      >
        {slots.default?.() ?? <IconX class="size-4" />}
      </DialogClose>
    )
  }
})

export default DrawerCloseTrigger
