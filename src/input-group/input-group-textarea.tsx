import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Textarea } from '@/textarea'

/**
 * InputGroupTextarea — the textarea control inside an `InputGroup`. Faithful
 * port of `shadcn/input-group/InputGroupTextarea`.
 *
 * Wraps the shared `Textarea` primitive (no HeroUI-Vue textarea port yet —
 * Phase 2) and strips its border/ring so the `InputGroup` owns the surface.
 */
export const InputGroupTextarea = defineComponent({
  name: 'InputGroupTextarea',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <Textarea
        {...attrs}
        data-slot="input-group-control"
        class={cn(
          'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent',
          props.class
        )}
      />
    )
  }
})

export default InputGroupTextarea
