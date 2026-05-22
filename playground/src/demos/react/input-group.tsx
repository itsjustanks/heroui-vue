import { InputGroup, Label, TextField } from '@heroui/react'

/** InputGroup demo — HeroUI v3 React, for side-by-side parity. */
export default function InputGroupDemo() {
  return (
    <div className="demo-col">
      <TextField className="w-full max-w-[280px]" name="email">
        <Label>Email address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <svg className="size-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6.5L22 7" />
            </svg>
          </InputGroup.Prefix>
          <InputGroup.Input className="w-full max-w-[280px]" placeholder="name@email.com" />
        </InputGroup>
      </TextField>
      <TextField className="w-full max-w-[280px]" name="search">
        <Label>Search</Label>
        <InputGroup>
          <InputGroup.Input placeholder="Search..." />
          <InputGroup.Suffix>
            <kbd className="text-xs text-muted">⌘K</kbd>
          </InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </div>
  )
}
