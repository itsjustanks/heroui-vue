import { Button, Disclosure } from "@itsjustanks/heroui-vue";

/** Disclosure demo — HeroUI v3 React, mirrors the docs' basic example, which
 *  composes a styled Button as the trigger via `slot="trigger"`. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-col">
      <Disclosure>
        <Disclosure.Heading>
          <Button slot="trigger" variant="secondary">
            What is HeroUI?
            <Disclosure.Indicator />
          </Button>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body>
            HeroUI is a beautiful, fast and modern React UI library built on top of Tailwind CSS.
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>

      <Disclosure>
        <Disclosure.Heading>
          <Button slot="trigger" variant="secondary">
            Is it open source?
            <Disclosure.Indicator />
          </Button>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body>
            Yes, HeroUI is fully open source and available on GitHub under the MIT license.
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </div>);
