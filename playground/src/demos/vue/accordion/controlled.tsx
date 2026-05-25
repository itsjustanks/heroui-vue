import { ChevronDown, ChevronUp } from "@gravity-ui/icons";
import { Accordion, Button, useDisclosureGroupNavigation } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
const items = [{
  content: "Learn the basics of HeroUI and how to integrate it into your React project. This section covers installation, setup, and your first component.",
  id: "getting-started",
  title: "Getting Started"
}, {
  content: "Understand the fundamental concepts behind HeroUI, including the compound component pattern, styling with Tailwind CSS, and accessibility features.",
  id: "core-concepts",
  title: "Core Concepts"
}, {
  content: "Explore advanced features like custom variants, theme customization, and integration with other libraries in your React ecosystem.",
  id: "advanced-usage",
  title: "Advanced Usage"
}];
export default defineComponent(() => {
  const [expandedKeys, setExpandedKeys] = React.useState(new Set<string | number>(["getting-started"]));
  const itemIds = items.map(item => item.id);
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
      <div class="mb-4 flex items-center justify-between">
        <p class="text-sm text-muted">
          Expanded: <strong>{[...expandedKeys].join(", ") || "none"}</strong>
        </p>
        <div class="flex gap-2">
          <Button aria-label="Previous item" isDisabled={isPrevDisabled} size="sm" variant="secondary" onPress={onPrevious}>
            <ChevronUp class="size-4" />
          </Button>
          <Button aria-label="Next item" isDisabled={isNextDisabled} size="sm" variant="secondary" onPress={onNext}>
            <ChevronDown class="size-4" />
          </Button>
        </div>
      </div>
      <Accordion expandedKeys={expandedKeys} onExpandedChange={setExpandedKeys}>
        {items.map(item => <Accordion.Item key={item.id} id={item.id}>
            <Accordion.Heading>
              <Accordion.Trigger>
                {item.title}
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>)}
      </Accordion>
    </div>;
});
