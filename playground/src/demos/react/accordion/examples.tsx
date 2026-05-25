import { Accordion } from '@heroui/react'
import { currentExample, faqItems } from '../../shared'

function AccordionList({ extraTrigger, rootProps = {} }: { extraTrigger?: boolean; rootProps?: Record<string, unknown> }) {
  return (
    <Accordion className="w-full max-w-md" {...rootProps}>
      {faqItems.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Heading>
            <Accordion.Trigger>
              {extraTrigger ? <span className="demo-icon">{index + 1}</span> : null}
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
  )
}

export default function AccordionExamples() {
  const example = currentExample()

  if (example === 'multiple') return <AccordionList rootProps={{ allowsMultipleExpanded: true }} />
  if (example === 'disabled') return <AccordionList rootProps={{ isDisabled: true }} />
  if (example === 'without-separator') return <AccordionList extraTrigger rootProps={{ hideSeparator: true }} />
  if (example === 'surface') return <AccordionList rootProps={{ variant: 'surface' }} />
  if (example === 'custom-indicator' || example === 'faq' || example === 'custom-styles') return <AccordionList extraTrigger />
  if (example === 'controlled' || example === 'custom-render-function') return <AccordionList />

  return <AccordionList />
}
