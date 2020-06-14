import React from 'react'

import TypeWriter from '../TypeWriter'
import { ContentContainer } from '../Containers'
import ContactCard from '../ContactCard'

const ContactSection = ({ navId, sectionTitle, title, description, links, avatar }) => {
  return (
    <>
      <TypeWriter anchorId={navId} text={sectionTitle} />
      <ContentContainer>
        <ContactCard title={title} desc={description} links={links} avatar={avatar} />
      </ContentContainer>
    </>
  )
}

export default ContactSection