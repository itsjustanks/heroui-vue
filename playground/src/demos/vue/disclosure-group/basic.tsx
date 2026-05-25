import { defineComponent } from 'vue'
import { Button, Disclosure, DisclosureGroup } from '@itsjustanks/heroui-vue'

/** DisclosureGroup basic — Vue TSX. Single-expand container around two
 *  Disclosure children. */
export default defineComponent(() => () => (
  <DisclosureGroup type="single" defaultValue="what">
    <Disclosure value="what">
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
          A composable, accessible Vue port of HeroUI v3.
        </Disclosure.Body>
      </Disclosure.Content>
    </Disclosure>
    <Disclosure value="oss">
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
          Yes — MIT-licensed, on GitHub.
        </Disclosure.Body>
      </Disclosure.Content>
    </Disclosure>
  </DisclosureGroup>
))
