/**
 * InputGroup — faithful Vue port of HeroUI v3 `InputGroup`.
 *
 * Compound API (HeroUI v3): `InputGroup`, `InputGroup.Root`, `InputGroup.Input`,
 * `InputGroup.TextArea`, `InputGroup.Prefix`, `InputGroup.Suffix`.
 * Flat exports mirror HeroUI v3 React named exports exactly.
 */
import { InputGroupRoot } from './input-group'
import { InputGroupInput } from './input-group-input'
import { InputGroupTextArea } from './input-group-textarea'
import { InputGroupPrefix } from './input-group-prefix'
import { InputGroupSuffix } from './input-group-suffix'

/** Compound component — `InputGroup.Root`, `.Input`, `.TextArea`, `.Prefix`, `.Suffix` (HeroUI v3 API). */
export const InputGroup = Object.assign(InputGroupRoot, {
  Root:     InputGroupRoot,
  Input:    InputGroupInput,
  TextArea: InputGroupTextArea,
  Prefix:   InputGroupPrefix,
  Suffix:   InputGroupSuffix,
})

export { InputGroupRoot, InputGroupInput, InputGroupTextArea, InputGroupPrefix, InputGroupSuffix }
export { inputGroupVariants } from '@heroui/styles'
export type { InputGroupVariants } from '@heroui/styles'
