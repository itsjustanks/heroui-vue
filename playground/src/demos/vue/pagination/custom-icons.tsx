import { Pagination } from "@itsjustanks/heroui-vue";
import { Icon } from "@iconify/react";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const page = ref(1);
  const totalPages = 3;
  return () => <Pagination class="justify-center">
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous isDisabled={page.value === 1} onPress={() => page.value = (p => p - 1)(page.value)}>
            <Pagination.PreviousIcon>
              <Icon icon="gravity-ui:arrow-left" />
            </Pagination.PreviousIcon>
            <span>Back</span>
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
            <span>Forward</span>
            <Pagination.NextIcon>
              <Icon icon="gravity-ui:arrow-right" />
            </Pagination.NextIcon>
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>;
});
export default PaginationCustomIcons;
