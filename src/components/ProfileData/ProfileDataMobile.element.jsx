import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const  ProfileDataMobileStyles = styled.div`

display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  gap: 8px;


  & h1{
    font-size: 24px;
    margin: 0;
    font-weight: 500;
    border: 3px solid ${({theme}) => theme.palette.button.saved};
    border-radius: 10px;
    padding: 2px 8px ;
    margin: 4px;
    background-color: ${({ theme }) => theme.palette.background.main};
  }

  & p{
    overflow: auto;
  max-height: 25vw;
    margin: 0 30px 0 30px;
    text-align: justify;
    background-color: ${({ theme }) => theme.palette.background.main};
    border: 1px solid
    ${({ theme }) => theme.palette.border.main};
    border-radius: 10px;
    padding: 8px 16px ;
  }

  & img{
    width: 50vw;
    height: 50vw;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid
    ${({ theme }) => theme.palette.border.main};

  }

& .links{
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 90vw;
    margin: 4px;
}

& .material-symbols-outlined{
  
    font-size: 28px;
    margin: 0 20px 0 30px;

}


  & .interests{
    margin: 0 ;
    padding: 4px 16px;
    border: 2px solid ${({theme}) => theme.palette.button.saved};
    background-color: ${({theme}) => theme.palette.textColor.inverted};
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  & .line {
    border-top: 2px solid ${({theme}) => theme.palette.border.main};;
    width: 90vw;
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {

    /* gap: 4px; esto lo he quitado, parece que normaliza el spacing en el perfil*/
    & h1{
    font-size: 20px;
  }
    & img{
    width: 40vw;
    height: 40vw;
    }

    & .interests{
    margin: 0;
    padding: 2px 10px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid ${({theme}) => theme.palette.button.saved};
  }

  & p{
    font-size: 13px;
    margin: 0 16px 0 16px;
    text-align: justify;
    border: 1px solid
    ${({ theme }) => theme.palette.border.main};
    border-radius: 10px;
    padding: 8px 16px ;
  }
  & h1{
    font-size: 18px;
    margin: 0;
    font-weight: 400;
    border: 1px solid ${({theme}) => theme.palette.button.saved};
    border-radius: 10px;
    padding: 2px 8px ;
    margin: 4px;
    background-color: ${({ theme }) => theme.palette.background.main};
  }
  & .links{
    font-size: 16px;
    margin: 2px;
  }
  & .material-symbols-outlined{
  
  font-size: 25px;
  margin: 0 20px 0 30px;

}

}



`



export const ProfileDataMobileElement = ({children}) => {
const { theme } = useTheme()

  return (
    <ProfileDataMobileStyles theme={theme}>{children}</ProfileDataMobileStyles>
  )
}
