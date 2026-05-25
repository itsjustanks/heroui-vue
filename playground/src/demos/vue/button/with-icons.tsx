import { Envelope, Globe, Plus, TrashBin } from "@gravity-ui/icons";
import { Button } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-wrap gap-3">
      <Button>
        <Globe />
        Search
      </Button>
      <Button variant="secondary">
        <Plus />
        Add Member
      </Button>
      <Button variant="tertiary">
        <Envelope />
        Email
      </Button>
      <Button variant="danger">
        <TrashBin />
        Delete
      </Button>
    </div>);
