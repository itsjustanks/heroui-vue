import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectContent as RekaSelectContent, SelectPortal, SelectViewport } from 'reka-ui'
import { cn } from '@/lib/utils'
import { SelectScrollDownButton } from './select-scroll-down-button'
import { SelectScrollUpButton } from './select-scroll-up-button'

/**
 * SelectContent — the listbox popover surface.
 *
 * HeroUI `select__popover`: a contained overlay card with compact padding,
 * scroll containment, and placement-aware enter/exit animation. Styling is
 * adapted from HeroUI's `select.css`, translated to reka-ui's data attributes
 * (`data-[state]`, `data-[side]`) and the repo's surface tokens.
 */
export const SelectContent = defineComponent({
  name: 'SelectContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    position: { type: String as PropType<'item-aligned' | 'popper'>, default: 'popper' },
    /**
     * When true, renders the listbox inline instead of teleporting to <body>.
     * Use this when the Select is inside a Dialog to avoid aria-hidden focus
     * conflicts between the dialog overlay and the portalled select content.
     */
    disablePortal: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <SelectPortal disabled={props.disablePortal}>
        <RekaSelectContent
          {...attrs}
          position={props.position}
          class={cn(
            'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-xl border border-border bg-popover text-sm text-popover-foreground shadow-lg',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
            props.position === 'popper' && [
              'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1'
            ],
            props.class
          )}
        >
          <SelectScrollUpButton />
          <SelectViewport
            class={cn(
              'p-1.5',
              props.position === 'popper' && 'h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)]'
            )}
          >
            {slots.default?.()}
          </SelectViewport>
          <SelectScrollDownButton />
        </RekaSelectContent>
      </SelectPortal>
    )
  }
})

export default SelectContent
