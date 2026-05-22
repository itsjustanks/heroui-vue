/**
 * Form — faithful Vue port of HeroUI v3 `Form`.
 *
 * Compound API (HeroUI v3): `Form`, `Form.Root`.
 * Flat export: `FormRoot`.
 *
 * HeroUI v3 `Form` ships only `FormRoot` — a plain `<form>` wrapper with no
 * variant classes. Field-level primitives (`Field`, `FieldLabel`, `FieldError`,
 * `FieldDescription`) live in the `@/field` family per the heroui-vue
 * architecture and are re-exported here for backwards-compatible call sites.
 */
import { FormRoot } from './form-root'

/** Compound component — `Form.Root` (HeroUI v3 API). */
export const Form = Object.assign(FormRoot, {
  Root: FormRoot,
})

export { FormRoot }

// Field-family re-exports for backwards-compatible call sites.
export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  fieldVariants,
  type FieldVariants
} from '@/field'

// Backwards-compatible aliases (deprecated — use Field* directly).
export { Field as FormItem } from '@/field'
export { FieldLabel as FormLabel } from '@/field'
export { FieldError as FormMessage } from '@/field'
export { FieldDescription as FormDescription } from '@/field'
