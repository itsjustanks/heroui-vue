import { computed, defineComponent, ref, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { formatColor, hueToCss, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'

const clamp = (n: number): number => Math.min(1, Math.max(0, n))
const FALLBACK: TColorValue = { h: 0, s: 0, v: 0, a: 1 }

/**
 * ColorArea.Thumb — the draggable handle. Reads the live color from the
 * ColorPicker context and positions itself (saturation → x, brightness → y).
 */
const ColorAreaThumb = defineComponent({
  name: 'ColorAreaThumb',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = useColorPickerContext()
    const color = computed<TColorValue>(() => ctx?.color.value ?? FALLBACK)
    return () => (
      <div
        {...attrs}
        class={cn('color-area__thumb', props.class)}
        style={{
          left: `${color.value.s}%`,
          top: `${100 - color.value.v}%`,
          background: formatColor(color.value, 'rgb')
        }}
      />
    )
  }
})

/**
 * ColorArea — the 2-D saturation/brightness picking surface. HeroUI's `ColorArea`
 * is built on React Aria; reka-ui (2.8) ships no color primitive, so the
 * pointer/keyboard logic lives here in `setup()` (per the build brief).
 * `xChannel`/`yChannel`/`colorSpace` are accepted for HeroUI API parity — the
 * working space is HSB, x = saturation, y = brightness.
 *
 * Exposes the `ColorArea.Thumb` compound part.
 */
export const ColorArea = defineComponent({
  name: 'ColorArea',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    colorSpace: { type: String as PropType<'hsb' | 'hsl' | 'rgb'>, default: 'hsb' },
    xChannel: { type: String, default: 'saturation' },
    yChannel: { type: String, default: 'brightness' },
    isDisabled: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = useColorPickerContext()
    const surface = ref<HTMLElement>()
    const dragging = ref(false)

    const color = computed<TColorValue>(() => ctx?.color.value ?? FALLBACK)

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
        data-disabled={props.isDisabled || undefined}
        data-color-space={props.colorSpace}
        onPointerdown={onPointerDown}
        onPointermove={onPointerMove}
        onPointerup={onPointerUp}
        onKeydown={onKeyDown}
        style={{ backgroundColor: hueToCss(color.value.h) }}
        class={cn(
          'color-area',
          props.class
        )}
      >
        {slots.default ? slots.default() : <ColorAreaThumb />}
      </div>
    )
  }
})

export { ColorAreaThumb }
export default ColorArea
