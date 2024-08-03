import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H3Styles = styled.h3`
margin: 0.5rem;
font-weight: 500;
  ${({ theme }) => theme.mediaquery.tablet} {

  }

  ${({ theme }) => theme.mediaquery.mobile} {

  }
`

export const H3Form = ({children}) => {
  const { theme } = useTheme()
  return (
    <H3Styles>{children}</H3Styles>
  )
}