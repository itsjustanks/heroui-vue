import { Button, Drawer, Input, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Drawer>
      <Button variant="secondary">Edit Profile</Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Edit Profile</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <form class="flex flex-col gap-4">
                <TextField class="w-full" name="name" type="text">
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" variant="secondary" />
                </TextField>
                <TextField class="w-full" name="email" type="email">
                  <Label>Email</Label>
                  <Input placeholder="Enter your email" variant="secondary" />
                </TextField>
                <TextField class="w-full" name="bio">
                  <Label>Bio</Label>
                  <Input placeholder="Tell us about yourself" variant="secondary" />
                </TextField>
              </form>
            </Drawer.Body>
            <Drawer.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Save Changes</Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>);
