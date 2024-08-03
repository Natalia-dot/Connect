import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const AnchorStyles = styled.p`
color: ${({ theme })=> theme.palette.anchor.main};
text-decoration: underline;
margin: ${({margin, theme}) => margin ? margin : 0};

`




export const Anchor = ({children, margin, onClick}) => {
  const theme = useTheme();
  return (
    <AnchorStyles margin={margin} onClick={onClick}>{children}</AnchorStyles>
  )
}
