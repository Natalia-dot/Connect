import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const SearchImageStyle = styled.img`
  width: 17vh;
  aspect-ratio: 6/20;
  border-radius: 50px;
  object-fit: cover;
  margin-top: ${({marginTop}) => marginTop ? marginTop : "auto"};

  ${({ theme }) => theme.mediaquery.tablet} {
    width: 10vw;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    width: 13vw;
    aspect-ratio: ${({aspectRatioMobile}) => aspectRatioMobile && aspectRatioMobile};
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    width: 13vw;
    aspect-ratio: ${({aspectRatioMobile}) => aspectRatioMobile && aspectRatioMobile};
  }
`

export const SearchImgCustom = ({ src, marginTop, aspectRatioMobile, marginTopMobile }) => {
  const { theme } = useTheme()
  return (
    <SearchImageStyle aspectRatioMobile={aspectRatioMobile} theme={theme} marginTop = {marginTop} src={src}/>
  )
}