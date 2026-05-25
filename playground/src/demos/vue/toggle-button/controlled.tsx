import { Heart, HeartFill } from "@gravity-ui/icons";
import { ToggleButton } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const isSelected = ref(false);
  return () => <div class="flex flex-col gap-4">
      <ToggleButton isSelected={isSelected.value} onChange={setIsSelected}>
        {({
        isSelected: selected
      }) => <>
            {selected ? <HeartFill /> : <Heart />}
            {selected ? "Liked" : "Like"}
          </>}
      </ToggleButton>
      <p class="text-sm text-muted">
        Status: <span class="font-medium">{isSelected.value ? "Selected" : "Not selected"}</span>
      </p>
    </div>;
});
