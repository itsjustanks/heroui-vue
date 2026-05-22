import { computed, defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DialogContent as RekaDialogContent } from 'reka-ui'
import { modalVariants, type ModalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * ModalDialog — the content box (HeroUI `modal__dialog`). The focus-trapped
 * `role=dialog` element (reka-ui `DialogContent`).
 *
 * `size`: xs | sm | md (default) | lg | cover | full.
 * `scroll`: inside (default) | outside.
 *
 * OVERLAY SHIM: Rendered `asChild` with `vHerouiState({ ancestor: '.modal__container' })`
 * so `data-entering`/`data-exiting` are mirrored onto the container wrapper,
 * enabling the CSS entry/exit animation to play out fully.
 * Do NOT remove `withDirectives` or the `ancestor` option.
 */
export const ModalDialog = defineComponent({
  name: 'ModalDialog',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Dialog size. @default 'md' */
    size: { type: String as PropType<ModalVariants['size']>, default: 'md' },
    /** Scroll behaviour. @default 'inside' */
    scroll: { type: String as PropType<ModalVariants['scroll']>, default: 'inside' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => modalVariants({ size: props.size, scroll: props.scroll }))
    return () => (
      <RekaDialogContent asChild>
        {withDirectives(
          (
            <div
              {...attrs}
              data-slot="modal-dialog"
              class={cn(styles.value.dialog(), props.class)}
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
