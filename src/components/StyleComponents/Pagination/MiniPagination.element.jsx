import styled from "@emotion/styled"


const MiniPaginationStyle = styled.div`

color: ${({ theme }) => theme.palette.textColor.main};
 border: ${({ theme }) => theme.spacing(0.15)} solid
    ${({ theme }) => theme.palette.border.main};
    border-radius: 50%;
width: ${({width})=> width ? width : "40px"};
height: ${({height})=> height ? height : "40px"};
font-size: 16px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;




&:hover{
  border: ${({ variant , theme}) => 
  variant == "normal" && `2px solid ${theme.palette.button.mediumGreen}` }; 
  cursor: ${({variant})=> variant == "normal" && "pointer"} ;
  
}



`



export const MiniPaginationElement = ({children, onClick}) => {
    const { theme } = useTheme();

  return (
    <MiniPaginationStyle theme={theme} onClick={onClick}>{children}</MiniPaginationStyle>
  )
}
