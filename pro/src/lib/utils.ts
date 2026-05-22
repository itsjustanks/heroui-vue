import type { HTMLAttributes } from 'vue'

type TClassValue = HTMLAttributes['class'] | false | null | undefined

export function cn (...values: TClassValue[]) {
  return values.flatMap((value) => {
    if (!value) return []
    if (Array.isArray(value)) return value
    if (typeof value === 'object') {
      return Object.entries(value)
        .filter(([, enabled]) => Boolean(enabled))
        .map(([className]) => className)
    }
    return String(value).split(/\s+/).filter(Boolean)
  }).join(' ')
}
