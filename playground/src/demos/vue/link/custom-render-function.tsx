import { Link } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Link href="#" render={props => <span {...props} data-custom="foo" />}>
      Call to action
      <Link.Icon />
    </Link>);
