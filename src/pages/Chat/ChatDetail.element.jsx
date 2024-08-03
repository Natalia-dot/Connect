import styled from "@emotion/styled"

const ChatDetailStyles = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width: 100%;
height: 18%;
padding: 4px;
border-radius: 10px;
background-color: ${({variant, theme}) => variant == "active" ? theme.palette.button.mediumGreen : variant == "inactive" && null};


& h1, p {
  margin: 0;
}

& img {
  width: 5vw;
  height: 5vw;
  object-fit: cover;
  border-radius: 50%;
  margin: 4px;
}

& h1{
  font-size: 20px;
}

& p{
  font-size: 15px;
  text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}




`


export const ChatDetailElement = ({children, onClick, variant}) => {
  return (
    <ChatDetailStyles onClick={onClick} variant={variant}>{children}</ChatDetailStyles>
  )
}
