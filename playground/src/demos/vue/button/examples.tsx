import { defineComponent } from 'vue'
import { Button } from '@itsjustanks/heroui-vue'
import { currentExample } from '../../shared'

function Icon({ children }: { children: string }) {
  return <span class="demo-icon" aria-hidden="true">{children}</span>
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
        <Button aria-label="Add" isIconOnly><Icon>+</Icon></Button>
        <Button aria-label="Email" isIconOnly variant="secondary"><Icon>@</Icon></Button>
        <Button aria-label="Delete" isIconOnly variant="danger"><Icon>x</Icon></Button>
      </div>
    )
  }

  if (example === 'with-icons' || example === 'social' || example === 'ripple-effect') {
    return (
      <div class="demo-row">
        <Button><Icon>S</Icon>Search</Button>
        <Button variant="secondary"><Icon>+</Icon>Add Member</Button>
        <Button variant="tertiary"><Icon>@</Icon>Email</Button>
        <Button variant="danger"><Icon>x</Icon>Delete</Button>
      </div>
    )
  }

  if (example === 'custom-render-function') {
    return <Button>Custom Element</Button>
  }

  return <Button>Button</Button>
})
