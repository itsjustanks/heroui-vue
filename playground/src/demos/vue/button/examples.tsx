import { defineComponent } from 'vue'
import { Button } from '@itsjustanks/heroui-vue'
import { currentExample } from '../../shared'

function IconPlus() {
  return <svg class="demo-icon" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M8.75 2.5a.75.75 0 0 0-1.5 0v4.75H2.5a.75.75 0 0 0 0 1.5h4.75v4.75a.75.75 0 0 0 1.5 0V8.75h4.75a.75.75 0 0 0 0-1.5H8.75z" /></svg>
}

function IconSearch() {
  return <svg class="demo-icon" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l2.79 2.79a.75.75 0 1 1-1.06 1.06z" clip-rule="evenodd" /></svg>
}

function IconX() {
  return <svg class="demo-icon" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8L3.47 4.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd" /></svg>
}

export default defineComponent(() => () => {
  const example = currentExample()

  if (example === 'variants' || example === 'outline-variant' || example === 'custom-variants') {
    return (
      <div class="demo-row">
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
      <div class="demo-row">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    )
  }

  if (example === 'disabled') {
    return (
      <div class="demo-row">
        <Button isDisabled>Disabled</Button>
        <Button variant="secondary" isDisabled>Secondary</Button>
        <Button variant="outline" isDisabled>Outline</Button>
      </div>
    )
  }

  if (example === 'loading' || example === 'loading-state') {
    return (
      <div class="demo-row">
        <Button isPending>Loading</Button>
        <Button variant="secondary" isPending>Saving</Button>
      </div>
    )
  }

  if (example === 'full-width') {
    return (
      <div class="demo-col">
        <Button fullWidth>Continue</Button>
        <Button fullWidth variant="secondary">Save Draft</Button>
      </div>
    )
  }

  if (example === 'icon-only') {
    return (
      <div class="demo-row">
        <Button aria-label="Add" isIconOnly><IconPlus /></Button>
        <Button aria-label="Search" isIconOnly variant="secondary"><IconSearch /></Button>
        <Button aria-label="Delete" isIconOnly variant="danger"><IconX /></Button>
      </div>
    )
  }

  if (example === 'with-icons' || example === 'social' || example === 'ripple-effect') {
    return (
      <div class="demo-row">
        <Button><IconSearch />Search</Button>
        <Button variant="secondary"><IconPlus />Add Member</Button>
        <Button variant="danger"><IconX />Delete</Button>
      </div>
    )
  }

  if (example === 'custom-render-function') {
    return <Button>Custom Element</Button>
  }

  return <Button>Button</Button>
})
