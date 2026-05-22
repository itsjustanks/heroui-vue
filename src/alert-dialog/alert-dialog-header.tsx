import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** AlertDialogHeader — HeroUI BEM: `alert-dialog__header`. Title + description stack. */
export const AlertDialogHeader = defineComponent({
  name: 'AlertDialogHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('alert-dialog__header', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default AlertDialogHeader
