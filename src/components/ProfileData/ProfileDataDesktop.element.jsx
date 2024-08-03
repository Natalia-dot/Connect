import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const ProfileDataDesktopStyles = styled.div`

display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  gap: 8px;
  padding: 14px;


& h1{
  font-size: 20px;
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
  max-height: 8vw;
margin: 0;

  text-align: justify;
  background-color: ${({ theme }) => theme.palette.background.main};
  border: 1px solid
  ${({ theme }) => theme.palette.border.main};
  border-radius: 10px;
  padding: 8px 16px ;
}

& .pWeight{
    font-weight: 600;
    font-size: 16px;
}

& img{
  width: 8vw;
  height: 8vw;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid
  ${({ theme }) => theme.palette.border.main};

}

& h2{
    margin: 0;
}


& .interests{
  margin: 0 ;
  padding: 4px 12px;
  border: 1px solid ${({theme}) => theme.palette.button.saved};
  background-color: ${({theme}) => theme.palette.textColor.inverted};
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
}


${({ theme }) => theme.mediaquery.tablet} {

    flex-direction: row;

    & h1{
    font-size: 16px;

    }

    & .interests{
  margin: 0 ;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
}

& p{
    max-width: 40vw;
    margin: 0;
    font-size: 15px;
  border-radius: 10px;
  padding: 8px 12px ;
}


& img{
  width: 180px;
  height: 180px;

}
}

${({ theme }) => theme.mediaquery.bigScreen} {

}
${({ theme }) => theme.mediaquery.desktop} {
  
}

${({ theme }) => theme.mediaquery.laptop} {
 

  & p{
font-size: 12px;

}

& .interests{
  margin: 0 ;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
}

& .pWeight{
    font-weight: 500;
    font-size: 13px;
    padding: 4px 8px;
}

& h1{
  font-size: 16px;
  font-weight: 500;
  border: 3px solid ${({theme}) => theme.palette.button.saved};
  border-radius: 10px;
  padding: 2px 8px ;
  background-color: ${({ theme }) => theme.palette.background.main};
}


}


`




export const ProfileDataDesktopElement = ({children}) => {
    const { theme } = useTheme()
  return (
    <ProfileDataDesktopStyles>{children}</ProfileDataDesktopStyles>
  )
}
