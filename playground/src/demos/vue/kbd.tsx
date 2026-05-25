import { Kbd } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-4">
      <Kbd>
        <Kbd.Abbr keyValue="command" />
        <Kbd.Content>K</Kbd.Content>
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="shift" />
        <Kbd.Content>P</Kbd.Content>
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="ctrl" />
        <Kbd.Content>C</Kbd.Content>
      </Kbd>
      <Kbd>
        <Kbd.Abbr keyValue="option" />
        <Kbd.Content>D</Kbd.Content>
      </Kbd>
    </div>);
