import { defineComponent } from 'vue'
import styles from './search-result-shimmer.module.css'

/** Pseudo-random title width (30-70%), deterministic per row index. */
function getTitleWidth (index: number): number {
  const base = 30
  const variation = (index * 13) % 40
  return base + variation
}

/** Pseudo-random subtitle width (35-60%), deterministic per row index. */
function getSubtitleWidth (index: number): number {
  const base = 35
  const variation = (index * 17) % 25
  return base + variation
}

/**
 * SearchResultShimmer — HeroUI-Vue primitive: a list-of-results loading
 * placeholder (avatar + title + subtitle rows).
 *
 * Faithful port of `shadcn/shimmer/SearchResultShimmer.vue`. Behaviour
 * (deterministic varied widths, staggered per-row animation delays, the
 * `skeleton-pulse` keyframe) is identical to the shadcn source — only the
 * authoring syntax changed and surface colours adapted to the repo's
 * `bg-muted` token for HeroUI v3 taste.
 */
export const SearchResultShimmer = defineComponent({
  name: 'SearchResultShimmer',
  props: {
    count: { type: Number, default: 5 }
  },
  setup (props) {
    return () => (
      <div class="animate-pulse">
        <div class="space-y-2 px-3 py-3">
          {Array.from({ length: props.count }, (_, idx) => idx + 1).map((i) => (
            <div key={`shimmer-${i}`} class="flex items-center gap-2 p-2">
              {/* Icon/Avatar placeholder */}
              <div
                data-slot="base"
                class={['skeleton skeleton--shimmer size-8 rounded', styles.skeletonPulse]}
                style={{ animationDelay: `${i * 50}ms` }}
              />

              {/* Content placeholder */}
              <div class="flex-1 space-y-1.5">
                {/* Title */}
                <div
                  data-slot="base"
                  class={['skeleton skeleton--shimmer h-3 rounded', styles.skeletonPulse]}
                  style={{
                    width: `${getTitleWidth(i)}%`,
                    animationDelay: `${i * 50 + 50}ms`
                  }}
                />

                {/* Subtitle/metadata */}
                <div
                  data-slot="base"
                  class={['skeleton skeleton--shimmer h-2.5 rounded opacity-60', styles.skeletonPulse]}
                  style={{
                    width: `${getSubtitleWidth(i)}%`,
                    animationDelay: `${i * 50 + 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
})

export default SearchResultShimmer
