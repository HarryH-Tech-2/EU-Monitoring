export interface StatementOptions {
  topic: string
  severity: number
  includeStakeholder: boolean
  includeTimeline: boolean
  includeJointStatement: boolean
}

export function generateStatement(options: StatementOptions): string {
  const { topic, severity, includeStakeholder, includeTimeline, includeJointStatement } = options

  const severityPhrases = [
    'has noted with interest',
    'is monitoring developments regarding',
    'acknowledges the complexity surrounding',
    'expresses concern about',
    'views with grave concern',
  ]

  const actionVerbs = [
    'continue to monitor',
    'closely observe',
    'maintain vigilant oversight of',
    'intensify monitoring efforts regarding',
    'exercise maximum oversight concerning',
  ]

  const paragraphs: string[] = []

  // Opening paragraph
  const opening = `The Commission ${severityPhrases[severity - 1]} recent developments in the field of ${topic}. In accordance with our mandate to ensure comprehensive monitoring of all relevant situations, we have initiated a structured observation protocol to assess the evolving landscape.`
  paragraphs.push(opening)

  // Severity-based body paragraph
  const severityTexts = [
    `While the current situation does not warrant immediate action, we believe it is prudent to maintain awareness of potential implications. Our monitoring framework will allow us to detect any shifts that may require further consideration at a later date.`,

    `The situation merits regular observation to ensure that any emerging trends are properly documented. We have established appropriate monitoring mechanisms to track relevant indicators and will review our findings on an ongoing basis.`,

    `Given the multifaceted nature of this matter, we have escalated our monitoring intensity to ensure comprehensive coverage of all relevant dimensions. Multiple directorates are now coordinating their observation efforts to maintain a holistic perspective.`,

    `The Commission considers this matter to require elevated vigilance. We are actively monitoring the situation through our enhanced oversight protocols and are prepared to convene additional working groups should circumstances necessitate deeper analytical engagement.`,

    `This represents a matter of the utmost monitoring priority. We have activated our maximum oversight protocols and are conducting continuous real-time observation across all relevant sectors. An inter-directorate task force has been established to ensure no aspect of this situation escapes appropriate scrutiny.`,
  ]
  paragraphs.push(severityTexts[severity - 1])

  // Optional stakeholder paragraph
  if (includeStakeholder) {
    const stakeholderText = `In line with our commitment to inclusive governance, we are undertaking extensive stakeholder consultation to gather diverse perspectives on this matter. This consultative process will inform our ongoing monitoring efforts and ensure that all relevant viewpoints are appropriately documented. We anticipate that the feedback collection phase will provide valuable input for our continued observation activities.`
    paragraphs.push(stakeholderText)
  }

  // Optional timeline paragraph
  if (includeTimeline) {
    const timelineText = `Regarding implementation timelines, we are currently developing a framework for establishing a roadmap to determine appropriate scheduling parameters. Once the preliminary assessment of timeline feasibility is complete, we will be in a position to consider drafting provisional guidance on potential timeframe considerations. This phased approach ensures that any eventual timeline will be appropriately monitored throughout its development.`
    paragraphs.push(timelineText)
  }

  // Closing paragraph
  let closing = `The Commission will ${actionVerbs[severity - 1]} these developments and stands ready to provide further monitoring as the situation evolves. We remain committed to ensuring that appropriate levels of observation are maintained at all times.`

  if (includeJointStatement) {
    closing += ` This position is aligned with ongoing discussions with relevant partners and reflects our collaborative approach to comprehensive monitoring.`
  }

  paragraphs.push(closing)

  return paragraphs.join('\n\n')
}
