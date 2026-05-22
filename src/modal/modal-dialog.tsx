import { defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DialogContent as RekaDialogContent } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

type TModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'cover' | 'full'

/**
 * ModalDialog — the content box (HeroUI `modal__dialog`). This is the focus-
 * trapped `role=dialog` element (reka-ui `DialogContent`), styled as the modal
 * surface: `rounded-2xl`, `p-6`, `shadow-lg`. `size`: xs | sm | md | lg | cover | full.
 *
 * Rendered `as-child` so the data-attribute shim (`v-heroui-state`) binds the
 * real element. `modal.css` animates the always-mounted `.modal__container`
 * wrapper, not the dialog — so the shim is given `{ ancestor }` to mirror
 * `data-entering`/`data-exiting` onto it, and pins the dialog mounted for the
 * container's exit duration so the animation can play out.
 */
export const ModalDialog = defineComponent({
  name: 'ModalDialog',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    size: { type: String as PropType<TModalSize>, default: 'md' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDialogContent asChild>
        {withDirectives(
          (
            <div
              {...attrs}
              data-slot="modal-dialog"
              class={cn(
                'modal__dialog',
                props.size === 'xs' ? 'modal__dialog--xs'
                  : props.size === 'sm' ? 'modal__dialog--sm'
                    : props.size === 'lg' ? 'modal__dialog--lg'
                      : props.size === 'cover' ? 'modal__dialog--cover'
                        : props.size === 'full' ? 'modal__dialog--full'
                          : 'modal__dialog--md',
                props.class
              )}
            >
              {slots.default?.()}
            </div>
          ),
          [[vHerouiState, { ancestor: '.modal__container' }]]
        )}
      </RekaDialogContent>
    )
  }
})

export default ModalDialog
