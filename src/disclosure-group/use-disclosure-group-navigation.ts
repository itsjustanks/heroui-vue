import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export interface UseDisclosureGroupNavigationProps {
  /** Whether keyboard navigation between disclosure triggers is enabled. @default true */
  isEnabled?: boolean
}

export interface UseDisclosureGroupNavigationReturn {
  /** Bind to the root element. */
  containerRef: Ref<HTMLElement | null>
}

/**
 * useDisclosureGroupNavigation — adds ArrowUp/ArrowDown roving focus between
 * `[data-slot="disclosure"] > [data-slot="disclosure-trigger"]` elements
 * inside a `DisclosureGroup`. Mirrors `@heroui/react`'s hook of the same
 * name. reka-ui's `AccordionRoot` already handles full keyboard navigation,
 * so this hook is exposed primarily for headless consumers.
 */
export function useDisclosureGroupNavigation (
  props: UseDisclosureGroupNavigationProps = {}
): UseDisclosureGroupNavigationReturn {
  const containerRef = ref<HTMLElement | null>(null)
  const isEnabled = props.isEnabled ?? true

  function getTriggers (root: HTMLElement) {
    return Array.from(root.querySelectorAll<HTMLElement>('[data-slot="disclosure-trigger"]'))
  }

  function onKeydown (e: KeyboardEvent) {
    if (!isEnabled) return
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    const root = containerRef.value
    if (!root) return
    const triggers = getTriggers(root)
    const i = triggers.indexOf(document.activeElement as HTMLElement)
    if (i === -1) return
    e.preventDefault()
    const next = e.key === 'ArrowDown'
      ? triggers[(i + 1) % triggers.length]
      : triggers[(i - 1 + triggers.length) % triggers.length]
    next?.focus()
  }

  onMounted(() => containerRef.value?.addEventListener('keydown', onKeydown))
  onUnmounted(() => containerRef.value?.removeEventListener('keydown', onKeydown))

  return { containerRef }
}
