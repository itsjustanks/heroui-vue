import { defineComponent } from 'vue'
import { Button, IconPlus, IconSearch, IconX } from '@itsjustanks/heroui-vue'
import { currentExample } from '../../shared'

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
        <Button aria-label="Add" isIconOnly><IconPlus class="demo-icon" /></Button>
        <Button aria-label="Search" isIconOnly variant="secondary"><IconSearch class="demo-icon" /></Button>
        <Button aria-label="Delete" isIconOnly variant="danger"><IconX class="demo-icon" /></Button>
      </div>
    )
  }

  if (example === 'with-icons' || example === 'social' || example === 'ripple-effect') {
    return (
      <div class="demo-row">
        <Button><IconSearch class="demo-icon" />Search</Button>
        <Button variant="secondary"><IconPlus class="demo-icon" />Add Member</Button>
        <Button variant="danger"><IconX class="demo-icon" />Delete</Button>
      </div>
    )
  }

  if (example === 'custom-render-function') {
    return <Button>Custom Element</Button>
  }

  return <Button>Button</Button>
})
