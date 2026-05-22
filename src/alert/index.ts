/**
 * Alert — a faithful Vue port of HeroUI v3 `Alert`.
 *
 * Compound API (HeroUI v3): `Alert`, `Alert.Root`, `Alert.Indicator`,
 * `Alert.Content`, `Alert.Title`, `Alert.Description`.
 * Flat named exports are also available for callers that prefer named imports.
 */
import { AlertRoot } from './alert'
import { AlertIndicator } from './alert-indicator'
import { AlertContent } from './alert-content'
import { AlertTitle } from './alert-title'
import { AlertDescription } from './alert-description'

/** Compound component — `Alert.Indicator`, `Alert.Content`, … (HeroUI v3 API). */
export const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Indicator: AlertIndicator,
  Content: AlertContent,
  Title: AlertTitle,
  Description: AlertDescription
})

export { AlertRoot, AlertIndicator, AlertContent, AlertTitle, AlertDescription }
export { alertVariants } from '@heroui/styles'
export type { AlertVariants } from '@heroui/styles'
