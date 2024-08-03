import styled from "@emotion/styled";

const GalleryStyles = styled.div`

`

export const GalleryCustom = ({children}) => {

  return (
    <GalleryStyles>
      {children}
    </GalleryStyles>
  )
}