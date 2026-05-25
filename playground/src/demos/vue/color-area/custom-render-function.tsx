import { ColorArea } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ColorArea defaultValue="rgb(116, 52, 255)" render={props => <div {...props} data-custom="slider" />}>
      <ColorArea.Thumb render={props => <div {...props} data-custom="thumb" />} />
    </ColorArea>);
export default CustomRenderFunction;
