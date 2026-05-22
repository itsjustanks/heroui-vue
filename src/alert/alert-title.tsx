import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** AlertTitle — the alert heading (HeroUI `alert__title`): medium-weight, tight leading. */
export const AlertTitle = defineComponent({
  name: 'AlertTitle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <h5 {...attrs} class={cn('mb-1 font-medium leading-none tracking-tight', props.class)}>
        {slots.default?.()}
      </h5>
    )
  }
})

export default AlertTitle
