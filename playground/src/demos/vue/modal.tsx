import { defineComponent } from 'vue'
import { Button, Modal } from '@itsjustanks/heroui-vue'

/**
 * Modal demo — Vue TSX, heroui-vue compound API.
 *
 * Matches HeroUI v3's `modal/default` demo: the first child of the Modal root
 * becomes the trigger automatically — no explicit trigger wrapper.
 */
export default defineComponent(() => () => (
  <div class="demo-row">
    <Modal>
      <Button variant="secondary">Open Modal</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Welcome to HeroUI</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                A beautiful, fast, and modern Vue UI library for building accessible and
                customizable web applications with ease.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button class="w-full" slot="close">Continue</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  </div>
))
