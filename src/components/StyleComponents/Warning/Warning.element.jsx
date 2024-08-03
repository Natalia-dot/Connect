import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const WarningElementStyled=styled.div`
gap: 8px;
display: flex;
align-items: center;
justify-content: center;
width: "fit-content";
border: 2px solid red;
border-radius: 10px;
padding: 8px 20px;
font-size: 20px;
background-color: ${({theme})=> theme.palette.background.warning};
cursor: pointer;

 :hover{
    transform: scale(1.05)
}

& .material-symbols-outlined{
color: red;
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

export const WarningElement = ({children, onClick}) => {
    const {theme} = useTheme()
  return (
    <WarningElementStyled onClick={onClick} theme={theme}>
        <span className="material-symbols-outlined">
fmd_bad
</span>
        {children}
        </WarningElementStyled>
  )
}
