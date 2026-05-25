import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "../../../gravity-icons-vue";
import { Button, Drawer } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const navItems: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
  }[] = [{
    icon: House,
    label: "Home"
  }, {
    icon: Magnifier,
    label: "Search"
  }, {
    icon: Bell,
    label: "Notifications"
  }, {
    icon: Envelope,
    label: "Messages"
  }, {
    icon: Person,
    label: "Profile"
  }, {
    icon: Gear,
    label: "Settings"
  }];
  return () => <Drawer>
      <Button variant="secondary">
        <Bars />
        Menu
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav class="flex flex-col gap-1">
                {navItems.map(item => <button key={item.label} class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default" type="button">
                    <item.icon class="size-5 text-muted" />
                    {item.label}
                  </button>)}
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>;
});
export default Navigation;
