import { Surface } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-col">
      <Surface class="p-4">
        <strong>Default surface</strong>
        <p class="m-0 text-sm text-muted">Primary content container.</p>
      </Surface>
      <Surface variant="secondary" class="p-4">
        <strong>Secondary surface</strong>
        <p class="m-0 text-sm text-muted">Subtle grouped content.</p>
      </Surface>
      <Surface variant="tertiary" class="p-4">
        <strong>Tertiary surface</strong>
        <p class="m-0 text-sm text-muted">Low-emphasis section.</p>
      </Surface>
    </div>);
