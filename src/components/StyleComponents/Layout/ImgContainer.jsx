import styled from "@emotion/styled";

const ImgContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({height}) => height ? height : "auto"};
  width: ${({width}) => width ? width : "auto"};
  /* aspectRatio: ${({aspectRatio}) => aspectRatio ? aspectRatio : "auto"}; */
`

export const CustomImgContainer = ({width, height, aspectRatio}) => {

  return (
    <>
      <ImgContainerStyle width = {width} height = {height}/>
      <ImgContainerStyle width = {width} height = {height}/>
      <ImgContainerStyle width = {width} height = {height}/>
    </>
  )
}