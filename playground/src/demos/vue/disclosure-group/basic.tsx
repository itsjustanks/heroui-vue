import { Button, Disclosure, DisclosureGroup } from "@itsjustanks/heroui-vue";

/** DisclosureGroup basic — React. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <DisclosureGroup>
      <Disclosure id="what">
        <Disclosure.Heading>
          <Button slot="trigger" variant="secondary">
            What is HeroUI?
            <Disclosure.Indicator />
          </Button>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body>
            A composable, accessible React UI library on Tailwind CSS.
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
      <Disclosure id="oss">
        <Disclosure.Heading>
          <Button slot="trigger" variant="secondary">
            Is it open source?
            <Disclosure.Indicator />
          </Button>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body>
            Yes — MIT-licensed, on GitHub.
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </DisclosureGroup>);
