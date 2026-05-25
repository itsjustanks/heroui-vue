import { Header } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Header class="w-full">
      <h3 class="text-base font-semibold">Account settings</h3>
      <p class="text-sm text-muted">Manage preferences and notifications.</p>
    </Header>);
