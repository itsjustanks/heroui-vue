import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * CardHeader — the top region holding title/description. HeroUI v3 taste:
 * generous `p-6` padding, vertical `gap-1.5` rhythm between title and description.
 */
export const CardHeader = defineComponent({
  name: 'CardHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('flex flex-col gap-y-1.5 p-6', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default CardHeader
