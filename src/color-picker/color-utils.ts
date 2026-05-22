/**
 * color-utils — HSV/RGB/HEX color math for the HeroUI-Vue ColorPicker.
 *
 * HeroUI v3's ColorPicker is built on React Aria's `Color` object + `parseColor`.
 * reka-ui (2.8) ships no color primitives, so the
 * saturation/hue/alpha logic lives here — a tiny self-contained color model that
 * the ColorPicker `setup()` drives. HSV ("hsb" in HeroUI terms) is the working
 * space for the saturation/brightness area + hue slider.
 */

/** RGB triplet, each channel 0-255. */
export type TRgb = { r: number; g: number; b: number }
/** HSV/HSB triple — hue 0-360, saturation/value 0-100. */
export type THsv = { h: number; s: number; v: number }
/** Full color value the ColorPicker tracks: HSV + alpha (0-1). */
export type TColorValue = { h: number; s: number; v: number; a: number }

const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))
const round = (n: number): number => Math.round(n)

/** Clamp + normalise a raw color value into safe ranges. */
export function normalizeColor (c: TColorValue): TColorValue {
  return {
    h: clamp(c.h, 0, 360),
    s: clamp(c.s, 0, 100),
    v: clamp(c.v, 0, 100),
    a: clamp(c.a, 0, 1)
  }
}

/** HSV → RGB. */
export function hsvToRgb ({ h, s, v }: THsv): TRgb {
  const sN = s / 100
  const vN = v / 100
  const c = vN * sN
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = vN - c
  let r = 0
  let g = 0
  let b = 0
  if (h < 60) { r = c; g = x } else if (h < 120) { r = x; g = c } else if (h < 180) {
    g = c; b = x
  } else if (h < 240) { g = x; b = c } else if (h < 300) { r = x; b = c } else { r = c; b = x }
  return { r: round((r + m) * 255), g: round((g + m) * 255), b: round((b + m) * 255) }
}

/** RGB → HSV. */
export function rgbToHsv ({ r, g, b }: TRgb): THsv {
  const rN = r / 255
  const gN = g / 255
  const bN = b / 255
  const max = Math.max(rN, gN, bN)
  const min = Math.min(rN, gN, bN)
  const d = max - min
  let h = 0
  if (d !== 0) {
    if (max === rN) h = 60 * (((gN - bN) / d) % 6)
    else if (max === gN) h = 60 * ((bN - rN) / d + 2)
    else h = 60 * ((rN - gN) / d + 4)
  }
  if (h < 0) h += 360
  const s = max === 0 ? 0 : d / max
  return { h: round(h), s: round(s * 100), v: round(max * 100) }
}

const toHexPair = (n: number): string => clamp(round(n), 0, 255).toString(16).padStart(2, '0')

/** RGB(+alpha) → hex string. 8-digit hex when alpha < 1. */
export function rgbToHex ({ r, g, b }: TRgb, a = 1): string {
  const base = `#${toHexPair(r)}${toHexPair(g)}${toHexPair(b)}`
  return a < 1 ? `${base}${toHexPair(a * 255)}` : base
}

/** Hex string (#rgb / #rrggbb / #rrggbbaa) → RGB + alpha. Returns null when invalid. */
export function hexToRgb (hex: string): (TRgb & { a: number }) | null {
  let h = hex.trim().replace(/^#/, '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  if (h.length === 4) h = h.split('').map((c) => c + c).join('')
  if (h.length !== 6 && h.length !== 8) return null
  if (!/^[0-9a-fA-F]+$/.test(h)) return null
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1
  return { r, g, b, a }
}

/** Parse any supported string (hex / rgb / rgba / hsl / hsla) into a TColorValue. */
export function parseColor (input: string | TColorValue): TColorValue {
  if (typeof input !== 'string') return normalizeColor(input)
  const str = input.trim()

  const hex = hexToRgb(str)
  if (hex) return normalizeColor({ ...rgbToHsv(hex), a: hex.a })

  const rgbMatch = str.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)\s*(?:[,/]\s*([\d.]+%?))?\s*\)$/i)
  if (rgbMatch) {
    const r = Number(rgbMatch[1])
    const g = Number(rgbMatch[2])
    const b = Number(rgbMatch[3])
    const a = rgbMatch[4] != null ? parseAlpha(rgbMatch[4]) : 1
    return normalizeColor({ ...rgbToHsv({ r, g, b }), a })
  }

  const hslMatch = str.match(/^hsla?\(\s*([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%\s*(?:[,/]\s*([\d.]+%?))?\s*\)$/i)
  if (hslMatch) {
    const h = Number(hslMatch[1])
    const s = Number(hslMatch[2])
    const l = Number(hslMatch[3])
    const a = hslMatch[4] != null ? parseAlpha(hslMatch[4]) : 1
    return normalizeColor({ ...hslToHsv(h, s, l), a })
  }

  // Fallback — opaque black.
  return { h: 0, s: 0, v: 0, a: 1 }
}

function parseAlpha (raw: string): number {
  if (raw.endsWith('%')) return clamp(Number(raw.slice(0, -1)) / 100, 0, 1)
  return clamp(Number(raw), 0, 1)
}

/** HSL → HSV. */
export function hslToHsv (h: number, s: number, l: number): THsv {
  const sN = s / 100
  const lN = l / 100
  const v = lN + sN * Math.min(lN, 1 - lN)
  const sv = v === 0 ? 0 : 2 * (1 - lN / v)
  return { h: round(h), s: round(sv * 100), v: round(v * 100) }
}

/** Serialise a color to a string in the requested format. */
export function formatColor (c: TColorValue, format: 'hex' | 'rgb' | 'hsl' | 'css' = 'hex'): string {
  const rgb = hsvToRgb(c)
  if (format === 'hex') return rgbToHex(rgb, c.a)
  if (format === 'rgb' || format === 'css') {
    return c.a < 1
      ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Number(c.a.toFixed(2))})`
      : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }
  // hsl
  const { h, s, l } = hsvToHsl(c)
  return c.a < 1
    ? `hsla(${h}, ${s}%, ${l}%, ${Number(c.a.toFixed(2))})`
    : `hsl(${h}, ${s}%, ${l}%)`
}

/** HSV → HSL. */
export function hsvToHsl ({ h, s, v }: THsv): { h: number; s: number; l: number } {
  const sN = s / 100
  const vN = v / 100
  const l = vN * (1 - sN / 2)
  const sl = l === 0 || l === 1 ? 0 : (vN - l) / Math.min(l, 1 - l)
  return { h: round(h), s: round(sl * 100), l: round(l * 100) }
}

/** Opaque CSS color (no alpha) for the saturation-area background base. */
export function hueToCss (h: number): string {
  return formatColor({ h, s: 100, v: 100, a: 1 }, 'rgb')
}
