import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'

export type ScrollShadowVisibility = 'auto' | 'both' | 'top' | 'bottom' | 'left' | 'right' | 'none'

export interface UseScrollShadowProps {
  /** Scroll axis. @default 'vertical' */
  orientation?: 'vertical' | 'horizontal'
  /** Scroll offset (px) before shadow appears. @default 0 */
  offset?: number
  /** Whether shadow detection is active. @default true */
  isEnabled?: boolean
  /** Called when shadow visibility changes. */
  onVisibilityChange?: (v: ScrollShadowVisibility) => void
}

export interface UseScrollShadowReturn {
  /** Bind to the scrollable element via `ref`. */
  containerRef: Ref<HTMLElement | null>
  /** Current visibility, updated as the user scrolls. */
  visibility: Ref<ScrollShadowVisibility>
}

/**
 * useScrollShadow — composable that wires a scrollable element to HeroUI's
 * `data-*Scroll` dataset attributes so the CSS gradient overlays light up
 * at the correct edges. Functional equivalent of `@heroui/react`'s
 * `useScrollShadow` for headless ScrollShadow consumers.
 */
export function useScrollShadow (props: UseScrollShadowProps = {}): UseScrollShadowReturn {
  const containerRef = ref<HTMLElement | null>(null)
  const visibility   = ref<ScrollShadowVisibility>('none')
  const orientation  = props.orientation ?? 'vertical'
  const offset       = props.offset      ?? 0
  const isEnabled    = props.isEnabled   ?? true

  function clearDataset (el: HTMLElement) {
    delete el.dataset['topScroll']
    delete el.dataset['bottomScroll']
    delete el.dataset['topBottomScroll']
    delete el.dataset['leftScroll']
    delete el.dataset['rightScroll']
    delete el.dataset['leftRightScroll']
  }

  function update (el: HTMLElement) {
    const isVertical = orientation === 'vertical'
    const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = el
    const scrollPos  = isVertical ? scrollTop  : scrollLeft
    const scrollSize = isVertical ? scrollHeight : scrollWidth
    const clientSize = isVertical ? clientHeight : clientWidth
    const atStart = scrollPos <= offset
    const atEnd   = scrollPos + clientSize >= scrollSize - offset

    clearDataset(el)
    let next: ScrollShadowVisibility = 'none'
    if (!atStart && !atEnd) {
      next = 'both'
      el.dataset[isVertical ? 'topBottomScroll' : 'leftRightScroll'] = 'true'
    } else if (!atStart) {
      next = isVertical ? 'top' : 'left'
      el.dataset[isVertical ? 'topScroll' : 'leftScroll'] = 'true'
    } else if (!atEnd) {
      next = isVertical ? 'bottom' : 'right'
      el.dataset[isVertical ? 'bottomScroll' : 'rightScroll'] = 'true'
    }
    if (next !== visibility.value) {
      visibility.value = next
      props.onVisibilityChange?.(next)
    }
  }

  function onScroll (e: Event) {
    if (!isEnabled) return
    update(e.currentTarget as HTMLElement)
  }

  onMounted(() => {
    const el = containerRef.value
    if (!el || !isEnabled) return
    el.addEventListener('scroll', onScroll, { passive: true })
    update(el)
  })

  onUnmounted(() => {
    containerRef.value?.removeEventListener('scroll', onScroll)
  })

  watch(containerRef, (el, prev) => {
    if (prev) prev.removeEventListener('scroll', onScroll)
    if (el && isEnabled) {
      el.addEventListener('scroll', onScroll, { passive: true })
      update(el)
    }
  })

  return { containerRef, visibility }
}
