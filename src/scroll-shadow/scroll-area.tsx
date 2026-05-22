import { computed, defineComponent, onMounted, ref, type HTMLAttributes, type PropType } from 'vue'
import { scrollShadowVariants, type ScrollShadowVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

export type ScrollShadowVisibility = 'auto' | 'both' | 'top' | 'bottom' | 'left' | 'right' | 'none'

/**
 * ScrollShadowRoot — a plain `<div>` with gradient shadow overlays driven by
 * scroll position. Faithful Vue port of HeroUI v3 `ScrollShadow`.
 *
 * HeroUI's CSS uses `:before`/`:after` pseudo-elements sized by the
 * `--scroll-shadow-size` custom property and toggled via `data-*Scroll`
 * dataset attributes set by this component's scroll listener.
 *
 * Props mirror `ScrollShadowRootProps` from the React source exactly:
 * `size`, `offset`, `visibility`, `isEnabled`, `orientation`,
 * `hideScrollBar`, `variant`, `onVisibilityChange`.
 */
export const ScrollShadowRoot = defineComponent({
  name: 'ScrollShadow',
  inheritAttrs: false,
  props: {
    class:              { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Shadow gradient size in pixels. @default 40 */
    size:               { type: Number, default: 40 },
    /** Scroll offset (px) before shadow appears. @default 0 */
    offset:             { type: Number, default: 0 },
    /** Controlled shadow visibility. @default 'auto' */
    visibility:         { type: String as PropType<ScrollShadowVisibility>, default: 'auto' },
    /** Whether scroll-shadow detection is active. @default true */
    isEnabled:          { type: Boolean, default: true },
    /** Flow axis. @default 'vertical' */
    orientation:        { type: String as PropType<ScrollShadowVariants['orientation']>, default: 'vertical' },
    /** Hide the native scrollbar. @default false */
    hideScrollBar:      { type: Boolean, default: false },
    /** Shadow style. @default 'fade' */
    variant:            { type: String as PropType<ScrollShadowVariants['variant']>, default: 'fade' },
    /** Called when shadow visibility changes. */
    onVisibilityChange: { type: Function as PropType<(v: ScrollShadowVisibility) => void>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const containerRef = ref<HTMLElement | null>(null)

    const styles = computed(() =>
      scrollShadowVariants({
        hideScrollBar: props.hideScrollBar,
        orientation:   props.orientation,
        variant:       props.variant,
      })
    )

    function clearDataset (el: HTMLElement) {
      delete el.dataset['topScroll']
      delete el.dataset['bottomScroll']
      delete el.dataset['topBottomScroll']
      delete el.dataset['leftScroll']
      delete el.dataset['rightScroll']
      delete el.dataset['leftRightScroll']
    }

    function updateAutoVisibility (el: HTMLElement) {
      const isVertical = props.orientation === 'vertical'
      const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = el
      const scrollPos  = isVertical ? scrollTop  : scrollLeft
      const scrollSize = isVertical ? scrollHeight : scrollWidth
      const clientSize = isVertical ? clientHeight : clientWidth
      const atStart = scrollPos <= props.offset
      const atEnd   = scrollPos + clientSize >= scrollSize - props.offset

      clearDataset(el)

      let vis: ScrollShadowVisibility = 'none'
      if (!atStart && !atEnd) {
        vis = 'both'
        el.dataset[isVertical ? 'topBottomScroll' : 'leftRightScroll'] = 'true'
      } else if (!atStart) {
        vis = isVertical ? 'top' : 'left'
        el.dataset[isVertical ? 'topScroll' : 'leftScroll'] = 'true'
      } else if (!atEnd) {
        vis = isVertical ? 'bottom' : 'right'
        el.dataset[isVertical ? 'bottomScroll' : 'rightScroll'] = 'true'
      }
      props.onVisibilityChange?.(vis)
    }

    function applyControlledVisibility (el: HTMLElement) {
      clearDataset(el)
      const isVertical = props.orientation === 'vertical'
      if (props.visibility === 'both') {
        el.dataset[isVertical ? 'topBottomScroll' : 'leftRightScroll'] = 'true'
      } else if (props.visibility !== 'none' && props.visibility !== 'auto') {
        el.dataset[`${props.visibility}Scroll`] = 'true'
      }
    }

    onMounted(() => {
      const el = containerRef.value
      if (!el) return
      if (props.visibility !== 'auto') {
        applyControlledVisibility(el)
      } else if (props.isEnabled) {
        updateAutoVisibility(el)
      }
    })

    function onScroll (e: Event) {
      const el = e.currentTarget as HTMLElement
      if (!props.isEnabled || props.visibility !== 'auto') return
      updateAutoVisibility(el)
    }

    return () => (
      <div
        {...attrs}
        ref={containerRef}
        data-slot="scroll-shadow"
        data-orientation={props.orientation}
        data-scroll-shadow-size={props.size}
        style={{
          '--scroll-shadow-size': `${props.size}px`,
          ...(attrs.style as object | undefined)
        }}
        class={cn(styles.value.base(), props.class)}
        onScroll={props.isEnabled ? onScroll : undefined}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ScrollShadowRoot
