import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H1Styles = styled.h1`
  margin: 0;
  text-align: start;
  width: 100%;
  font-size: 4em;
  line-height: 1;
  color: ${({ theme }) => theme.palette.text};

  ${({ theme }) => theme.mediaquery.tablet} {
    text-align: center;
    font-size: 7vw;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    text-align: center;
    font-size: 9vw;
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    text-align: center;
    font-size: 9vw;
  }
`

export const H1Custom = ({children}) => {
  const { theme } = useTheme();
  return (
    <H1Styles theme={theme} >{children}</H1Styles>
  )
}