import { Disclosure } from '@heroui/react'

export default function CollapsibleDemo() {
  return (
    <div className="demo-col">
      <Disclosure>
        <Disclosure.Heading>
          <Disclosure.Trigger>
            What is HeroUI?
            <Disclosure.Indicator />
          </Disclosure.Trigger>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body>
            HeroUI is a beautiful, fast and modern React UI library built on top of Tailwind CSS.
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>

      <Disclosure>
        <Disclosure.Heading>
          <Disclosure.Trigger>
            Is it open source?
            <Disclosure.Indicator />
          </Disclosure.Trigger>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body>
            Yes, HeroUI is fully open source and available on GitHub under the MIT license.
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </div>
  )
}
