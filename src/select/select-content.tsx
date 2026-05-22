import { defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { SelectContent as RekaSelectContent, SelectPortal, SelectViewport } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { SelectScrollDownButton } from './select-scroll-down-button'
import { SelectScrollUpButton } from './select-scroll-up-button'

/**
 * SelectContent — the listbox popover surface (HeroUI `select__popover`).
 *
 * Rendered `as-child` so the data-attribute shim (`v-heroui-state`) binds the
 * real overlay element: it mirrors reka-ui's `data-side` to `data-placement`
 * and derives `data-entering`/`data-exiting` from `data-state`, which
 * `select.css` keys its placement-aware enter/exit animation off.
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
        <RekaSelectContent position={props.position} asChild>
          {withDirectives(
            (
              <div {...attrs} class={cn('select__popover', props.class)}>
                <SelectScrollUpButton />
                <SelectViewport
                  data-slot="list-box"
                  class={cn(
                    props.position === 'popper' && 'h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)]'
                  )}
                >
                  {slots.default?.()}
                </SelectViewport>
                <SelectScrollDownButton />
              </div>
            ),
            [[vHerouiState]]
          )}
        </RekaSelectContent>
      </SelectPortal>
    )
  }
})

export default SelectContent
