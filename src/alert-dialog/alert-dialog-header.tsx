import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** AlertDialogHeader — the top section: title + description stack. */
export const AlertDialogHeader = defineComponent({
  name: 'AlertDialogHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('flex flex-col gap-y-2 text-center sm:text-left', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default AlertDialogHeader
