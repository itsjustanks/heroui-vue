import { Button, Modal } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const portalRef = ref(null);
  const portalContainer = ref(null);
  const setPortalRef = (node: HTMLDivElement | null) => {
    portalRef.value.current = node;
    portalContainer.value = node;
  };
  return () => <div class="flex flex-col gap-4">
      <div>
        <p class="text-sm">
          Render modals inside a custom container instead of <code>document.body</code>
        </p>
        <p class="text-sm text-muted">
          Apply <code class="rounded px-1 py-0.5 text-xs">transform: translateZ(0)</code> to the
          container to create a new stacking context.
        </p>
      </div>
      <div ref={setPortalRef} class="relative flex h-[380px] items-center justify-center overflow-hidden rounded bg-muted/20"
    // new stacking context
    style={{
      transform: "translate(0)"
    }}>
        {!!portalContainer.value && <Modal>
            <Button>Open Modal</Button>
            <Modal.Backdrop class="h-full" UNSTABLE_portalContainer={portalContainer.value}>
              <Modal.Container class="h-full max-h-full">
                <Modal.Dialog class="h-full max-h-full sm:max-w-md">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Heading>Custom Portal</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <p class="text-sm text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p class="text-sm text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p class="text-sm text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>}
      </div>
    </div>;
});
