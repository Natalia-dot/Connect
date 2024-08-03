import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const RoommateCardStyles = styled.div`

  .userimagepost{
    object-fit: cover;
    border-radius: 50%;
    width: 15vw;
    height: 15vw
  }
  p{
    font-size: ${({fontSizeP}) => fontSizeP ? fontSizeP : "auto"};
  }

  ${({ theme }) => theme.mediaquery.tablet} {
    p{
      font-size: ${({fontSizePTablet}) => fontSizePTablet ? fontSizePTablet : "auto"}
    }
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    .userimagepost{
      width: 25vw;
      height: 25vw;
    }
    p{
      font-size: ${({fontSizePMobile}) => fontSizePMobile ? fontSizePMobile : "auto"}
    }
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    .userimagepost{
      width: 25vw;
      height: 25vw;
    }
    p{
      font-size: ${({fontSizePMobile}) => fontSizePMobile ? fontSizePMobile : "auto"}
    }
  }
`

export const RoommateCardStyle = ({children, fontSizePMobile, fontSizePTablet, fontSizeP}) => {
  const { theme } = useTheme()

  return <RoommateCardStyles fontSizeP={fontSizeP} fontSizePTablet={fontSizePTablet} fontSizePMobile={fontSizePMobile} theme={theme}>{children}</RoommateCardStyles>
}