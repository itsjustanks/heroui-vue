import { computed, defineComponent, inject, provide, ref, type ComputedRef, type HTMLAttributes, type InjectionKey, type PropType } from 'vue'
import { colorAreaVariants, type ColorAreaVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { formatColor, hueToCss, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'

const clamp = (n: number): number => Math.min(1, Math.max(0, n))
const FALLBACK: TColorValue = { h: 0, s: 0, v: 0, a: 1 }

/** Per-area context — Thumb reads live color + slot classes from here. */
type TColorAreaInternal = {
  color: ComputedRef<TColorValue>
  slots: ComputedRef<ReturnType<typeof colorAreaVariants>>
}
const AREA_KEY: InjectionKey<TColorAreaInternal> = Symbol('heroui-vue-color-area')

/**
 * ColorAreaThumb — the draggable handle. HeroUI v3 `ColorArea.Thumb`
 * (`data-slot="color-area-thumb"`). Positions itself via saturation → x and
 * brightness → y from the shared area context.
 */
export const ColorAreaThumb = defineComponent({
  name: 'ColorAreaThumb',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const area = inject(AREA_KEY, null)
    const fallbackSlots = colorAreaVariants()
    return () => {
      const color = area?.color.value ?? FALLBACK
      const slots = area?.slots.value ?? fallbackSlots
      return (
        <div
          {...attrs}
          data-slot="color-area-thumb"
          class={cn(slots.thumb(), props.class)}
          style={{
            position: 'absolute',
            left: `${color.s}%`,
            top: `${100 - color.v}%`,
            transform: 'translate(-50%, -50%)',
            '--color-area-thumb-color': formatColor(color, 'rgb')
          }}
        />
      )
    }
  }
})

/**
 * ColorAreaRoot — the 2-D saturation/brightness picking surface. HeroUI v3
 * `ColorArea.Root` (`data-slot="color-area"`). Computes `colorAreaVariants` and
 * provides the slot map + live color to `ColorAreaThumb`.
 *
 * reka-ui (2.8) ships no color primitive; pointer/keyboard logic lives here.
 * `xChannel`/`yChannel`/`colorSpace` props are accepted for HeroUI API parity.
 */
export const ColorAreaRoot = defineComponent({
  name: 'ColorArea',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    colorSpace: { type: String as PropType<'hsb' | 'hsl' | 'rgb'>, default: 'hsb' },
    xChannel: { type: String, default: 'saturation' },
    yChannel: { type: String, default: 'brightness' },
    isDisabled: { type: Boolean, default: false },
    showDots: { type: Boolean as PropType<ColorAreaVariants['showDots']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = useColorPickerContext()
    const surface = ref<HTMLElement>()
    const dragging = ref(false)

    const color = computed<TColorValue>(() => ctx?.color.value ?? FALLBACK)
    const styles = computed(() => colorAreaVariants({ showDots: props.showDots }))

    provide(AREA_KEY, { color, slots: styles })

    const updateFromEvent = (e: PointerEvent): void => {
      if (props.isDisabled || !surface.value || !ctx) return
      const rect = surface.value.getBoundingClientRect()
      const x = clamp((e.clientX - rect.left) / rect.width)
      const y = clamp((e.clientY - rect.top) / rect.height)
      ctx.patchColor({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) })
    }

    const onPointerDown = (e: PointerEvent): void => {
      if (props.isDisabled) return
      dragging.value = true;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
      updateFromEvent(e)
    }
    const onPointerMove = (e: PointerEvent): void => {
      if (dragging.value) updateFromEvent(e)
    }
    const onPointerUp = (e: PointerEvent): void => {
      dragging.value = false;
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
    }
    const onKeyDown = (e: KeyboardEvent): void => {
      if (props.isDisabled || !ctx) return
      const step = e.shiftKey ? 10 : 1
      const c = color.value
      switch (e.key) {
        case 'ArrowLeft': ctx.patchColor({ s: c.s - step }); break
        case 'ArrowRight': ctx.patchColor({ s: c.s + step }); break
        case 'ArrowUp': ctx.patchColor({ v: c.v + step }); break
        case 'ArrowDown': ctx.patchColor({ v: c.v - step }); break
        default: return
      }
      e.preventDefault()
    }

    return () => (
      <div
        {...attrs}
        ref={surface}
        role="application"
        tabindex={props.isDisabled ? -1 : 0}
        aria-label={(attrs['aria-label'] as string | undefined) ?? 'Color area'}
        aria-disabled={props.isDisabled || undefined}
        data-disabled={props.isDisabled ? 'true' : undefined}
        data-color-space={props.colorSpace}
        data-slot="color-area"
        onPointerdown={onPointerDown}
        onPointermove={onPointerMove}
        onPointerup={onPointerUp}
        onKeydown={onKeyDown}
        style={{
          '--color-area-background': [
            'linear-gradient(to top, black, transparent)',
            'linear-gradient(to right, white, transparent)',
            hueToCss(color.value.h)
          ].join(', ')
        }}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default ? slots.default() : <ColorAreaThumb />}
      </div>
    )
  }
})

export default ColorAreaRoot
