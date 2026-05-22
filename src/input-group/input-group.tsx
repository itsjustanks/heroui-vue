import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * InputGroup — HeroUI-Vue input-group container. Faithful port of
 * `shadcn/input-group`.
 *
 * HeroUI `input-group.css`: `rounded-field` bordered surface that grows a
 * shared focus ring when its control is focused (`has-[…:focus-visible]`).
 * Layout/`data-slot` hooks and alignment variants are preserved verbatim;
 * only the radius is lifted to the HeroUI `rounded-md` small-surface scale.
 */
export const InputGroup = defineComponent({
  name: 'InputGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="input-group"
        role="group"
        class={cn(
          'group/input-group relative flex w-full items-center rounded-md border border-input outline-none dark:bg-input/30',
          'h-10 min-w-0 has-[>textarea]:h-auto',

          // Variants based on alignment.
          'has-[>[data-align=inline-start]]:[&>input]:pl-2',
          'has-[>[data-align=inline-end]]:[&>input]:pr-2',
          'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
          'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

          // Focus state.
          'has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background',

          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default InputGroup
