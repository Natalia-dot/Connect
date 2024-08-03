import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const ChatElementStyles = styled.div`


height: 80vh;

display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
padding: ${({ theme }) => ( theme.spacing(1.5))};
gap: 8px;

& .line {
    border-top: 2px solid ${({theme}) => theme.palette.border.main};;
    width: 90%;
  }

& h2{
  font-size: 30px;
  margin: 16px 0 0 0;
}

& .textArea{
  width: 40vw;
  height: 40px;
font-size: 18px;
  overflow-y: scroll;
  border-radius: 10px;
  border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main};
}


${({ theme }) => theme.mediaquery.mobile} {
  height: 87vh;
  margin: 4px 0 ;
  padding: ${({ theme }) => ( theme.spacing(0.5))};
  & .textArea{
  width: 60vw;

}


& h2{
  font-size: 24px;
  margin: 12px 0 0 0;
}

  }

  ${({ theme }) => theme.mediaquery.miniMobile} {

    height: 87vh;
    margin: 8px 0 ;


    & .textArea{
  width: 60vw;

}

& h2{
  font-size: 24px;
  margin: 12px 0 0 0;
}

  }




`


export const ChatElement = ({children}) => {
    const { theme } = useTheme()
  return (
    <ChatElementStyles theme={theme}>{children}</ChatElementStyles>
  )
}
