import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"


const PaginacionStyle= styled.button`
color: ${({variant, theme}) =>
  variant == "normal" 
  ? theme.palette.textColor.main :
  variant == "disabled" 
  ? theme.palette.textColor.second
: variant == "clicked" 
&& theme.palette.textColor.main};
 border: ${({ theme }) => theme.spacing(0.15)} solid
    ${({ theme }) => theme.palette.border.main};
width: ${({width})=> width ? width : "40px"};
height: ${({height})=> height ? height : "40px"};
font-size: 16px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
/* border: ${({ theme }) => theme.spacing(0.1)} solid
    ${({ theme }) => theme.palette.border.main}; */
    border-radius: 4px;
background-color: ${({variant, theme}) =>
  variant == "normal" 
  ? theme.palette.form.main :
  variant == "disabled" 
  ? theme.palette.form.main
: variant == "clicked" 
&& theme.palette.button.mediumGreen};

&:hover{
  border: ${({ variant , theme}) => 
  variant == "normal" && `2px solid ${theme.palette.button.mediumGreen}` }; 
  cursor: ${({variant})=> variant == "normal" && "pointer"} ;
  
}


  ${({ theme }) => theme.mediaquery.bigScreen} {

    width: ${({width})=> width ? width : "40px"};
height: ${({height})=> height ? height : "40px"};

}

${({ theme }) => theme.mediaquery.laptop} {

  width: ${({width})=> width ? width : "40px"};
height: ${({height})=> height ? height : "40px"};

}

${({ theme }) => theme.mediaquery.tablet} {

  width: ${({mediaQueryWTablet, width})=> mediaQueryWTablet ? mediaQueryWTablet : width};
height: ${({mediaQueryHTablet, height})=> mediaQueryHTablet ? mediaQueryHTablet : height};

}
${({ theme }) => theme.mediaquery.mobile} {

  width: ${({mediaQueryWMobile, width})=> mediaQueryWMobile ? mediaQueryWMobile : width};
height: ${({mediaQueryHMobile, height})=> mediaQueryHMobile ? mediaQueryHMobile : height};
}


${({ theme }) => theme.mediaquery.miniMobile} {
  width: ${({mediaQueryWMobile, width})=> mediaQueryWMobile ? mediaQueryWMobile : width};
height: ${({mediaQueryHMobile, height})=> mediaQueryHMobile ? mediaQueryHMobile : height};

}




`


export const Pagination = ({children, onClick, variant, height, width, mediaQueryWMobile , mediaQueryHMobile, mediaQueryHTablet, mediaQueryWTablet }) => {
  const { theme } = useTheme();

  return (
    <PaginacionStyle theme={theme} onClick={onClick} variant={variant} height={height} width={width} mediaQueryWMobile={mediaQueryWMobile} mediaQueryHMobile={mediaQueryHMobile} mediaQueryHTablet={mediaQueryHTablet} mediaQueryWTablet={mediaQueryWTablet}>{children}
</PaginacionStyle>

)
}












