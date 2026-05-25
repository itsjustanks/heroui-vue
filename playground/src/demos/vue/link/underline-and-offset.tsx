import { Link } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">Always visible underline</p>
        <Link class="underline" href="#">
          Underline always visible
          <Link.Icon />
        </Link>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">Underline visible on hover</p>
        <Link class="no-underline hover:underline" href="#">
          Hover to see the underline
          <Link.Icon />
        </Link>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">No underline</p>
        <Link class="no-underline" href="#">
          Link without any underline
          <Link.Icon />
        </Link>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">Changing the underline offset</p>
        <div class="flex flex-col gap-3">
          <Link class="underline-offset-1 hover:underline" href="#">
            Offset 1 (1px space)
            <Link.Icon />
          </Link>
          <Link class="underline-offset-2 hover:underline" href="#">
            Offset 2 (2px space)
            <Link.Icon />
          </Link>
          <Link class="underline-offset-3 hover:underline" href="#">
            Offset 3 (3px space)
            <Link.Icon />
          </Link>
          <Link class="underline-offset-4 hover:underline" href="#">
            Offset 4 (4px space)
            <Link.Icon />
          </Link>
        </div>
      </div>
    </div>);
