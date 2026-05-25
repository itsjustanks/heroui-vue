import { Button, Drawer } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const placements = ["bottom", "top", "left", "right"] as const;
  return () => <div class="flex flex-wrap gap-4">
      {placements.map(placement => <Drawer key={placement}>
          <Button variant="secondary">
            {placement.charAt(0).toUpperCase() + placement.slice(1)}
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement={placement}>
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                {placement === "bottom" && <Drawer.Handle />}
                <Drawer.Header>
                  <Drawer.Heading>
                    {placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer
                  </Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>
                  <p>
                    This drawer slides in from the <strong>{placement}</strong> edge of the screen.
                  </p>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>
                  <Button slot="close">Done</Button>
                </Drawer.Footer>
                {placement === "top" && <Drawer.Handle />}
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>)}
    </div>;
});
export default Placements;
