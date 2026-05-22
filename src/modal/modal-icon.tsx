import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ModalIcon — optional icon indicator in the header (HeroUI `modal__icon`). */
export const ModalIcon = defineComponent({
  name: 'ModalIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        class={cn('flex size-10 shrink-0 select-none items-center justify-center rounded-2xl', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalIcon
