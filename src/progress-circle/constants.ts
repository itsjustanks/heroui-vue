/**
 * ProgressCircle geometry — verbatim from HeroUI v3's `progress-circle.tsx`.
 *
 * The ring is drawn in a `36×36` viewBox (`CENTER * 2`). `RADIUS` is inset by
 * half the stroke so the stroke does not clip; `CIRCUMFERENCE` is the SVG
 * `stroke-dasharray` length the `stroke-dashoffset` animates against.
 */
export const STROKE_WIDTH = 4
export const CENTER = 18
export const RADIUS = CENTER - STROKE_WIDTH / 2
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS
