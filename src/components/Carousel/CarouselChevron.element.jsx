import styled from "@emotion/styled"

const CarouselChevronStyle = styled.span`
-webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #dedede;

  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;

font-size: 50px;


:hover{
    transform: scale(1.2)
}
`

export const CarouselChevron= ({children}) => {
  return (
    <CarouselChevronStyle className="material-symbols-outlined">{children}</CarouselChevronStyle>
  )
}
