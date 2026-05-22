import { defineComponent } from 'vue'

/**
 * SidebarShimmer — HeroUI-Vue primitive: a sidebar nav loading placeholder,
 * with collapsed/expanded layouts.
 *
 * Faithful port of `shadcn/shimmer/SidebarShimmer.vue`. Behaviour (the
 * `number` row count and `expanded` layout switch) is identical to the shadcn
 * source — only the authoring syntax changed and surface colours adapted to
 * the repo's `bg-muted` token for HeroUI v3 taste.
 */
export const SidebarShimmer = defineComponent({
  name: 'SidebarShimmer',
  props: {
    number: { type: Number, default: 3 },
    expanded: { type: Boolean, default: true }
  },
  setup (props) {
    return () => (
      <div class="animate-pulse">
        <div class={['space-y-4', props.expanded ? 'p-5' : 'px-2 py-3']}>
          {Array.from({ length: props.number }, (_, idx) => idx + 1).map((i) => (
            <div
              key={`shimmer-${i}`}
              class={props.expanded ? 'flex gap-x-2' : 'flex flex-col items-center gap-y-2'}
            >
              <p class={['rounded bg-muted px-3 py-3', props.expanded ? 'h-5 w-4' : 'size-5']} />
              <p
                class={
                  props.expanded
                    ? 'h-5 w-full rounded bg-muted px-3 py-3'
                    : 'h-2.5 w-full rounded bg-muted px-1'
                }
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
})

export default SidebarShimmer
