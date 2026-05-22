/**
 * Input — faithful Vue port of HeroUI v3 `Input`.
 *
 * Compound API (HeroUI v3): `Input`, `Input.Root`.
 * Flat export: `InputRoot`.
 */
import { InputRoot } from './input'

/** Compound component — `Input.Root` (HeroUI v3 API). */
export const Input = Object.assign(InputRoot, {
  Root: InputRoot,
})

export { InputRoot }
export { inputVariants } from '@heroui/styles'
export type { InputVariants } from '@heroui/styles'
