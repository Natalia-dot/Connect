import styled from "@emotion/styled";

const SmallStyles = styled.small`
font-size: 12px;
text-align: center;

`



export const Small = ({children}) => {
  return (
    <SmallStyles>{children}</SmallStyles>
  )
}
