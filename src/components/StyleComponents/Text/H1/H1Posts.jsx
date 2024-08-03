import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";


const H1Styles = styled.h1`
  margin: ${({margin}) => margin ? margin : "1rem"};
  font-size: 2rem;
  text-align: center;
  color: ${({theme}) => theme.palette.textColor.main};
  -webkit-text-stroke: 1px #35363a;


  ${({ theme }) => theme.mediaquery.mobile} {
    font-size: 25px;
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    font-size: 25px;

  }

`

export const H1Posts = ({children, margin, variant}) => {
    const { theme } = useTheme()
  return (
    <H1Styles margin={margin} theme={theme} variant={variant}>{children}</H1Styles>
  )
}