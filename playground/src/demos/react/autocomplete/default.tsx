import { Autocomplete } from '@heroui/react'

/** Autocomplete default — React, mirrors HeroUI v3's basic Autocomplete demo. */
export default function AutocompleteDefault () {
  return (
    <div className="demo-col" style={{ maxWidth: '280px' }}>
      <Autocomplete placeholder="Pick a fruit" aria-label="Fruit">
        <Autocomplete.Item value="apple">Apple</Autocomplete.Item>
        <Autocomplete.Item value="banana">Banana</Autocomplete.Item>
        <Autocomplete.Item value="cherry">Cherry</Autocomplete.Item>
        <Autocomplete.Item value="grape">Grape</Autocomplete.Item>
        <Autocomplete.Item value="mango">Mango</Autocomplete.Item>
        <Autocomplete.Item value="pear">Pear</Autocomplete.Item>
      </Autocomplete>
    </div>
  )
}
