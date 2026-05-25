import { Breadcrumbs } from '@heroui/react'
import { currentExample } from '../../shared'

function Crumbs({ disabled, separator = '/' }: { disabled?: boolean; separator?: string }) {
  return (
    <Breadcrumbs separator={separator}>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#" isDisabled={disabled}>Components</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Navigation</Breadcrumbs.Item>
      <Breadcrumbs.Item>Breadcrumbs</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export default function BreadcrumbsExamples() {
  const example = currentExample()

  if (example === 'level-2') {
    return (
      <Breadcrumbs>
        <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Docs</Breadcrumbs.Item>
      </Breadcrumbs>
    )
  }

  if (example === 'level-3') {
    return (
      <Breadcrumbs>
        <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Components</Breadcrumbs.Item>
        <Breadcrumbs.Item>Breadcrumbs</Breadcrumbs.Item>
      </Breadcrumbs>
    )
  }

  if (example === 'custom-separator') return <Crumbs separator=">" />
  if (example === 'disabled') return <Crumbs disabled />

  return <Crumbs />
}
