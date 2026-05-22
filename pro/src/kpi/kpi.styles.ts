import { cn } from '../lib/utils'

export type TKPIStatus = 'danger' | 'success' | 'warning'

export function kpiVariants () {
  return {
    actions: (className?: string) => cn('kpi__actions', className),
    base: (className?: string) => cn('kpi', className),
    chart: (className?: string) => cn('kpi__chart', className),
    content: (className?: string) => cn('kpi__content', className),
    footer: (className?: string) => cn('kpi__footer', className),
    header: (className?: string) => cn('kpi__header', className),
    icon: (className?: string) => cn('kpi__icon', className),
    progress: (className?: string) => cn('kpi__progress', className),
    separator: (className?: string) => cn('kpi__separator', className),
    title: (className?: string) => cn('kpi__title', className),
    trend: (className?: string) => cn('kpi__trend', className),
    value: (className?: string) => cn('kpi__value', className)
  }
}

export type TKPIVariants = ReturnType<typeof kpiVariants>
export type KPIVariants = TKPIVariants
