import { defineComponent } from 'vue'
import { Accordion } from '@itsjustanks/heroui-vue'

const items = [
  {
    content: 'Browse our products, add items to your cart, and proceed to checkout.',
    title: 'How do I place an order?',
  },
  {
    content: 'Yes, you can modify or cancel your order before it\'s shipped.',
    title: 'Can I modify or cancel my order?',
  },
  {
    content: 'We accept all major credit cards, including Visa, Mastercard, and American Express.',
    title: 'What payment methods do you accept?',
  },
]

export default defineComponent(() => () => (
  <div class="w-full max-w-md">
    <Accordion type="single" collapsible>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={`item-${index}`}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {item.title}
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  </div>
))
