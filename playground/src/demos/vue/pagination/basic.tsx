import { Pagination } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const page = ref(1);
  const totalPages = 3;
  return () => <Pagination class="justify-center">
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous isDisabled={page.value === 1} onPress={() => page.value = (p => p - 1)(page.value)}>
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>
        {Array.from({
        length: totalPages
      }, (_, i) => i + 1).map(p => <Pagination.Item key={p}>
            <Pagination.Link isActive={p === page.value} onPress={() => page.value = p}>
              {p}
            </Pagination.Link>
          </Pagination.Item>)}
        <Pagination.Item>
          <Pagination.Next isDisabled={page.value === totalPages} onPress={() => page.value = (p => p + 1)(page.value)}>
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>;
});
export default PaginationBasic;
