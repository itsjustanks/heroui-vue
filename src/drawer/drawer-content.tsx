import {
  computed,
  defineComponent,
  provide,
  type ComputedRef,
  type HTMLAttributes,
  type InjectionKey,
  type PropType
} from 'vue'
import { cn } from '@/lib/utils'

export type TDrawerPlacement = 'top' | 'bottom' | 'left' | 'right'

/** Injection key — the placement, provided by Content, consumed by Dialog. */
export const DRAWER_PLACEMENT_KEY: InjectionKey<ComputedRef<TDrawerPlacement>> =
  Symbol('heroui-drawer-placement')

/**
 * DrawerContent — the positioning layer (HeroUI `drawer__content`). A
 * full-viewport flex wrapper that anchors the panel to a screen edge;
 * `pointer-events-none` so clicks outside the panel fall through to the backdrop.
 * `placement`: bottom (default) | top | left | right.
 */
export const DrawerContent = defineComponent({
  name: 'DrawerContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    placement: { type: String as PropType<TDrawerPlacement>, default: 'bottom' }
  },
  setup (props, { attrs, slots }) {
    provide(DRAWER_PLACEMENT_KEY, computed(() => props.placement))
    return () => (
      <div
        {...attrs}
        data-placement={props.placement}
        class={cn(
          'drawer__content',
          props.placement === 'bottom' && 'drawer__content--bottom',
          props.placement === 'top' && 'drawer__content--top',
          props.placement === 'left' && 'drawer__content--left',
          props.placement === 'right' && 'drawer__content--right',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerContent
