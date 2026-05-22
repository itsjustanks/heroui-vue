/**
 * HeroUI-Vue Form — backwards-compatible re-exports from `heroui/field`, for
 * TanStack Form call sites. Mirrors how `shadcn/form` shimmed `shadcn/field`.
 * Part of the HeroUI-for-Vue primitive library (`.planning/prps/heroui-vue-library.md`).
 *
 * Component mapping: `FormItem`→`Field`, `FormLabel`→`FieldLabel`,
 * `FormMessage`→`FieldError`, `FormDescription`→`FieldDescription`.
 */
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

// Backwards-compatible aliases (deprecated — use Field* instead).
export { Field as FormItem } from '@/field'
export { FieldLabel as FormLabel } from '@/field'
export { FieldError as FormMessage } from '@/field'
export { FieldDescription as FormDescription } from '@/field'
