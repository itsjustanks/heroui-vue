import { Pagination } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const page = ref(1);
  const totalPages = 12;
  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    pages.push(1);
    if (page.value > 3) {
      pages.push("ellipsis");
    }
    const start = Math.max(2, page.value - 1);
    const end = Math.min(totalPages - 1, page.value + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (page.value < totalPages - 2) {
      pages.push("ellipsis");
    }
    pages.push(totalPages);
    return pages;
  };
  return () => <div class="w-full max-w-2xs overflow-x-auto sm:max-w-full">
      <Pagination class="justify-center">
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous isDisabled={page.value === 1} onPress={() => page.value = (p => p - 1)(page.value)}>
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>
          {getPageNumbers().map((p, i) => p === "ellipsis" ? <Pagination.Item key={`ellipsis-${i}`}>
                <Pagination.Ellipsis />
              </Pagination.Item> : <Pagination.Item key={p}>
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
      </Pagination>
    </div>;
});
