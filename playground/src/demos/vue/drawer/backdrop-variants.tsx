import { Button, Drawer } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const variants = ["opaque", "blur", "transparent"] as const;
  return () => <div class="flex flex-wrap gap-4">
      {variants.map(variant => <Drawer key={variant}>
          <Button variant="secondary">{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>
          <Drawer.Backdrop variant={variant}>
            <Drawer.Content>
              <Drawer.Dialog>
                <Drawer.Handle />
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading>
                    Backdrop: {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  <p>
                    This drawer uses the <code>{variant}</code> backdrop variant.
                  </p>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button class="w-full" slot="close">
                    Close
                  </Button>
                </Drawer.Footer>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>)}
    </div>;
});
export default BackdropVariants;
