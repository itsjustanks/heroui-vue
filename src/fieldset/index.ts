/**
 * Fieldset — re-export folder mirroring upstream
 * `@heroui/react/components/fieldset`. Implementation lives in `src/field/`;
 * this folder adds a `FieldsetActions` part and the canonical compound shape.
 *
 * Compound API (HeroUI v3): `Fieldset`, `Fieldset.Root`, `Fieldset.Legend`,
 * `Fieldset.Group`, `Fieldset.Actions`.
 *
 * @see https://www.heroui.com/docs/react/components/fieldset
 */
import FieldSet from '../field/field-set'
import FieldLegend from '../field/field-legend'
import FieldGroup from '../field/field-group'
import { FieldsetActions } from './fieldset-actions'

/** Compound — `Fieldset.Root`, `.Legend`, `.Group`, `.Actions` (HeroUI v3 API). */
export const Fieldset = Object.assign(FieldSet, {
  Root: FieldSet,
  Legend: FieldLegend,
  Group: FieldGroup,
  Actions: FieldsetActions,
})

export {
  FieldSet as FieldsetRoot,
  FieldLegend as FieldsetLegend,
  FieldGroup,
  FieldsetActions,
}
export { fieldsetVariants } from '@heroui/styles'
export type { FieldsetVariants } from '@heroui/styles'
