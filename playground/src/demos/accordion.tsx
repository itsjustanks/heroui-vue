import { Accordion } from '@heroui/react'

const items = [
  {
    value: 'item-1',
    title: 'How do I place an order?',
    content: "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
  },
  {
    value: 'item-2',
    title: 'Can I modify or cancel my order?',
    content: "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
  },
  {
    value: 'item-3',
    title: 'What payment methods do you accept?',
    content: 'We accept all major credit cards, including Visa, Mastercard, and American Express.',
  },
]

export default function AccordionDemo() {
  return (
    <div className="demo-row">
      <Accordion className="w-full max-w-md">
        {items.map((item) => (
          <Accordion.Item key={item.value}>
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
  )
}
