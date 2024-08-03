import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const MiniCardsStyle = styled.div`
  color: ${({theme}) => theme.palette.textColor.main};
  width: 28vw;
  aspect-ratio: 3/2;
  margin: ${({theme})=>
    theme.spacing(1)};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  & img{
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
    border-radius: 10px;
  };
  & h4{
    text-align: left;
    width: 100%;
    margin: 0;
    font-size: 1.6vw;
  }
  & ul{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.7rem;
  }
  & li{
    list-style: none;
    font-weight: 400;
    font-size: 1.2vw;
    color: black;
    text-align: left;
    width: fit-content;
    float: left;
    padding: 0 4px;
    background-color: ${({theme}) => theme.palette.button.mediumGreenOpaco};
    border-radius: 5px;
  }

  ${({theme}) => theme.mediaquery.desktop}{
      & h4 {
        font-size: 1.3vw
      }
      & li {
        font-size: 1vw;
      }
  }

  ${({theme}) => theme.mediaquery.tablet}{
      width: 40vw;
      gap: 0.4rem;
      & h4 {
        font-size: 2vw
      }
      & li {
        font-size: 1.6vw;
      }
  }

  ${({theme}) => theme.mediaquery.mobile}{
      width: 80vw;
      & h4 {
        font-size: 3.4vw
      }
      & li {
        font-size: 2.5vw;
      }
  };

  ${({theme}) => theme.mediaquery.miniMobile}{
      width: 80vw;
      & h4 {
        font-size: 3.4vw
      }
      & li {
        font-size: 2.5vw;
      }
  };
`


export const MiniCards = ({children}) => {
  const { theme } = useTheme()
    return (
      <MiniCardsStyle theme={theme} >{children}</MiniCardsStyle>
    )
}
