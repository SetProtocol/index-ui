import React from 'react'
import styled from 'styled-components'

import Footer from '../Footer'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>
      {children}
    </StyledMain>
    <Footer />
  </StyledPage>
)

const StyledPage = styled.div``

const StyledMain = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 144px);
  padding: ${props => props.theme.spacing[6]}px 0;
  background: url(https://index-dao.s3.amazonaws.com/gradient_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
`
export default Page