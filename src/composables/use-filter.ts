import { computed } from 'vue'

export interface UseFilterOptions {
  /** Sensitivity for collation. Mirrors React Aria's `useFilter` option. */
  sensitivity?: 'base' | 'accent' | 'case' | 'variant'
}

export interface UseFilterReturn {
  contains: (needle: string, haystack: string) => boolean
  startsWith: (needle: string, haystack: string) => boolean
  endsWith: (needle: string, haystack: string) => boolean
}

/**
 * useFilter — Vue equivalent of React Aria's `useFilter`. Returns case- and
 * accent-aware string predicates using `Intl.Collator` so demos that filter
 * lists (Autocomplete, ComboBox, Select) work identically.
 *
 * Defaults to `sensitivity: 'base'` which makes "café".contains("cafe") true.
 */
export function useFilter (options: UseFilterOptions = {}): UseFilterReturn {
  const sensitivity = options.sensitivity ?? 'base'
  const collator = computed(() => new Intl.Collator(undefined, {
    usage: 'search',
    sensitivity,
  }))

  function localeCompare (a: string, b: string): number {
    return collator.value.compare(a, b)
  }

  function startsWith (haystack: string, needle: string): boolean {
    if (needle.length === 0) return true
    if (needle.length > haystack.length) return false
    return localeCompare(haystack.slice(0, needle.length), needle) === 0
  }

  function endsWith (haystack: string, needle: string): boolean {
    if (needle.length === 0) return true
    if (needle.length > haystack.length) return false
    return localeCompare(haystack.slice(haystack.length - needle.length), needle) === 0
  }

  function contains (haystack: string, needle: string): boolean {
    if (needle.length === 0) return true
    if (needle.length > haystack.length) return false
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      if (localeCompare(haystack.slice(i, i + needle.length), needle) === 0) return true
    }
    return false
  }

  return { contains, startsWith, endsWith }
}
