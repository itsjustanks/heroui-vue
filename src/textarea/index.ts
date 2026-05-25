/**
 * @see https://www.heroui.com/docs/react/components/text-area
 */
import { TextAreaRoot } from './textarea'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const TextArea = Object.assign(TextAreaRoot, {
  Root: TextAreaRoot,
})

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export { TextAreaRoot }

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { textAreaVariants } from '@heroui/styles'
export type { TextAreaVariants, TextAreaVariants as TextAreaProps } from '@heroui/styles'
