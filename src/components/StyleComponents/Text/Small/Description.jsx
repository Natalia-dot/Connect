import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const DescriptionStyles = styled.small`
font-size: 20px;
width: 80%;
text-align: left;
border-radius: 5px;
padding: 10px;
  
  ${({ theme }) => theme.mediaquery.tablet} {
    font-size: ${({fontSizeTablet}) => fontSizeTablet ? fontSizeTablet : "20px"};
    text-align: justify;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    font-size: ${({fontSizeMobile}) => fontSizeMobile ? fontSizeMobile : "16px"};
    text-align: justify;
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    font-size: ${({fontSizeMobile}) => fontSizeMobile ? fontSizeMobile : "16px"};
    text-align: justify;
  }
`

export const Description = ({children, fontSizeMobile, fontSizeTablet}) => {
  const {theme} = useTheme()
  return (
    <DescriptionStyles fontSizeMobile={fontSizeMobile} fontSizeTablet={fontSizeTablet} >{children}</DescriptionStyles>
  )
}
