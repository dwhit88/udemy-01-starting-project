import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'
import Section from './Section'

export default function CoreConcepts() {
  let coreConcepts = (
    <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept key={concept.title} {...concept} />
      ))}
    </ul>
  )

  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>{coreConcepts}</ul>
    </Section>
  )
}
