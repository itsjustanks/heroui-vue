import { Link } from '@heroui/react'

export default function LinkDemo() {
  return (
    <div className="demo-col">
      <Link href="#">
        Call to action
        <Link.Icon />
      </Link>

      <Link className="hover:underline" href="#">
        Hover to see underline
        <Link.Icon />
      </Link>

      <Link className="underline" href="#">
        Always underlined
        <Link.Icon />
      </Link>

      <Link href="#" isDisabled>
        Disabled link
        <Link.Icon />
      </Link>
    </div>
  )
}
