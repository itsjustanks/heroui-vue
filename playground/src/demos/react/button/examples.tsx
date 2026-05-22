import { Button } from '@heroui/react'
import { currentExample } from '../../shared'

function IconPlus() {
  return <svg className="demo-icon" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M8.75 2.5a.75.75 0 0 0-1.5 0v4.75H2.5a.75.75 0 0 0 0 1.5h4.75v4.75a.75.75 0 0 0 1.5 0V8.75h4.75a.75.75 0 0 0 0-1.5H8.75z" /></svg>
}

function IconSearch() {
  return <svg className="demo-icon" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l2.79 2.79a.75.75 0 1 1-1.06 1.06z" clipRule="evenodd" /></svg>
}

function IconX() {
  return <svg className="demo-icon" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8L3.47 4.53a.75.75 0 0 1 0-1.06" clipRule="evenodd" /></svg>
}

export default function ButtonExamples() {
  const example = currentExample()

  if (example === 'variants' || example === 'outline-variant' || example === 'custom-variants') {
    return (
      <div className="demo-row">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="danger-soft">Danger Soft</Button>
      </div>
    )
  }

  if (example === 'sizes') {
    return (
      <div className="demo-row">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    )
  }

  if (example === 'disabled') {
    return (
      <div className="demo-row">
        <Button isDisabled>Disabled</Button>
        <Button variant="secondary" isDisabled>Secondary</Button>
        <Button variant="outline" isDisabled>Outline</Button>
      </div>
    )
  }

  if (example === 'loading' || example === 'loading-state') {
    return (
      <div className="demo-row">
        <Button isPending>Loading</Button>
        <Button variant="secondary" isPending>Saving</Button>
      </div>
    )
  }

  if (example === 'full-width') {
    return (
      <div className="demo-col">
        <Button fullWidth>Continue</Button>
        <Button fullWidth variant="secondary">Save Draft</Button>
      </div>
    )
  }

  if (example === 'icon-only') {
    return (
      <div className="demo-row">
        <Button aria-label="Add" isIconOnly><IconPlus /></Button>
        <Button aria-label="Search" isIconOnly variant="secondary"><IconSearch /></Button>
        <Button aria-label="Delete" isIconOnly variant="danger"><IconX /></Button>
      </div>
    )
  }

  if (example === 'with-icons' || example === 'social' || example === 'ripple-effect') {
    return (
      <div className="demo-row">
        <Button><IconSearch />Search</Button>
        <Button variant="secondary"><IconPlus />Add Member</Button>
        <Button variant="danger"><IconX />Delete</Button>
      </div>
    )
  }

  if (example === 'custom-render-function') {
    return (
      <Button render={(props) => <button {...props} data-custom="true" />}>
        Custom Element
      </Button>
    )
  }

  return <Button>Button</Button>
}
