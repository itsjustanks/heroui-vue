import type { InjectionKey } from 'vue'

/**
 * Menubar context — currently a marker; future variant props can extend this.
 *
 * Provided by `MenubarRoot`, consumed by compound parts.
 */
export interface MenubarContext {
  // Reserved for future variant props (e.g. size, color).
}

export const MENUBAR_CONTEXT: InjectionKey<MenubarContext> = Symbol('heroui-vue-menubar')
