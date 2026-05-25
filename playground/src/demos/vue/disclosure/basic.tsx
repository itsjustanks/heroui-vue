import { QrCode } from "../../../gravity-icons-vue";
import { Button, Disclosure } from "@itsjustanks/heroui-vue";
import { Icon } from "@iconify/react";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  return () => <div class="w-full max-w-md text-center">
      <Disclosure isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
        <Disclosure.Heading>
          <Button slot="trigger" variant="secondary">
            <QrCode />
            Preview HeroUI Native
            <Disclosure.Indicator />
          </Button>
        </Disclosure.Heading>
        <Disclosure.Content>
          <Disclosure.Body class="shadow-panel flex flex-col items-center rounded-3xl bg-surface p-4 text-center">
            <p class="text-sm text-muted">
              Scan this QR code with your camera app to preview the HeroUI native components.
            </p>
            <img alt="Expo Go QR Code" class="aspect-square w-full max-w-54 object-cover" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png" />
            <p class="text-sm text-muted">Expo must be installed on your device.</p>
            <Button class="mt-4" variant="primary">
              <Icon icon="tabler:brand-apple-filled" />
              Download on App Store
            </Button>
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </div>;
});
export default Basic;
