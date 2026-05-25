import { Button, Spinner } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Button isPending>
      {({
    isPending
  }) => <>
          {isPending ? <Spinner color="current" size="sm" /> : null}
          Uploading...
        </>}
    </Button>);
