import { defineComponent, type PropType } from 'vue'
import { Popover, PopoverContent, PopoverTrigger } from '@/popover'

/**
 * Dropdown — legacy 2-part dropdown (HeroUI-Vue port of `shadcn/dropdown`).
 *
 * A lightweight Popover-backed dropdown with `trigger` + `content` named slots,
 * distinct from the 14-part `DropdownMenu*` family in this directory. Kept as a
 * faithful port so call-site migration is a mechanical import-path swap.
 */
export const Dropdown = defineComponent({
  name: 'Dropdown',
  inheritAttrs: false,
  props: {
    open: { type: Boolean, required: false, default: undefined },
    side: { type: String as PropType<'top' | 'right' | 'bottom' | 'left'>, default: undefined },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: undefined },
    sideOffset: { type: Number, default: undefined },
    alignOffset: { type: Number, default: undefined }
  },
  emits: ['update:open'],
  setup (props, { attrs, slots, emit }) {
    return () => (
      <Popover
        {...attrs}
        open={props.open}
        onUpdate:open={() => emit('update:open')}
      >
        <PopoverTrigger>{slots.trigger?.()}</PopoverTrigger>
        <PopoverContent
          side={props.side}
          sideOffset={props.sideOffset}
          align={props.align}
          alignOffset={props.alignOffset}
          class="max-w-48 border-none p-1"
        >
          {slots.content?.()}
        </PopoverContent>
      </Popover>
    )
  }
})

export default Dropdown
