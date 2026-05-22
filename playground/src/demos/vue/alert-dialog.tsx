import { defineComponent } from 'vue'
import { AlertDialog, Button } from '@itsjustanks/heroui-vue'

/**
 * AlertDialog demo — Vue TSX, heroui-vue compound API.
 *
 * Matches HeroUI v3's `alert-dialog/default` demo: the first child of the
 * AlertDialog root becomes the trigger automatically — no trigger wrapper.
 */
export default defineComponent(() => {
  return () => (
    <div class="demo-row">
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
    </div>
  )
})
