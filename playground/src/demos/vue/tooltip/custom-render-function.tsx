import { CircleInfo } from "../../../gravity-icons-vue";
import { Button, Tooltip } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex items-center gap-4">
      <Tooltip delay={0}>
        <Button variant="secondary">Hover me</Button>
        <Tooltip.Content render={props => <div {...props} data-custom="foo" />}>
          <p>This is a tooltip</p>
        </Tooltip.Content>
      </Tooltip>

      <Tooltip delay={0}>
        <Button isIconOnly variant="tertiary">
          <CircleInfo />
        </Button>
        <Tooltip.Content render={props => <div {...props} data-custom="foo" />}>
          <p>More information</p>
        </Tooltip.Content>
      </Tooltip>
    </div>);
export default CustomRenderFunction;
