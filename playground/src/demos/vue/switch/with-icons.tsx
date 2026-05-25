import { BellFill, BellSlash, Check, Microphone, MicrophoneSlash, Moon, Power, Sun, VolumeFill, VolumeSlashFill } from "../../../gravity-icons-vue";
import { Switch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const icons = {
    check: {
      off: Power,
      on: Check,
      selectedControlClass: "bg-green-500/80"
    },
    darkMode: {
      off: Moon,
      on: Sun,
      selectedControlClass: ""
    },
    microphone: {
      off: Microphone,
      on: MicrophoneSlash,
      selectedControlClass: "bg-red-500/80"
    },
    notification: {
      off: BellSlash,
      on: BellFill,
      selectedControlClass: "bg-purple-500/80"
    },
    volume: {
      off: VolumeFill,
      on: VolumeSlashFill,
      selectedControlClass: "bg-blue-500/80"
    }
  };
  return () => <div class="flex gap-3">
      {Object.entries(icons).map(([key, value]) => <Switch key={key} defaultSelected size="lg">
          {({
        isSelected
      }) => <>
              <Switch.Control class={isSelected ? value.selectedControlClass : ""}>
                <Switch.Thumb>
                  <Switch.Icon>
                    {isSelected ? <value.on class="size-3 text-inherit opacity-100" /> : <value.off class="size-3 text-inherit opacity-70" />}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </>}
        </Switch>)}
    </div>;
});
export default WithIcons;
