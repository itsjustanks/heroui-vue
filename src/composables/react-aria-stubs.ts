import { defineComponent, h } from 'vue'

/**
 * React-Aria parity stubs for demo compatibility. These exports exist so the
 * AST-ported Vue demos (which mirror upstream React imports 1:1) compile and
 * render the non-virtualized parts of each example. Full implementations are
 * future work — these stubs are intentionally inert.
 */

export function useLocale (): { locale: string; direction: 'ltr' | 'rtl' } {
  const locale = (typeof navigator !== 'undefined' && navigator.language) || 'en-US'
  const direction = /^(ar|fa|he|ps|ur)/.test(locale) ? 'rtl' : 'ltr'
  return { locale, direction }
}

/** No-op `Collection` — renders its default slot. Real React Aria virtualizes
 *  child rendering; the stub just passes children through. */
export const Collection = defineComponent({
  name: 'Collection',
  setup (_props, { slots }) {
    return () => slots.default?.()
  }
})

/** Stub: real ListBoxLoadMoreItem triggers fetch-more on intersection. */
export const ListBoxLoadMoreItem = defineComponent({
  name: 'ListBoxLoadMoreItem',
  setup (_props, { slots }) {
    return () => h('li', { 'data-slot': 'list-box-load-more' }, slots.default?.())
  }
})

/** Stub virtualization layout. Hand-port the affected demo for real virtualization. */
export class ListLayout {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor (_opts?: any) {}
}

/** Stub: real TableLayout drives virtualized table row positioning. */
export class TableLayout {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor (_opts?: any) {}
}

/** Stub `useListData` — React Stately list-mutation helper. Returns an inert
 *  shape so demos compile. */
export function useListData<T> (opts: { initialItems?: T[]; getKey?: (item: T) => string | number } = {}): {
  items: T[]
  getItem: (key: string | number) => T | undefined
  insert: (idx: number, ...items: T[]) => void
  append: (...items: T[]) => void
  prepend: (...items: T[]) => void
  remove: (...keys: Array<string | number>) => void
  update: (key: string | number, newValue: T) => void
} {
  const items = [...(opts.initialItems ?? [])]
  const keyOf = opts.getKey ?? ((item: unknown) => (item as { id?: string | number }).id ?? '')
  return {
    items,
    getItem: (key) => items.find((it) => keyOf(it as T) === key),
    insert: (idx, ...vs) => { items.splice(idx, 0, ...vs) },
    append: (...vs) => { items.push(...vs) },
    prepend: (...vs) => { items.unshift(...vs) },
    remove: (...keys) => {
      for (const k of keys) {
        const i = items.findIndex((it) => keyOf(it as T) === k)
        if (i >= 0) items.splice(i, 1)
      }
    },
    update: (k, v) => {
      const i = items.findIndex((it) => keyOf(it as T) === k)
      if (i >= 0) items[i] = v
    },
  }
}

/** Stub virtualizer — renders children inline (no windowing). */
export const Virtualizer = defineComponent({
  name: 'Virtualizer',
  setup (_props, { slots }) {
    return () => slots.default?.()
  }
})
