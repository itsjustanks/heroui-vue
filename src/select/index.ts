/**
 * Select — HeroUI v3 compound select over reka-ui (headless behaviour).
 *
 * Compound API (HeroUI v3): `Select`, `Select.Root`, `Select.Trigger`,
 * `Select.Value`, `Select.Indicator`, `Select.Popover`.
 */
import { SelectRoot } from './select'
import { SelectTrigger } from './select-trigger'
import { SelectValue } from './select-value'
import { SelectIndicator } from './select-indicator'
import { SelectPopover } from './select-popover'

/** Compound component — `Select.Trigger`, `Select.Value`, … (HeroUI v3 API). */
export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Indicator: SelectIndicator,
  Popover: SelectPopover
})

export { SelectRoot, SelectTrigger, SelectValue, SelectIndicator, SelectPopover }

/** @deprecated Use `SelectPopover` — renamed in v1.0 to match HeroUI v3 React. */
export { SelectPopover as SelectContent } from './select-popover'

export { SelectGroup } from './select-group'
export { SelectItem } from './select-item'
export { SelectItemText } from './select-item-text'
export { SelectLabel } from './select-label'
export { SelectScrollDownButton } from './select-scroll-down-button'
export { SelectScrollUpButton } from './select-scroll-up-button'
export { SelectSeparator } from './select-separator'

export { selectVariants } from '@heroui/styles'
export type { SelectVariants } from '@heroui/styles'
