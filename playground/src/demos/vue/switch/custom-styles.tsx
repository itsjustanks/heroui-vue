import { Check, Power } from "../../../gravity-icons-vue";
import { Switch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Switch>
      {({
    isSelected
  }) => <>
          <Switch.Control class={`h-[31px] w-[51px] bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}>
            <Switch.Thumb class={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}>
              <Switch.Icon>
                {isSelected ? <Check class="size-4 text-cyan-600" /> : <Power class="size-4 text-blue-600" />}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>}
    </Switch>);
export default CustomStyles;
