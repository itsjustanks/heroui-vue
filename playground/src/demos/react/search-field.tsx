import { Label, SearchField } from '@heroui/react'

/** SearchField demo — HeroUI v3 React, mirrors the SearchField default story. */
export default function SearchFieldDemo() {
  return (
    <div className="demo-row">
      <SearchField name="search">
        <Label>Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[280px]" placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
    </div>
  )
}
