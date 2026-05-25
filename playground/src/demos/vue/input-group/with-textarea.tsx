import { ArrowUp, At, Microphone, PlugConnection, Plus } from "../../../gravity-icons-vue";
import { Button, InputGroup, Kbd, Spinner, TextField, Tooltip } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref("");
  const isSubmitting = ref(false);
  const handleSubmit = () => {
    if (!value.value.trim()) return;
    isSubmitting.value = true;
    setTimeout(() => {
      isSubmitting.value = false;
      value.value = "";
    }, 1000);
  };
  return () => <TextField fullWidth aria-label="Prompt input" class="flex w-sm flex-col sm:w-lg" name="prompt">
      <InputGroup fullWidth class="flex flex-col gap-2 rounded-3xl py-2">
        <InputGroup.Prefix class="px-3 py-0">
          <Button aria-label="Add context" size="sm" variant="outline">
            <At />
            Add Context
          </Button>
        </InputGroup.Prefix>
        <InputGroup.TextArea class="w-full resize-none px-3.5 py-0" placeholder="Assign tasks or ask anything..." rows={5} value={value.value} onChange={event => value.value = event.target.value} />
        <InputGroup.Suffix class="flex w-full items-center gap-1.5 px-3 py-0">
          <Tooltip delay={0}>
            <Button isIconOnly aria-label="Attach file" size="sm" variant="tertiary">
              <Plus />
            </Button>
            <Tooltip.Content>
              <p class="text-xs">Add a files and more</p>
            </Tooltip.Content>
          </Tooltip>
          <Tooltip delay={0}>
            <Button isIconOnly aria-label="Connect Apps" size="sm" variant="tertiary">
              <PlugConnection />
            </Button>
            <Tooltip.Content>
              <p class="text-xs">Connect apps</p>
            </Tooltip.Content>
          </Tooltip>
          <div class="ml-auto flex items-center gap-1.5">
            <Tooltip delay={0}>
              <Button isIconOnly aria-label="Voice input" size="sm" variant="ghost">
                <Microphone />
              </Button>
              <Tooltip.Content>
                <p class="text-xs">Voice input</p>
              </Tooltip.Content>
            </Tooltip>
            <Tooltip delay={0}>
              <Button isIconOnly aria-label="Send prompt" isDisabled={!value.value.trim()} isPending={isSubmitting.value} onPress={handleSubmit}>
                {({
                isPending
              }) => isPending ? <Spinner color="current" size="sm" /> : <ArrowUp />}
              </Button>
              <Tooltip.Content class="flex items-center gap-1">
                <p class="text-xs">Send</p>
                <Kbd class="h-4 rounded-sm px-1">
                  <Kbd.Abbr keyValue="enter" />
                </Kbd>
              </Tooltip.Content>
            </Tooltip>
          </div>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>;
});
export default WithTextArea;
