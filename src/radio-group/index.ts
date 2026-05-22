/**
 * RadioGroup + Radio — faithful Vue ports of HeroUI v3 `RadioGroup` and `Radio`.
 *
 * Compound APIs (HeroUI v3):
 *   RadioGroup         → RadioGroup (Root only)
 *   Radio              → Radio.Root, Radio.Control, Radio.Indicator, Radio.Content
 */
import { RadioGroupRoot } from './radio-group'
import { RadioRoot, RadioControl, RadioIndicator, RadioContent } from './radio-group-item'

/** Compound component — `RadioGroup.Root` (HeroUI v3 API). */
export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot
})

/** Compound component — `Radio.Control`, `Radio.Indicator`, `Radio.Content` (HeroUI v3 API). */
export const Radio = Object.assign(RadioRoot, {
  Root: RadioRoot,
  Control: RadioControl,
  Indicator: RadioIndicator,
  Content: RadioContent
})

export { RadioGroupRoot, RadioRoot, RadioControl, RadioIndicator, RadioContent }

export { radioGroupVariants } from '@heroui/styles'
export type { RadioGroupVariants } from '@heroui/styles'
export { radioVariants } from '@heroui/styles'
export type { RadioVariants } from '@heroui/styles'
