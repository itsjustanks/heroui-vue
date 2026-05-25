/**
 * Radio — re-export folder mirroring upstream `@heroui/react/components/radio`.
 *
 * The implementation lives in `src/radio-group/` (Radio depends on RadioGroup
 * context). This folder keeps the canonical layout so imports work the React way:
 *
 *   import { Radio } from 'heroui-vue/radio'
 *
 * @see https://www.heroui.com/docs/react/components/radio-group
 */
import { Radio, RadioRoot, RadioControl, RadioIndicator, RadioContent } from '../radio-group'
export { Radio, RadioRoot, RadioControl, RadioIndicator, RadioContent }
export { radioVariants } from '@heroui/styles'
export type { RadioVariants } from '@heroui/styles'
