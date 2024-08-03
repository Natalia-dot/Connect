import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const ChatColumnStyles = styled.div`




  padding: ${({ theme }) => theme.spacing(1.5)};

overflow-y: ${({scroll}) => scroll ? scroll : "scroll"};
::-webkit-scrollbar {
  width: 10px;
}
background-color: ${({ theme }) => theme.palette.form.main};
display: ${({display})=> display ? display : "flex"};
justify-content: start;
align-items: ${({align}) => align ? align : "center"};
flex-direction: column;
gap: 8px;
margin: 4px; 

height: 100%;

width: 95%;


${({ theme }) => theme.mediaquery.mobile} {
  gap: 4px;
margin: 4px; 
padding: 0;
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    margin: 4px;
    padding: 0;
  }






`



export const ChatColumnElement = ({children, display, id}) => {
    const { theme } = useTheme()
  return (
    <ChatColumnStyles theme={theme} display={display} id={id}>{children}</ChatColumnStyles>
  )
}
