import { Pagination } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const page = ref(1);
  const totalPages = 10;
  const itemsPerPage = 5;
  const totalItems = 50;
  const startItem = (page.value - 1) * itemsPerPage + 1;
  const endItem = Math.min(page.value * itemsPerPage, totalItems);
  return () => <Pagination class="w-full">
      <Pagination.Summary>
        {startItem} to {endItem} of {totalItems} invoices
      </Pagination.Summary>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous isDisabled={page.value === 1} onPress={() => page.value = (p => p - 1)(page.value)}>
            <Pagination.PreviousIcon />
            <span>Prev</span>
          </Pagination.Previous>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next isDisabled={page.value === totalPages} onPress={() => page.value = (p => p + 1)(page.value)}>
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>;
});
