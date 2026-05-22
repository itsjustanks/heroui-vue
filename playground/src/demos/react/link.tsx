import { Link } from '@heroui/react'

export default function LinkDemo() {
  return (
    <div className="demo-row">
      <Link href="#">
        Call to action
        <Link.Icon />
      </Link>
      <Link href="#" isDisabled>
        Disabled link
        <Link.Icon />
      </Link>
      <Link href="#" className="underline">
        Underline always
        <Link.Icon />
      </Link>
    </div>
  )
}
