import { cloneVNode, Comment, h, isVNode, type Component, type VNode } from 'vue'

/**
 * HeroUI v3 overlays (Modal, Drawer, Popover, Tooltip, AlertDialog, Dropdown)
 * place a PLAIN element as the first child of the Root — there is no `.Trigger`
 * wrapper:
 *
 *   <Modal>
 *     <Button>Open</Button>          ← becomes the trigger automatically
 *     <Modal.Backdrop>…</Modal.Backdrop>
 *   </Modal>
 *
 * `withAutoTrigger` reproduces that ergonomics for the Vue port: it takes the
 * Root's default-slot vnodes, wraps the FIRST element vnode in the given reka-ui
 * trigger primitive (using `asChild`, so no extra DOM node is added), and
 * returns the remaining vnodes untouched.
 *
 * Back-compat: if the first child already IS the family's `.Trigger` component
 * (detected by component `name`), it is left alone — no double wrapping.
 */
export function withAutoTrigger (
  nodes: VNode[] | undefined,
  triggerPrimitive: Component,
  triggerComponentName: string
): VNode[] {
  if (!nodes || nodes.length === 0) return nodes ?? []

  // Find the first real element/component vnode (skip comments, plain text).
  const firstIdx = nodes.findIndex(
    (n) => isVNode(n) && n.type !== Comment && typeof n.type !== 'symbol'
  )
  if (firstIdx === -1) return nodes

  const first = nodes[firstIdx]
  const firstType = first.type as { name?: string; __name?: string } | string

  // Already a `.Trigger` from this family → don't double-wrap.
  if (typeof firstType === 'object' && firstType !== null) {
    const name = firstType.name ?? firstType.__name
    if (name === triggerComponentName) return nodes
  }

  const out = nodes.slice()
  out[firstIdx] = h(triggerPrimitive as Component, { asChild: true }, () => [
    cloneVNode(first)
  ])
  return out
}
