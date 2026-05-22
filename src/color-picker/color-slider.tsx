import { computed, defineComponent, inject, provide, ref, type ComputedRef, type HTMLAttributes, type InjectionKey, type PropType, type Ref } from 'vue'
import { colorSliderVariants, type ColorSliderVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { formatColor, hsvToRgb, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'

const clamp = (n: number): number => Math.min(1, Math.max(0, n))
const FALLBACK: TColorValue = { h: 0, s: 0, v: 0, a: 1 }

/** Channels this slider can drive. */
export type TColorSliderChannel = 'hue' | 'saturation' | 'brightness' | 'lightness' | 'red' | 'green' | 'blue' | 'alpha'

/** Channel → [min, max] domain. */
const CHANNEL_RANGE: Record<TColorSliderChannel, [number, number]> = {
  hue: [0, 360],
  saturation: [0, 100],
  brightness: [0, 100],
  lightness: [0, 100],
  red: [0, 255],
  green: [0, 255],
  blue: [0, 255],
  alpha: [0, 1]
}

function readChannel (c: TColorValue, channel: TColorSliderChannel): number {
  switch (channel) {
    case 'hue': return c.h
    case 'saturation': return c.s
    case 'brightness':
    case 'lightness': return c.v
    case 'alpha': return c.a
    default: return hsvToRgb(c)[channel === 'red' ? 'r' : channel === 'green' ? 'g' : 'b']
  }
}

function patchChannel (channel: TColorSliderChannel, raw: number): Partial<TColorValue> {
  switch (channel) {
    case 'hue': return { h: raw }
    case 'saturation': return { s: raw }
    case 'brightness':
    case 'lightness': return { v: raw }
    case 'alpha': return { a: raw }
    default: return {}
  }
}

function trackGradient (c: TColorValue, channel: TColorSliderChannel): string {
  if (channel === 'hue') {
    return 'linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)'
  }
  if (channel === 'alpha') {
    const opaque = formatColor({ ...c, a: 1 }, 'rgb')
    return `linear-gradient(to right,transparent,${opaque})`
  }
  const range = CHANNEL_RANGE[channel]
  const lo = formatColor({ ...c, ...patchChannel(channel, range[0]) }, 'rgb')
  const hi = formatColor({ ...c, ...patchChannel(channel, range[1]) }, 'rgb')
  return `linear-gradient(to right,${lo},${hi})`
}

/** Per-slider context — Track/Thumb/Output read state + rail ref from here. */
type TColorSliderInternal = {
  ratio: ComputedRef<number>
  gradient: ComputedRef<string>
  output: ComputedRef<string>
  channelValue: ComputedRef<number>
  range: ComputedRef<[number, number]>
  channel: ComputedRef<TColorSliderChannel>
  disabled: ComputedRef<boolean>
  slots: ComputedRef<ReturnType<typeof colorSliderVariants>>
  railEl: Ref<HTMLElement | undefined>
  onPointerDown: (e: PointerEvent) => void
  onPointerMove: (e: PointerEvent) => void
  onPointerUp: (e: PointerEvent) => void
  onKeyDown: (e: KeyboardEvent) => void
}
const SLIDER_KEY: InjectionKey<TColorSliderInternal> = Symbol('heroui-vue-color-slider')
const useSlider = (): TColorSliderInternal | null => inject(SLIDER_KEY, null)

/**
 * ColorSliderTrack — the gradient rail and pointer/keyboard interaction surface.
 * HeroUI v3 `ColorSlider.Track` (`data-slot="color-slider-track"`).
 */
export const ColorSliderTrack = defineComponent({
  name: 'ColorSliderTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const slider = useSlider()
    const fallback = colorSliderVariants()
    return () => {
      const slots_ = slider?.slots.value ?? fallback
      return (
        <div
          {...attrs}
          ref={slider?.railEl}
          data-slot="color-slider-track"
          role="slider"
          tabindex={slider?.disabled.value ? -1 : 0}
          aria-orientation="horizontal"
          aria-valuemin={slider?.range.value[0]}
          aria-valuemax={slider?.range.value[1]}
          aria-valuenow={slider?.channelValue.value}
          aria-label={`${slider?.channel.value ?? 'color'} value`}
          onPointerdown={slider?.onPointerDown}
          onPointermove={slider?.onPointerMove}
          onPointerup={slider?.onPointerUp}
          onKeydown={slider?.onKeyDown}
          style={{ background: slider?.gradient.value }}
          class={cn(slots_.track(), props.class)}
        >
          {slots.default?.()}
        </div>
      )
    }
  }
})

/**
 * ColorSliderThumb — the draggable handle, positioned from the slider ratio.
 * HeroUI v3 `ColorSlider.Thumb` (`data-slot="color-slider-thumb"`).
 */
export const ColorSliderThumb = defineComponent({
  name: 'ColorSliderThumb',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const slider = useSlider()
    const fallback = colorSliderVariants()
    return () => {
      const slots = slider?.slots.value ?? fallback
      return (
        <div
          {...attrs}
          data-slot="color-slider-thumb"
          class={cn(slots.thumb(), props.class)}
          style={{ left: `${(slider?.ratio.value ?? 0) * 100}%` }}
        />
      )
    }
  }
})

/**
 * ColorSliderOutput — the formatted channel value readout.
 * HeroUI v3 `ColorSlider.Output` (`data-slot="color-slider-output"`).
 */
export const ColorSliderOutput = defineComponent({
  name: 'ColorSliderOutput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const slider = useSlider()
    const fallback = colorSliderVariants()
    return () => {
      const slots_ = slider?.slots.value ?? fallback
      return (
        <output {...attrs} data-slot="color-slider-output" class={cn(slots_.output(), props.class)}>
          {slots.default ? slots.default() : slider?.output.value}
        </output>
      )
    }
  }
})

/**
 * ColorSliderRoot — a single-channel slider (hue / alpha / saturation / …).
 * HeroUI v3 `ColorSlider.Root` (`data-slot="color-slider"`). Computes
 * `colorSliderVariants` and provides the slot map + rail state to compound parts.
 *
 * reka-ui (2.8) ships no color primitive; pointer/keyboard logic lives in setup.
 */
export const ColorSliderRoot = defineComponent({
  name: 'ColorSlider',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    channel: { type: String as PropType<TColorSliderChannel>, default: 'hue' },
    colorSpace: { type: String as PropType<'hsb' | 'hsl' | 'rgb'>, default: 'hsb' },
    isDisabled: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = useColorPickerContext()
    const railEl = ref<HTMLElement>()
    const dragging = ref(false)

    const color = computed<TColorValue>(() => ctx?.color.value ?? FALLBACK)
    const range = computed(() => CHANNEL_RANGE[props.channel])
    const channelValue = computed(() => readChannel(color.value, props.channel))
    const ratio = computed(() => {
      const [min, max] = range.value
      return clamp((channelValue.value - min) / (max - min))
    })
    const gradient = computed(() => trackGradient(color.value, props.channel))
    const output = computed(() => props.channel === 'alpha'
      ? `${Math.round(channelValue.value * 100)}%`
      : props.channel === 'hue'
        ? `${Math.round(channelValue.value)}°`
        : String(Math.round(channelValue.value))
    )
    const sliderSlots = computed(() => colorSliderVariants())

    const setFromRatio = (r: number): void => {
      if (!ctx) return
      const [min, max] = range.value
      let raw = min + clamp(r) * (max - min)
      raw = props.channel === 'alpha' ? Number(raw.toFixed(2)) : Math.round(raw)
      ctx.patchColor(patchChannel(props.channel, raw))
    }

    const updateFromEvent = (e: PointerEvent): void => {
      if (props.isDisabled || !railEl.value) return
      const rect = railEl.value.getBoundingClientRect()
      setFromRatio((e.clientX - rect.left) / rect.width)
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
      if (props.isDisabled) return
      const [min, max] = range.value
      const span = max - min
      const small = props.channel === 'alpha' ? 0.01 : 1
      const big = props.channel === 'alpha' ? 0.1 : span / 10
      const step = e.shiftKey ? big : small
      let delta = 0
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') delta = -step
      else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') delta = step
      else if (e.key === 'Home') {
        setFromRatio(0); e.preventDefault(); return
      } else if (e.key === 'End') {
        setFromRatio(1); e.preventDefault(); return
      } else return
      setFromRatio(ratio.value + delta / span)
      e.preventDefault()
    }

    provide(SLIDER_KEY, {
      ratio,
      gradient,
      output,
      channelValue,
      range,
      channel: computed(() => props.channel),
      disabled: computed(() => props.isDisabled),
      slots: sliderSlots,
      railEl,
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onKeyDown
    })

    return () => (
      <div
        {...attrs}
        role="group"
        aria-label={(attrs['aria-label'] as string | undefined) ?? `${props.channel} slider`}
        data-channel={props.channel}
        data-disabled={props.isDisabled || undefined}
        data-slot="color-slider"
        class={cn(sliderSlots.value.base(), props.class)}
      >
        {slots.default
          ? slots.default()
          : (
            <ColorSliderTrack>
              <ColorSliderThumb />
            </ColorSliderTrack>
          )}
      </div>
    )
  }
})

export default ColorSliderRoot
