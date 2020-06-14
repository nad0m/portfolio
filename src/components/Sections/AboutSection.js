import React from 'react'

import TypeWriter from '../TypeWriter'
import { ContentContainer } from '../Containers'
import { DynamicText } from '../Shared'
import Terminal from '../Terminal'

const AboutSection = ({ navId, sectionTitle, description, terminalData }) => {

  return (
    <>
      <TypeWriter anchorId={navId} text={sectionTitle} />
      <ContentContainer>
        <DynamicText>
          {description}
        </DynamicText>
        <Terminal { ...terminalData } />
      </ContentContainer>
    </>
  )
}