import styled from "@emotion/styled"


const NothingHereStyles = styled.div`
height: ${({height}) => height ? height : "auto"};
`



export const NothingHereElement = ({children, height}) => {
  return (
    <NothingHereStyles height={height}>{children}</NothingHereStyles>
  )
}
