import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** DrawerFooter — the bottom action row (HeroUI `drawer__footer`): end-aligned actions. */
export const DrawerFooter = defineComponent({
  name: 'DrawerFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('flex flex-row items-center justify-end gap-2', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerFooter
