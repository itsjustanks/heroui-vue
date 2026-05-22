import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** AlertDialogFooter — HeroUI BEM: `alert-dialog__footer`. End-aligned action row. */
export const AlertDialogFooter = defineComponent({
  name: 'AlertDialogFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('alert-dialog__footer', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default AlertDialogFooter
