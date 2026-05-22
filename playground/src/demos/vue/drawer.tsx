import { defineComponent } from 'vue'
import { Button, Drawer } from '@itsjustanks/heroui-vue'

/**
 * Drawer demo — Vue TSX, heroui-vue compound API.
 *
 * Matches HeroUI v3's `drawer/basic` demo: the first child of the Drawer root
 * becomes the trigger automatically — no explicit trigger wrapper.
 */
export default defineComponent(() => () => (
  <div class="demo-row">
    <Drawer>
      <Button variant="secondary">Open Drawer</Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.Header>
              <Drawer.Heading>Drawer Title</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                This is a right-side drawer built with reka-ui's Dialog component. It slides in
                from the right edge of the screen with a smooth CSS transition.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button slot="close" variant="secondary">Cancel</Button>
              <Button slot="close">Confirm</Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  </div>
))
