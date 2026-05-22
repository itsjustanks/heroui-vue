import { Button, Drawer } from '@heroui/react'

export default function DrawerDemo() {
  return (
    <div className="demo-row">
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
                  This is a right drawer built with React Aria's Modal component. It slides in
                  from the side with a smooth CSS transition.
                </p>
              </Drawer.Body>
              <Drawer.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button slot="close">Confirm</Button>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  )
}
