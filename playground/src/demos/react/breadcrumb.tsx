import { Breadcrumbs } from '@heroui/react'

/** React demo — Breadcrumbs (HeroUI v3), mirrors the Vue parity demo. */
export default function BreadcrumbDemo() {
  return (
    <div className="demo-row">
      <Breadcrumbs>
        <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Electronics</Breadcrumbs.Item>
        <Breadcrumbs.Item>Laptop</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  )
}
