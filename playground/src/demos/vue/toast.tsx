import { Button, Toast, toast } from "@itsjustanks/heroui-vue";

/** Toast demo — HeroUI v3 React, for side-by-side parity. Renders the
 *  `Toast.Provider` region and triggers toasts via the imperative `toast()`. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-col">
      <Toast.Provider />
      <div class="demo-row">
        <Button size="sm" variant="secondary" onPress={() => toast('Simple message')}>Default</Button>
        <Button size="sm" variant="secondary" onPress={() => toast.success('Operation completed')}>Success</Button>
        <Button size="sm" variant="secondary" onPress={() => toast.info('New update available')}>Info</Button>
        <Button size="sm" variant="secondary" onPress={() => toast.warning('Please check your settings')}>Warning</Button>
        <Button size="sm" variant="secondary" onPress={() => toast.danger('Something went wrong')}>Error</Button>
      </div>
    </div>);
