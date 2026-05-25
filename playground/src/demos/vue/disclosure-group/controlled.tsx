import { ChevronDown, ChevronUp, QrCode } from "@gravity-ui/icons";
import { Button, Disclosure, DisclosureGroup, Separator, useDisclosureGroupNavigation } from "@itsjustanks/heroui-vue";
import { Icon } from "@iconify/react";
import { cn } from "tailwind-variants";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [expandedKeys, setExpandedKeys] = React.useState(new Set<string | number>(["preview"]));
  const itemIds = ["preview", "download"]; // Track our disclosure items

  const {
    isNextDisabled,
    isPrevDisabled,
    onNext,
    onPrevious
  } = useDisclosureGroupNavigation({
    expandedKeys,
    itemIds,
    onExpandedChange: setExpandedKeys
  });
  return () => <div class="w-full max-w-md">
      <div class="flex flex-col gap-4 rounded-3xl p-4">
        <div class="mb-2 flex items-center justify-between">
          <h3 class="text-lg font-semibold">HeroUI Native</h3>
          <div class="flex gap-2">
            <Button aria-label="Previous disclosure" isDisabled={isPrevDisabled} size="sm" variant="secondary" onPress={onPrevious}>
              <ChevronUp class="size-4" />
            </Button>
            <Button aria-label="Next disclosure" isDisabled={isNextDisabled} size="sm" variant="secondary" onPress={onNext}>
              <ChevronDown class="size-4" />
            </Button>
          </div>
        </div>
        <DisclosureGroup expandedKeys={expandedKeys} onExpandedChange={setExpandedKeys}>
          <Disclosure aria-label="Preview HeroUI Native" id="preview">
            <Disclosure.Heading>
              <Button slot="trigger" variant={expandedKeys.has("preview") ? "secondary" : "tertiary"} class={cn("w-full border-none", {
              "bg-transparent": !expandedKeys.has("preview")
            })}>
                <div class="flex w-full items-center justify-start gap-2">
                  <QrCode />
                  Preview HeroUI Native
                </div>
                <Disclosure.Indicator class="text-muted" />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body class="mx-2 flex flex-col items-center gap-2 p-4 text-center">
                <p class="text-sm text-muted">
                  Scan this QR code with your camera app to preview the HeroUI native components.
                </p>
                <img alt="Expo Go QR Code" class="aspect-square w-full max-w-54 object-cover" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png" />
                <p class="text-sm text-muted">Expo must be installed on your device.</p>
                <Button class="mt-4" variant="primary">
                  <Icon class="[&_path]:fill-accent-foreground" icon="logos:expo-icon" />
                  Preview on Expo Go
                </Button>
              </Disclosure.Body>
            </Disclosure.Content>
          </Disclosure>
          <Separator class="my-2" />
          <Disclosure id="download">
            <Disclosure.Heading aria-label="Download HeroUI Native">
              <Button slot="trigger" variant={expandedKeys.has("download") ? "secondary" : "tertiary"} class={cn("w-full border-none", {
              "bg-transparent": !expandedKeys.has("download")
            })}>
                <div class="flex w-full items-center justify-start gap-2">
                  <Icon icon="tabler:brand-apple-filled" />
                  Download HeroUI Native
                </div>
                <Disclosure.Indicator class="text-muted" />
              </Button>
            </Disclosure.Heading>
            <Disclosure.Content>
              <Disclosure.Body class="mx-2 flex flex-col items-center gap-2 p-4 text-center">
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
        </DisclosureGroup>
      </div>
    </div>;
});
