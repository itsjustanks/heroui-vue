import type { ComputedRef, InjectionKey } from 'vue'
import type { SwitchGroupVariants, switchGroupVariants } from '@heroui/styles'

export interface SwitchGroupContext {
  orientation: ComputedRef<SwitchGroupVariants['orientation']>
  slots: ComputedRef<ReturnType<typeof switchGroupVariants>>
}

export const SWITCH_GROUP_CONTEXT: InjectionKey<SwitchGroupContext> = Symbol('SwitchGroupContext')
