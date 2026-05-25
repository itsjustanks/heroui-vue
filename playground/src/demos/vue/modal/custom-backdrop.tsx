import { Sparkles } from "@gravity-ui/icons";
import { Button, Modal } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Modal>
      <Button variant="secondary">Custom Backdrop</Button>
      <Modal.Backdrop class="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40" variant="blur">
        <Modal.Container>
          <Modal.Dialog class="sm:max-w-[360px]">
            <Modal.Header class="items-center text-center">
              <Modal.Icon class="bg-accent-soft text-accent-soft-foreground">
                <Sparkles class="size-5" />
              </Modal.Icon>
              <Modal.Heading>Premium Backdrop</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                This backdrop features a sophisticated gradient that transitions from a dark color
                at the bottom to complete transparency at the top, combined with a smooth blur
                effect. The gradient automatically adapts its intensity for optimal contrast in both
                light and dark modes.
              </p>
            </Modal.Body>
            <Modal.Footer class="flex-col-reverse">
              <Button class="w-full" slot="close">
                Amazing!
              </Button>
              <Button class="w-full" slot="close" variant="secondary">
                Close
              </Button>
            </Modal.Footer>
            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>);
