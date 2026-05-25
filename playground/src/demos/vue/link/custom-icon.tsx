import { ArrowUpRightFromSquare, Link as LinkIcon } from "../../../gravity-icons-vue";
import { Link } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-3">
      <Link href="#">
        External link
        <Link.Icon class="ml-1.5 size-3">
          <ArrowUpRightFromSquare />
        </Link.Icon>
      </Link>
      <Link class="gap-1" href="#">
        Go to page
        <Link.Icon class="size-3">
          <LinkIcon />
        </Link.Icon>
      </Link>
    </div>);
export default LinkCustomIcon;
