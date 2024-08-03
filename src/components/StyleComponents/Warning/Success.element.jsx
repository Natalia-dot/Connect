import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const SuccessElementStyled=styled.div`
gap: 8px;
display: flex;
align-items: center;
justify-content: center;
width: "fit-content";
border: 2px solid #09e347;
border-radius: 10px;
padding: 8px 20px;
font-size: 20px;
background-color: ${({theme})=> theme.palette.background.success};
cursor: pointer;

 :hover{
    transform: scale(1.05)
}

& .material-symbols-outlined{
color: #09e347;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

& span{
    font-weight: 600;
}



`

export const SuccessElement = ({children, onClick}) => {
    const {theme} = useTheme()
  return (
    <SuccessElementStyled onClick={onClick} theme={theme}>
        <span className="material-symbols-outlined">
where_to_vote
</span>
        {children}
        </SuccessElementStyled>
  )
}
