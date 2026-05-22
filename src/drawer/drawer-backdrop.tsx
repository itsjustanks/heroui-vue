import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogOverlay, DialogPortal } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DrawerBackdrop — the dim overlay layer (HeroUI `drawer__backdrop`). Portals the
 * drawer and renders the backdrop; the Content is passed as its children.
 * `variant`: opaque (default) | blur | transparent.
 */
export const DrawerBackdrop = defineComponent({
  name: 'DrawerBackdrop',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<'opaque' | 'blur' | 'transparent'>, default: 'opaque' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DialogPortal>
        <DialogOverlay
          {...attrs}
          class={cn(
            'drawer__backdrop',
            props.variant === 'opaque' && 'drawer__backdrop--opaque',
            props.variant === 'blur' && 'drawer__backdrop--blur',
            props.variant === 'transparent' && 'drawer__backdrop--transparent',
            props.class
          )}
        />
        {slots.default?.()}
      </DialogPortal>
    )
  }
})

export default DrawerBackdrop
