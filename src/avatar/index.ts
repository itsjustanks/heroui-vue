/**
 * Avatar — a faithful Vue port of HeroUI v3 `Avatar`.
 *
 * Compound API (HeroUI v3): `Avatar`, `Avatar.Image`, `Avatar.Fallback`.
 * Flat named exports (`AvatarRoot`, `AvatarImage`, `AvatarFallback`) are also
 * available for callers that prefer named imports.
 *
 * Behaviour delegates to reka-ui `AvatarRoot` / `AvatarImage` / `AvatarFallback`;
 * all styling comes from `@heroui/styles` `avatarVariants`.
 */
import { AvatarRoot } from './avatar'
import { AvatarImage } from './avatar-image'
import { AvatarFallback } from './avatar-fallback'

/** Compound component — `Avatar.Image`, `Avatar.Fallback` (HeroUI v3 API). */
export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback
})

export { AvatarRoot, AvatarImage, AvatarFallback }
export { avatarVariants } from '@heroui/styles'
export type { AvatarVariants } from '@heroui/styles'
