/**
 * HeroUI-Vue Toggle — faithful HeroUI v3 toggle-button over reka-ui.
 * Part of the HeroUI-for-Vue primitive library.
 */
export { default as Toggle } from './toggle'
export { toggleVariants } from './toggle-variants'
// Compat export name — `shadcn-vue` exports the type as `ToggleVariants`.
// Re-export alias (not a declaration) so migration stays a mechanical swap.
export type { TToggleVariants as ToggleVariants } from './toggle-variants'
