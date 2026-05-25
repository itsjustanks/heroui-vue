import { Paperclip } from "@gravity-ui/icons";
import { Button, Spinner } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const isLoading = ref(false);
  const handlePress = () => {
    isLoading.value = true;
    setTimeout(() => isLoading.value = false, 2000);
  };
  return () => <Button isPending={isLoading.value} onPress={handlePress}>
      {({
      isPending
    }) => <>
          {isPending ? <Spinner color="current" size="sm" /> : <Paperclip />}
          {isPending ? "Uploading..." : "Upload File"}
        </>}
    </Button>;
});
