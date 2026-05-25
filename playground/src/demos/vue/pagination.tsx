import { Pagination } from "@itsjustanks/heroui-vue";
import { currentExample } from '../shared';

/** React demo — Pagination (HeroUI v3), mirrors the Vue parity demo. */
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const example = currentExample('basic');
  const page = ref(1);
  const totalPages = example === 'with-ellipsis' ? 8 : 3;
  const size = example === 'sizes' ? 'sm' : undefined;
  return () => <div class="demo-row">
      <Pagination class="justify-center" size={size} isDisabled={example === 'disabled'}>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous isDisabled={page.value === 1} onPress={() => page.value = (p => p - 1)(page.value)}>
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>
          {example === 'simple-prev-next' ? null : Array.from({
          length: totalPages
        }, (_, i) => i + 1).map(p => <Pagination.Item key={p}>
              <Pagination.Link isActive={p === page.value} onPress={() => page.value = p}>
                {p}
              </Pagination.Link>
            </Pagination.Item>)}
          {example === 'with-ellipsis' && <Pagination.Ellipsis />}
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
