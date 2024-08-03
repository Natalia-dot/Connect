import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H3Styles = styled.h3`
  margin: 0;
  text-align: ${({textAlign}) => textAlign ? textAlign : "center"};
  width: 100%;
  height: 25%;
  padding: 5px 7px;
  font-size: 28px;

  ${({ theme }) => theme.mediaquery.tablet} {
    font-size: 24px;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    font-size: 20px;
  }
`

export const H3PerfectFit = ({children, textAlign}) => {
  const { theme } = useTheme()
  return (
    <H3Styles textAlign={textAlign} theme={theme} >{children}</H3Styles>
  )
}