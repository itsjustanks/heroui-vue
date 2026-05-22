/**
 * Tabs — faithful Vue port of HeroUI v3 `Tabs`.
 *
 * Compound API (HeroUI v3): `Tabs`, `Tabs.Root`, `Tabs.ListContainer`,
 * `Tabs.List`, `Tabs.Tab`, `Tabs.Indicator`, `Tabs.Separator`, `Tabs.Panel`.
 * Flat part exports: `TabsRoot`, `TabListContainer`, `TabList`, `Tab`,
 * `TabIndicator`, `TabSeparator`, `TabPanel`.
 */
import { TabsRoot } from './tabs'
import { TabListContainer, TabList } from './tabs-list'
import { Tab } from './tabs-trigger'
import { TabPanel, TabIndicator, TabSeparator } from './tabs-content'

/** Compound component — `Tabs.ListContainer`, `Tabs.List`, … (HeroUI v3 API). */
export const Tabs = Object.assign(TabsRoot, {
  Root:          TabsRoot,
  ListContainer: TabListContainer,
  List:          TabList,
  Tab,
  Indicator:     TabIndicator,
  Separator:     TabSeparator,
  Panel:         TabPanel,
})

export { TabsRoot, TabListContainer, TabList, Tab, TabIndicator, TabSeparator, TabPanel }
export { tabsVariants } from '@heroui/styles'
export type { TabsVariants } from '@heroui/styles'
