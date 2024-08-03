import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({justifyContent}) => (justifyContent ? justifyContent : "center")};;
  align-items:  ${({alignItems}) => (alignItems ? alignItems: "center")};
  text-align: justify;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "no-wrap")};
  gap: ${({ gap, theme }) => (gap ? gap : theme.spacing(1.5))};
  margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  padding: ${({ padding, theme }) => (padding ? padding : theme.spacing(0))};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "none")};
  border: ${({border}) => (border ? border : "none")};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : "0px"};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "transparent"};

  


  ${({ theme }) => theme.mediaquery.laptop} {
    /* flex-direction: ${({ mediaqueryDir, direction }) =>
      mediaqueryDir ? mediaqueryDir : direction}; */
  }

  ${({ theme }) => theme.mediaquery.tablet} {
    flex-direction: ${({ mediaqueryDirTablet, direction }) =>
    mediaqueryDirTablet ? mediaqueryDirTablet : direction};
    width: ${({ mediaqueryWidthTablet, width }) =>
    mediaqueryWidthTablet ? mediaqueryWidthTablet : width};
    height: ${({ mediaqueryHeightTablet, height }) =>
    mediaqueryHeightTablet ? mediaqueryHeightTablet : height};
    margin: ${({mediaqueryMarginTablet, margin}) => mediaqueryMarginTablet ? mediaqueryMarginTablet : margin}
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    flex-direction: ${({ mediaqueryDirMobile, direction }) =>
      mediaqueryDirMobile ? mediaqueryDirMobile : direction};
    width: ${({ mediaqueryWidthMobile, width }) =>
      mediaqueryWidthMobile ? mediaqueryWidthMobile : width};
      height: ${({ mediaqueryHeightMobile, height }) =>
      mediaqueryHeightMobile ? mediaqueryHeightMobile : height};
    margin: ${({mediaqueryMarginMobile, margin}) => mediaqueryMarginMobile ? mediaqueryMarginMobile : margin}
  }
  ${({ theme }) => theme.mediaquery.miniMobile} {
    flex-direction: ${({ mediaqueryDirMobile, direction }) =>
      mediaqueryDirMobile ? mediaqueryDirMobile : direction};
    width: ${({ mediaqueryWidthMobile, width }) =>
      mediaqueryWidthMobile ? mediaqueryWidthMobile : width};
      height: ${({ mediaqueryHeightMiniMobile, height }) =>
      mediaqueryHeightMiniMobile ? mediaqueryHeightMiniMobile : height};
    margin: ${({mediaqueryMarginMobile, margin}) => mediaqueryMarginMobile ? mediaqueryMarginMobile : margin}
  }



`;

export const FlexDir = ({
  children,
  direction,
  mediaqueryDir,
  gap,
  height,
  width,
  margin,
  padding,
  mediaqueryWidthTablet,
  mediaqueryWidthMobile,
  wrap,
  minHeight,
  mediaqueryDirMobile,
  mediaqueryDirTablet,
  mediaqueryMarginMobile,
  mediaqueryMarginTablet,
  mediaqueryHeightMobile,
  mediaqueryHeightTablet,
  mediaqueryHeightMiniMobile,
  border,
  borderRadius,
  backgroundColor,
  justifyContent,
  onClick,
  alignItems,
  maxWidth
}) => {
  const { theme } = useTheme();

  return (
    <FlexStyle
      minHeight={minHeight}
      maxWidth={maxWidth}
      wrap={wrap}
      theme={theme}
      mediaqueryWidthTablet={mediaqueryWidthTablet}
      mediaqueryWidthMobile={mediaqueryWidthMobile}
      mediaqueryHeightTablet={mediaqueryHeightTablet}
      padding={padding}
      width={width}
      height={height}
      gap={gap}
      onClick={onClick}
      margin={margin}
      direction={direction}
      mediaqueryDir={mediaqueryDir}
      mediaqueryDirTablet={mediaqueryDirTablet}
      mediaqueryDirMobile={mediaqueryDirMobile}
      mediaqueryMarginMobile={mediaqueryMarginMobile}
      mediaqueryHeightMobile={mediaqueryHeightMobile}
      mediaqueryMarginTablet={mediaqueryMarginTablet}
      mediaqueryHeightMiniMobile={mediaqueryHeightMiniMobile}
      border={border}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </FlexStyle>
  );
};
