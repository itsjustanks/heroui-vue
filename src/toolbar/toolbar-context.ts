import type { ComputedRef, InjectionKey } from 'vue'

/**
 * Context provided by `Toolbar` so a plain `Separator` placed inside it can
 * flip to the perpendicular orientation — exactly as React-Aria's `Toolbar`
 * does. HeroUI v3 has no dedicated `ToolbarSeparator`: a bare `Separator` is
 * composed in, and the toolbar makes it vertical (in a horizontal toolbar) or
 * horizontal (in a vertical toolbar).
 */
export interface ToolbarContext {
  /** The toolbar's own flow axis. */
  orientation: ComputedRef<'horizontal' | 'vertical'>
}

/** Provided by `ToolbarRoot`, consumed by `Separator`. */
export const TOOLBAR_CONTEXT: InjectionKey<ToolbarContext> = Symbol('heroui-vue-toolbar')
