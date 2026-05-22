import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** AlertTitle — HeroUI BEM: `alert__title`. Medium-weight label text. */
export const AlertTitle = defineComponent({
  name: 'AlertTitle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <h5 {...attrs} class={cn('alert__title', props.class)}>
        {slots.default?.()}
      </h5>
    )
  }
})

export default AlertTitle
