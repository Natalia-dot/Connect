import styled from "@emotion/styled";

const UlStyles = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction ? direction : "column"};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
  flex-wrap: ${({ wrap }) => wrap ? wrap : "nowrap"};
  align-items: ${({ alignItems }) => alignItems ? alignItems : "center"};
  gap: ${({ gap }) => gap ? gap : "1rem"};
  padding: ${({ padding }) => padding ? padding : "0"};
  width: ${({ width }) => width ? width : "100%"};
  height: ${({ height }) => height ? height : "100%"};
  min-height: ${({ minHeight }) => minHeight ? minHeight : "100%"};
  margin: ${({ margin }) => margin ? margin : "0px"};
 

  li{
    list-style: none;
    font-size: ${({ fontSize }) => fontSize ? fontSize : "1rem"};
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
    text-transform: capitalize;
    height: ${({ liHeight }) => liHeight ? liHeight : "auto"};
    width: ${({ liWidth }) => liWidth ? liWidth : "auto"}
  }
  span{
    font-size: ${({ fontSize }) => fontSize ? fontSize : "2rem"};
    font-weight: 500;
  }

  ${({ theme }) => theme.mediaquery.desktop} {    
    li{
      font-size: ${({ fontSizeTablet }) => fontSizeTablet ? fontSizeTablet : "1.5rem"};
      text-align: left;
    }
  }

  ${({ theme }) => theme.mediaquery.tablet} {    
    li{
      font-size: ${({ fontSizeTablet }) => fontSizeTablet ? fontSizeTablet : "1rem"};
      text-align: left;
    }
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    flex-direction: ${({ mediaqueryDirMobile }) => mediaqueryDirMobile && mediaqueryDirMobile};
    align-items: ${({ alginItemsMobile }) => alginItemsMobile && alginItemsMobile};
    justify-content: ${({ justifyContentMobile }) => justifyContentMobile && justifyContentMobile};
    li{
      font-size: ${({ fontSizeMobile }) => fontSizeMobile ? fontSizeMobile : "0.8rem"};
    }
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    flex-direction: ${({ mediaqueryDirMobile }) => mediaqueryDirMobile && mediaqueryDirMobile};
    align-items: ${({ alginItemsMobile }) => alginItemsMobile && alginItemsMobile};
    justify-content: ${({ justifyContentMobile }) => justifyContentMobile && justifyContentMobile};
    li{
      font-size: ${({ fontSizeMobile }) => fontSizeMobile ? fontSizeMobile : "0.8rem"};
      text-align: left;
    
    }
  }
`

export const UlCustom = ({ children, direction, width, justifyContent, alignItems, height, mediaqueryDirMobile, padding, gap, margin, fontSize, fontSizeTablet, fontSizeMobile, wrap, liHeight, liWidth, minHeight, justifyContentMobile, alginItemsMobile }) => {
  return (
    <UlStyles alginItemsMobile={alginItemsMobile} justifyContentMobile={justifyContentMobile} minHeight={minHeight} liWidth={liWidth} liHeight={liHeight} wrap={wrap} fontSizeMobile={fontSizeMobile} fontSizeTablet={fontSizeTablet} fontSize={fontSize} margin={margin} gap={gap} padding={padding} mediaqueryDirMobile={mediaqueryDirMobile} height={height} alignItems={alignItems} justifyContent={justifyContent} width={width} direction={direction}>{children}</UlStyles>
  )
}