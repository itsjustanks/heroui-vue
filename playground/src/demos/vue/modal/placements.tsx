import { Rocket } from "../../../gravity-icons-vue";
import { Button, Modal } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const placements = ["auto", "top", "center", "bottom"] as const;
  return () => <div class="flex flex-wrap gap-4">
      {placements.map(placement => <Modal key={placement}>
          <Button variant="secondary">
            {placement.charAt(0).toUpperCase() + placement.slice(1)}
          </Button>
          <Modal.Backdrop>
            <Modal.Container placement={placement}>
              <Modal.Dialog class="sm:max-w-[360px]">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Icon class="bg-default text-foreground">
                    <Rocket class="size-5" />
                  </Modal.Icon>
                  <Modal.Heading>
                    Placement: {placement.charAt(0).toUpperCase() + placement.slice(1)}
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    This modal uses the <code>{placement}</code> placement option. Try different
                    placements to see how the modal positions itself on the screen.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button class="w-full" slot="close">
                    Continue
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>)}
    </div>;
});
export default Placements;
