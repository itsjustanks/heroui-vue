import { computed, defineComponent, inject, provide, ref, type ComputedRef, type HTMLAttributes, type InjectionKey, type PropType, type Ref } from 'vue'
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

/** Read a channel value from the working color model. */
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

/** Patch a channel value back onto the working color model. */
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

/** Track gradient background for the given channel. */
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

/** Per-slider context — Track/Thumb/Output read state + the rail ref from here. */
type TColorSliderInternal = {
  ratio: ComputedRef<number>
  gradient: ComputedRef<string>
  output: ComputedRef<string>
  channelValue: ComputedRef<number>
  range: ComputedRef<[number, number]>
  channel: ComputedRef<TColorSliderChannel>
  disabled: ComputedRef<boolean>
  railEl: Ref<HTMLElement | undefined>
  onPointerDown: (e: PointerEvent) => void
  onPointerMove: (e: PointerEvent) => void
  onPointerUp: (e: PointerEvent) => void
  onKeyDown: (e: KeyboardEvent) => void
}
const SLIDER_KEY: InjectionKey<TColorSliderInternal> = Symbol('HeroColorSlider')
const useSlider = (): TColorSliderInternal | null => inject(SLIDER_KEY, null)

/**
 * ColorSlider.Track — the gradient rail AND the pointer/keyboard surface. HeroUI
 * places the interaction on the track; the rail handlers from the parent
 * `ColorSlider` are wired here.
 */
const ColorSliderTrack = defineComponent({
  name: 'ColorSliderTrack',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const slider = useSlider()
    return () => (
      <div
        {...attrs}
        ref={slider?.railEl}
        data-slot="track"
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
        class={cn('color-slider__track', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

/** ColorSlider.Thumb — the draggable handle, positioned from the slider ratio. */
const ColorSliderThumb = defineComponent({
  name: 'ColorSliderThumb',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const slider = useSlider()
    return () => (
      <div
        {...attrs}
        data-slot="thumb"
        class={cn('color-slider__thumb', props.class)}
        style={{ left: `${(slider?.ratio.value ?? 0) * 100}%` }}
      />
    )
  }
})

/** ColorSlider.Output — the formatted channel value readout. */
const ColorSliderOutput = defineComponent({
  name: 'ColorSliderOutput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const slider = useSlider()
    return () => (
      <output {...attrs} class={cn('color-slider__output', props.class)}>
        {slots.default ? slots.default() : slider?.output.value}
      </output>
    )
  }
})

/**
 * ColorSlider — a single-channel slider (hue / alpha / saturation / …). HeroUI's
 * `ColorSlider` is built on React Aria; reka-ui (2.8) ships no color primitive
 * so the pointer/keyboard logic lives in `setup()` (per the build brief). It
 * drives the ColorPicker context; the compound parts (`Track`, `Thumb`,
 * `Output`) read ratio/gradient/readout — and the Track also receives the rail
 * handlers — from a per-slider context.
 *
 * `colorSpace` is accepted for HeroUI API parity (HSB is the working space).
 */
export const ColorSlider = defineComponent({
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
        class={cn('color-slider', props.class)}
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

export { ColorSliderTrack, ColorSliderThumb, ColorSliderOutput }
export default ColorSlider
