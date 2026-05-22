import { Pagination } from '@heroui/react'
import { useState } from 'react'
import { currentExample } from '../shared'

/** React demo — Pagination (HeroUI v3), mirrors the Vue parity demo. */
export default function PaginationDemo() {
  const example = currentExample('basic')
  const [page, setPage] = useState(1)
  const totalPages = example === 'with-ellipsis' ? 8 : 3
  const size = example === 'sizes' ? 'sm' : undefined

  return (
    <div className="demo-row">
      <Pagination className="justify-center" size={size} isDisabled={example === 'disabled'}>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>
          {example === 'simple-prev-next' ? null : Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Pagination.Item key={p}>
              <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                {p}
              </Pagination.Link>
            </Pagination.Item>
          ))}
          {example === 'with-ellipsis' && <Pagination.Ellipsis />}
          <Pagination.Item>
            <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
              <span>Next</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  )
}
