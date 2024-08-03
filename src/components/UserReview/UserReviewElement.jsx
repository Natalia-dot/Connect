import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const UserReviewStyles = styled.div`
background-color: ${({theme}) => theme.palette.form.main};
padding:  ${({theme}) => theme.spacing};
width: 80%;

&input {
    min-height: 5rem;
    width: 100%;
}

& img {
    width:100px;
    height: 100px;
}
`



export const UserReviewElement = ({children}) => {
  return (
    <UserReviewStyles>{children}</UserReviewStyles>
  )
}
