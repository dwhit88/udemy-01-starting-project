import { useState } from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data'
import Section from './Section'
import Tabs from './Tabs'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()
  const concepts = ['components', 'jsx', 'props', 'state']

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  let tabContent = !selectedTopic ? (
    <p>Please select a topic.</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  )

  let tabButtons = concepts.map((concept) => (
    <TabButton
      key={concept}
      isSelected={selectedTopic === concept}
      onClick={() => handleSelect(concept)}
    >
      {concept[0].toUpperCase() + concept.slice(1)}
    </TabButton>
  ))

  return (
    <Section title="Examples" id="examples">
      <Tabs ButtonsContainer="menu" tabButtons={tabButtons}>
        {tabContent}
      </Tabs>
    </Section>
  )
}
