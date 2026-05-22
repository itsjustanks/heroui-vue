import { defineComponent } from 'vue'
import { Button, Disclosure } from '@itsjustanks/heroui-vue'

/** Disclosure demo — Vue TSX, mirrors HeroUI v3's disclosure basic demo, which
 *  composes a styled `Button` as the trigger via `Disclosure.Trigger`. */
export default defineComponent(() => () => (
  <div class="demo-col">
    <Disclosure>
      <Disclosure.Heading>
        <Disclosure.Trigger asChild>
          <Button variant="secondary">
            What is HeroUI?
            <Disclosure.Indicator />
          </Button>
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
        <Disclosure.Trigger asChild>
          <Button variant="secondary">
            Is it open source?
            <Disclosure.Indicator />
          </Button>
        </Disclosure.Trigger>
      </Disclosure.Heading>
      <Disclosure.Content>
        <Disclosure.Body>
          Yes, HeroUI is fully open source and available on GitHub under the MIT license.
        </Disclosure.Body>
      </Disclosure.Content>
    </Disclosure>
  </div>
))
