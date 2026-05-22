import { inject, provide, type InjectionKey, type Ref } from 'vue'
import type { TPaginationSize } from './pagination-variants'

/** Context shared from `PaginationRoot` to its descendant parts. */
interface IPaginationContext {
  /** Current size step — consumed by Link / Previous / Next / Ellipsis. */
  size: Ref<TPaginationSize>
}

const PAGINATION_INJECTION_KEY: InjectionKey<IPaginationContext> =
  Symbol('HeroUIPaginationContext')

/** Provide pagination context from `PaginationRoot`. */
export function providePaginationContext (context: IPaginationContext): void {
  provide(PAGINATION_INJECTION_KEY, context)
}

/** Inject pagination context within a descendant part. */
export function usePaginationContext (): IPaginationContext | undefined {
  return inject(PAGINATION_INJECTION_KEY, undefined)
}
