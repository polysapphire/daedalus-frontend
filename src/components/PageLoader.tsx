import React from 'react'
import styled from 'styled-components'
import { Spinner } from 'daedalusfinance'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  background-image: url('/images/egg/background.jpg');
  background-repeat: no-repeat;
  background-position: top right;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default PageLoader
