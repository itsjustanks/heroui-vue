import { Link } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-3">
      <Link href="#">
        Icon at end (default)
        <Link.Icon />
      </Link>
      <Link class="gap-1" href="#">
        <Link.Icon />
        Icon at start
      </Link>
    </div>);
