import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  font-size: 10px;
  list-style: none;
  word-break: break-word;
`

const Tag = styled.li`
  text-align: center;
  margin: 3px 3px;
  padding: 5px 8px 4px 8px;
  border: 2px solid ${({ theme }) => theme.colors.accentText};
  color: ${({ theme }) => theme.colors.accentText};
  border-radius: 3px;
`

const TagList = ({ tags = ['HTML', 'CSS', 'JavaScript'] }) => {
  return (
    <Wrapper>
      {tags.map((tag => <Tag key={tag}>{tag}</Tag>))}
    </Wrapper>
  )
}

export default TagList