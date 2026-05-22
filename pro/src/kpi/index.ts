import {
  KPIActions,
  KPIChart,
  KPIContent,
  KPIFooter,
  KPIHeader,
  KPIIcon,
  KPIProgress,
  KPIRoot,
  KPISeparator,
  KPITitle,
  KPITrend,
  KPIValue
} from './kpi'

export const KPI = Object.assign(KPIRoot, {
  Actions: KPIActions,
  Chart: KPIChart,
  Content: KPIContent,
  Footer: KPIFooter,
  Header: KPIHeader,
  Icon: KPIIcon,
  Progress: KPIProgress,
  Root: KPIRoot,
  Separator: KPISeparator,
  Title: KPITitle,
  Trend: KPITrend,
  Value: KPIValue
})

export {
  KPIActions,
  KPIChart,
  KPIContent,
  KPIFooter,
  KPIHeader,
  KPIIcon,
  KPIProgress,
  KPIRoot,
  KPISeparator,
  KPITitle,
  KPITrend,
  KPIValue
}

export { kpiVariants } from './kpi.styles'
export type { KPIVariants } from './kpi.styles'
