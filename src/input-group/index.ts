/**
 * HeroUI-Vue InputGroup — faithful HeroUI v3 input-group over plain DOM.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * Export names (components, cva variants, and types) mirror `shadcn/input-group`
 * exactly so call-site migration is a pure import-path swap.
 */
export { default as InputGroup } from './input-group'
export { default as InputGroupAddon } from './input-group-addon'
export { default as InputGroupButton } from './input-group-button'
export { default as InputGroupInput } from './input-group-input'
export { default as InputGroupText } from './input-group-text'
export { default as InputGroupTextarea } from './input-group-textarea'

export {
  inputGroupAddonVariants,
  inputGroupButtonVariants
} from './variants'
export type {
  InputGroupVariants,
  InputGroupButtonVariants,
  InputGroupButtonProps
} from './variants'
