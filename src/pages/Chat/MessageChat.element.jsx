import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'



const MessageChatStyle = styled.div`

display: flex;
/* align-items: start; */
justify-content: space-between;
min-width: 50%;
max-width: 45%;
height: auto;
padding: 12px;
background-color: ${({ theme, variant }) => variant == "own" ? theme.palette.button.mediumGreen : variant == "otherUser" && theme.palette.background.main};
justify-self: ${({variant}) => variant == "own" ? "end" : variant == "otherUser" && "start"};
border-radius: 10px;
  /* border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main}; */
  margin: ${({ theme, variant }) => variant == "own" ? "0 0 0 45%": variant == "otherUser" && "0 45% 0 0"};



& p {
    margin: 0 8px;
    font-weight: 500;
}

${({ theme }) => theme.mediaquery.mobile} {
  & p {
    margin: 0 8px;
    font-weight: 400;
}
    min-width: 80%;
max-width: 80%;

margin: ${({ theme, variant }) => variant == "own" ? "0 0 0 18%": variant == "otherUser" && "0 18% 0 0"};



  }

  ${({ theme }) => theme.mediaquery.miniMobile} {

    & p {
    margin: 0 8px;
    font-weight: 400;
}
    min-width: 80%;
max-width: 80%;

margin: ${({ theme, variant }) => variant == "own" ? "0 0 0 18%": variant == "otherUser" && "0 18% 0 0"};

  }







`




export const MessageChatElement = ({children, variant}) => {
    const { theme } = useTheme()
  return (
    <MessageChatStyle variant={variant} theme={theme}>{children}</MessageChatStyle>
  )
}
