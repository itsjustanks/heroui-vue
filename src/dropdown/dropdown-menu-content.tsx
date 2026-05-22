import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuContent as RekaDropdownMenuContent, DropdownMenuPortal } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DropdownMenuContent — the popover surface.
 *
 * HeroUI `dropdown__popover` + `dropdown__menu`: a contained card with compact
 * padding and placement-aware enter/exit animation. Styling is adapted from
 * HeroUI's `dropdown.css`, translated to reka-ui's data attributes
 * (`data-[state]`, `data-[side]`) and the repo's surface tokens.
 */
export const DropdownMenuContent = defineComponent({
  name: 'DropdownMenuContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DropdownMenuPortal>
        <RekaDropdownMenuContent
          {...attrs}
          sideOffset={props.sideOffset}
          class={cn('dropdown__popover', props.class)}
        >
          <div data-slot="dropdown-menu" class="dropdown__menu">
            {slots.default?.()}
          </div>
        </RekaDropdownMenuContent>
      </DropdownMenuPortal>
    )
  }
})

export default DropdownMenuContent
