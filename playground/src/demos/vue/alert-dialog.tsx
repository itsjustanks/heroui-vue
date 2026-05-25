import { AlertDialog, Button } from "@itsjustanks/heroui-vue";

/** React demo — AlertDialog (HeroUI v3), matches the HeroUI default demo. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <AlertDialog>
        <Button variant="danger">Delete Project</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog class="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>My Awesome Project</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">Cancel</Button>
                <Button slot="close" variant="danger">Delete Project</Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>);
