import { Typography } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex max-w-xl flex-col gap-4">
      <Typography render={({
    children,
    ...domProps
  }) => <h2 {...domProps}>{children}</h2>} type="h1">
        H1 visual style, h2 semantic element
      </Typography>
      <Typography render={({
    children,
    ...domProps
  }) => <span {...domProps}>{children}</span>}>
        The render prop can swap the underlying element while preserving HeroUI props and styles.
      </Typography>
    </div>);
