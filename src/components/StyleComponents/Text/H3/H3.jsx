import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H3Styles = styled.h3`
  margin: ${({margin}) => margin ? margin : "0"};
  text-align: ${({textAlign}) => textAlign ? textAlign : "left"};
  width: 100%;
  padding: ${({padding}) => padding ? padding : "1rem 25% 1rem 0"};
  font-size: ${({fontSize}) => fontSize ? fontSize : "1.5em"};

  ${({ theme }) => theme.mediaquery.laptop} {
    padding: ${({paddingTablet}) => paddingTablet ? paddingTablet : "0"};
  }
  
  ${({ theme }) => theme.mediaquery.tablet} {
    text-align: center;
    font-size: ${({fontSizeTablet}) => fontSizeTablet ? fontSizeTablet : "2.5vw"};
    padding: ${({paddingTablet}) => paddingTablet ? paddingTablet : "0"};
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    text-align: center;
    font-size: ${({fontSizeMobile}) => fontSizeMobile ? fontSizeMobile : "2.7vw"};
    padding: ${({paddingTablet}) => paddingTablet ? paddingTablet : "0"};

  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    text-align: center;
    font-size: ${({fontSizeMobile}) => fontSizeMobile ? fontSizeMobile : "2.7vw"};
    padding: ${({paddingTablet}) => paddingTablet ? paddingTablet : "0"};

  }
`

export const H3Custom = ({children, textAlign, padding, margin, fontSize, paddingTablet, fontSizeMobile, fontSizeTablet}) => {
  const { theme } = useTheme()
  return (
    <H3Styles fontSizeTablet={fontSizeTablet} fontSizeMobile={fontSizeMobile} paddingTablet={paddingTablet} fontSize={fontSize} theme={theme} margin={margin} padding={padding} textAlign={textAlign} >{children}</H3Styles>
  )
}