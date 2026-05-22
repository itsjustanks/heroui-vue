import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { Input } from '@/input'

/**
 * InputGroupInput — the text control inside an `InputGroup`. Faithful port of
 * `shadcn/input-group/InputGroupInput`.
 *
 * Strips the standalone `Input` border/ring so the surrounding `InputGroup`
 * owns the surface and the shared focus ring. `data-slot="input-group-control"`
 * is the hook the group keys its focus state off.
 */
export const InputGroupInput = defineComponent({
  name: 'InputGroupInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <Input
        {...attrs}
        data-slot="input-group-control"
        class={cn(
          'flex-1 rounded-none border-0 bg-transparent ring-offset-transparent focus-visible:ring-0 focus-visible:ring-transparent dark:bg-transparent',
          props.class
        )}
      />
    )
  }
})

export default InputGroupInput
