import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"

const NavSpanStyle = styled.span`
cursor: pointer;
color: ${({theme})=> theme.palette.textColor.main} ;

font-size: ${({size})=> size};

  font-variation-settings: ${({variant})=> variant == "fill" && "'FILL' 1"  };
  




`
    


export const NavSpan = ({children, onClick, size, variant}) => {
    const theme = useTheme();

  return (
    <NavSpanStyle onClick={onClick} theme={theme} size={size} variant={variant} className="material-symbols-outlined">{children}</NavSpanStyle>
  )
}
