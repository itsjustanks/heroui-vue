/**
 * use-heroui-state — the data-attribute shim.
 *
 * HeroUI's `@heroui/styles` CSS keys most interactivity off native pseudo-
 * classes (`:hover`, `:focus-visible`, `:active`), which already work directly
 * over reka-ui's real DOM. A few React-Aria data-attributes have no reka-ui
 * equivalent, though — overlay enter/exit animations especially. This shim
 * bridges reka-ui's attribute contract to the one HeroUI's CSS expects:
 *
 *  - `data-entering` / `data-exiting` — HeroUI animates popovers, modals,
 *    drawers, menus and tooltips with these (`[data-entering="true"]` /
 *    `[data-exiting="true"]`). reka-ui emits `data-state="open|closed"`
 *    instead, so the shim derives the React-Aria pair from `data-state`
 *    transitions: `data-entering` on a closed→open transition, `data-exiting`
 *    on open→close.
 *  - `data-placement` — HeroUI keys placement-aware slide-ins off this
 *    (`[data-placement="top"]`, …). reka-ui emits `data-side`, so the shim
 *    mirrors `data-side` across to `data-placement`.
 *  - `data-disabled` — HeroUI expects the valued form `data-disabled="true"`;
 *    reka-ui emits a bare `data-disabled`. The shim normalises it.
 *
 * ## Honouring reka-ui's presence
 *
 * reka-ui's `Presence` only keeps an element mounted through its exit when it
 * detects a running CSS *animation* (it reads `animation-name`; it does not
 * watch transitions). Several HeroUI overlays exit via a CSS *transition*
 * (drawer) or animate an always-mounted ancestor rather than the reka-ui
 * element itself (modal). For those, the shim pins the element with a no-op
 * "hold" keyframe animation for the exit's duration, so reka-ui's presence
 * keeps it mounted long enough for the real exit to play. Overlays that exit
 * with their own CSS animation (popover, tooltip, dropdown, …) need no hold —
 * reka-ui detects those natively.
 *
 * ## Usage
 *
 * Delivered as a Vue directive (`vHerouiState`) so it binds to the real DOM
 * element across reka-ui's mount/unmount lifecycle. Apply it with `as-child`
 * so the directive sits on the actual overlay element:
 *
 * ```tsx
 * import { withDirectives } from 'vue'
 * import { vHerouiState } from '@/composables/use-heroui-state'
 *
 * <RekaPopoverContent as-child>
 *   {withDirectives(
 *     <div data-slot="popover" class="popover">{slots.default?.()}</div>,
 *     [[vHerouiState]]
 *   )}
 * </RekaPopoverContent>
 * ```
 *
 * Pass `{ ancestor }` when the enter/exit animation lives on an always-mounted
 * positioning wrapper (modal `.modal__container`, drawer `.drawer__content`):
 *
 * ```tsx
 * withDirectives(dialogVNode, [[vHerouiState, { ancestor: '.drawer__content' }]])
 * ```
 */
import type { ObjectDirective } from 'vue'

/** Options for the {@link vHerouiState} directive. */
export interface HerouiStateOptions {
  /**
   * CSS selector for an ancestor that also needs `data-entering` /
   * `data-exiting`. Used by modal (`.modal__container`) and drawer
   * (`.drawer__content`), whose enter/exit animation lives on an
   * always-mounted positioning wrapper rather than on the reka-ui element.
   */
  ancestor?: string
}

/* -------------------------------------------------------------------------- */
/* Hold animation — keeps an element mounted through a transition-based exit.  */
/* -------------------------------------------------------------------------- */

const HOLD_ANIMATION = 'heroui-state-hold'
const STYLE_ELEMENT_ID = 'heroui-state-shim'

/** Inject the no-op keyframes used to hold an element mounted through its exit. */
function ensureHoldKeyframes (): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ELEMENT_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ELEMENT_ID
  style.textContent = `@keyframes ${HOLD_ANIMATION}{from{}to{}}`
  document.head.appendChild(style)
}

function prefersReducedMotion (): boolean {
  return typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* -------------------------------------------------------------------------- */
/* CSS timing helpers                                                          */
/* -------------------------------------------------------------------------- */

/** Parse a CSS time list (`"0.1s, 200ms"`) to the largest value in milliseconds. */
function maxDurationMs (value: string): number {
  let max = 0
  for (const part of value.split(',')) {
    const t = part.trim()
    let ms = 0
    if (t.endsWith('ms')) ms = parseFloat(t)
    else if (t.endsWith('s')) ms = parseFloat(t) * 1000
    if (Number.isFinite(ms)) max = Math.max(max, ms)
  }
  return max
}

/** Whether the node currently has a running CSS animation (not a transition). */
function hasCssAnimation (node: Element | null): boolean {
  if (!node) return false
  const name = getComputedStyle(node).animationName
  return !!name && name !== 'none'
}

/** Largest animation/transition duration across the element and its ancestor. */
function resolveDuration (el: Element, ancestor: Element | null): number {
  let d = 0
  for (const node of [el, ancestor]) {
    if (!node) continue
    const cs = getComputedStyle(node)
    if (cs.animationName && cs.animationName !== 'none') {
      d = Math.max(d, maxDurationMs(cs.animationDuration))
    }
    d = Math.max(d, maxDurationMs(cs.transitionDuration))
  }
  return d
}

/* -------------------------------------------------------------------------- */
/* Per-element shim record                                                     */
/* -------------------------------------------------------------------------- */

interface ShimRecord {
  el: HTMLElement
  ancestor: HTMLElement | null
  observer: MutationObserver
  /** Last seen reka-ui `data-state`, to detect open↔close transitions. */
  lastState: string | null
  /** Teardown callbacks for the in-flight enter/exit phase. */
  cleanup: Array<() => void>
}

const records = new WeakMap<HTMLElement, ShimRecord>()

/** Run and drop every teardown callback queued for the current phase. */
function clearPhase (record: ShimRecord): void {
  for (const fn of record.cleanup.splice(0)) fn()
}

function setAttr (node: Element, name: string, value: string): void {
  if (node.getAttribute(name) !== value) node.setAttribute(name, value)
}

function dropAttr (node: Element, name: string): void {
  if (node.hasAttribute(name)) node.removeAttribute(name)
}

/* -------------------------------------------------------------------------- */
/* Attribute bridging                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Mirror reka-ui's `data-side` onto HeroUI's `data-placement`. Only ever sets —
 * never removes — so a statically authored `data-placement` (modal, drawer)
 * survives untouched when there is no `data-side` to mirror.
 */
function mirrorPlacement (el: HTMLElement): void {
  const side = el.getAttribute('data-side')
  if (side) setAttr(el, 'data-placement', side)
}

/** Normalise reka-ui's bare `data-disabled` to HeroUI's valued `data-disabled="true"`. */
function normaliseDisabled (el: HTMLElement): void {
  if (el.hasAttribute('data-disabled') && el.getAttribute('data-disabled') !== 'true') {
    el.setAttribute('data-disabled', 'true')
  }
}

/* -------------------------------------------------------------------------- */
/* Enter / exit phases                                                         */
/* -------------------------------------------------------------------------- */

/** Begin the enter phase: flag `data-entering`, then clear it once it has played. */
function beginEnter (record: ShimRecord): void {
  clearPhase(record)
  const { el, ancestor } = record
  const nodes: HTMLElement[] = ancestor ? [el, ancestor] : [el]

  for (const node of nodes) {
    dropAttr(node, 'data-exiting')
    node.style.removeProperty('animation') // drop any leftover hold animation
    setAttr(node, 'data-entering', 'true')
  }
  // Commit the entering start-state before it can be cleared.
  void el.offsetHeight

  const finish = (): void => {
    for (const node of nodes) dropAttr(node, 'data-entering')
  }

  if (hasCssAnimation(el) || hasCssAnimation(ancestor)) {
    // Animation-based enter (popover, tooltip, menu, modal): hold `data-entering`
    // for the run of the keyframes, then clear it.
    const onEnd = (event: AnimationEvent): void => {
      if (event.target === el || event.target === ancestor) finish()
    }
    for (const node of nodes) {
      node.addEventListener('animationend', onEnd)
      node.addEventListener('animationcancel', onEnd)
    }
    const duration = resolveDuration(el, ancestor)
    const timer = window.setTimeout(finish, duration > 0 ? duration + 80 : 1000)
    record.cleanup.push(() => {
      for (const node of nodes) {
        node.removeEventListener('animationend', onEnd)
        node.removeEventListener('animationcancel', onEnd)
      }
      window.clearTimeout(timer)
    })
  } else {
    // Transition-based enter (drawer): drop `data-entering` on the next frame so
    // the CSS transition runs from the entering start-state to the resting one.
    const raf = requestAnimationFrame(finish)
    record.cleanup.push(() => cancelAnimationFrame(raf))
  }
}

/** Begin the exit phase: flag `data-exiting` and, if needed, pin the element mounted. */
function beginExit (record: ShimRecord): void {
  clearPhase(record)
  const { el, ancestor } = record
  const nodes: HTMLElement[] = ancestor ? [el, ancestor] : [el]

  for (const node of nodes) {
    dropAttr(node, 'data-entering')
    setAttr(node, 'data-exiting', 'true')
  }
  // Commit the exiting state so the duration probe below reads the real values.
  void el.offsetHeight

  // reka-ui's presence only keeps an element mounted while it detects a CSS
  // animation. When the exit is a transition (drawer) or lives on an ancestor
  // (modal), pin the element with a no-op hold animation for the exit duration.
  if (!hasCssAnimation(el) && !prefersReducedMotion()) {
    ensureHoldKeyframes()
    const duration = resolveDuration(el, ancestor) || 200
    el.style.animation = `${HOLD_ANIMATION} ${duration}ms linear`
  }
}

/* -------------------------------------------------------------------------- */
/* Lifecycle                                                                   */
/* -------------------------------------------------------------------------- */

/** Activate the shim on a freshly mounted overlay element (its enter phase). */
function activate (el: HTMLElement, options: HerouiStateOptions): void {
  if (el.nodeType !== 1 || records.has(el)) return
  const ancestor = options.ancestor
    ? (el.closest(options.ancestor) as HTMLElement | null)
    : null

  mirrorPlacement(el)
  normaliseDisabled(el)

  const observer = new MutationObserver(() => {
    const record = records.get(el)
    if (!record) return
    mirrorPlacement(el)
    normaliseDisabled(el)
    const state = el.getAttribute('data-state')
    if (state === record.lastState) return
    record.lastState = state
    if (state === 'closed' || state === 'hidden') beginExit(record)
    else if (state === 'open' || state === 'visible') beginEnter(record)
  })

  const record: ShimRecord = {
    el,
    ancestor,
    observer,
    lastState: el.getAttribute('data-state'),
    cleanup: []
  }
  records.set(el, record)

  // The element has just entered the DOM — play its enter phase.
  beginEnter(record)

  observer.observe(el, {
    attributes: true,
    attributeFilter: ['data-state', 'data-side', 'data-disabled']
  })
}

/** Tear the shim down when the overlay element unmounts. */
function deactivate (el: HTMLElement): void {
  const record = records.get(el)
  if (!record) return
  records.delete(el)
  clearPhase(record)
  record.observer.disconnect()
  // The element itself is unmounting; clean the persistent ancestor.
  if (record.ancestor) {
    dropAttr(record.ancestor, 'data-entering')
    dropAttr(record.ancestor, 'data-exiting')
  }
  el.style.removeProperty('animation')
}

/* -------------------------------------------------------------------------- */
/* Public directive                                                            */
/* -------------------------------------------------------------------------- */

/**
 * `v-heroui-state` — bridges reka-ui's attribute contract to HeroUI's. Apply it
 * (via `withDirectives`) to the real overlay element rendered with `as-child`.
 * See the module doc comment for the full contract.
 */
export const vHerouiState: ObjectDirective<HTMLElement, HerouiStateOptions | undefined> = {
  mounted (el, binding) {
    activate(el, binding.value ?? {})
  },
  beforeUnmount (el) {
    deactivate(el)
  }
}

export default vHerouiState
