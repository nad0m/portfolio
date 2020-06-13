import React from 'react'
import styled from 'styled-components'

import breakpoint from 'styled-components-breakpoint';

export const DynamicText = styled.p`
  line-height: 1.5;
  font-size: 14px;
  ${breakpoint('sm')`
    font-size: 16px;
  `}
`