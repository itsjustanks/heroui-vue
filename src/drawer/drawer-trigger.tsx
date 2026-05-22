import { defineComponent, inject } from 'vue'
import { DialogTrigger as RekaDialogTrigger } from 'reka-ui'
import { drawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps, reactDisabled, reactDisabledProps, reactPressAttrs } from '@/lib/react-compat'
import { DRAWER_CONTEXT } from './drawer-context'

/**
 * DrawerTrigger — opens the drawer (HeroUI `drawer__trigger`).
 *
 * Mirrors HeroUI v3 `DrawerTrigger` — renders `data-slot="drawer-trigger"`.
 * Uses reka-ui `DialogTrigger` with `asChild` so the inner element acts as the
 * actual trigger without creating nested interactive elements.
 */
export const DrawerTrigger = defineComponent({
  name: 'DrawerTrigger',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    ...reactDisabledProps
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    return () => {
      const isDisabled = reactDisabled(props)

      return (
        <RekaDialogTrigger asChild>
          <div
            {...reactPressAttrs(attrs)}
            aria-disabled={isDisabled || undefined}
            data-disabled={isDisabled ? 'true' : undefined}
            data-slot="drawer-trigger"
            role="button"
            class={cn((ctx?.slots.value ?? drawerVariants()).trigger(), reactClass(props))}
          >
            {slots.default?.()}
          </div>
        </RekaDialogTrigger>
      )
    }
  }
})

export default DrawerTrigger
