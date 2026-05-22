import { defineComponent, ref } from 'vue'
import { Pagination } from '@itsjustanks/heroui-vue'

/** Vue demo — Pagination compound API, mirrors HeroUI's basic demo. */
export default defineComponent(() => {
  const page = ref(1)
  const totalPages = 3

  return () => (
    <div class="demo-row">
      <Pagination class="justify-center">
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous
              disabled={page.value === 1}
              onClick={() => { page.value -= 1 }}
            >
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Pagination.Item key={p}>
              <Pagination.Link
                isActive={p === page.value}
                onClick={() => { page.value = p }}
              >
                {p}
              </Pagination.Link>
            </Pagination.Item>
          ))}
          <Pagination.Item>
            <Pagination.Next
              disabled={page.value === totalPages}
              onClick={() => { page.value += 1 }}
            >
              <span>Next</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  )
})
