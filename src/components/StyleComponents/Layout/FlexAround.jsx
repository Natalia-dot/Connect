import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"


const FlexAroundStyles = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: ${({width}) => width ? width : "100%"};
height: 30px;


& h4 {
  font-size: 15px;
}

& .profilePicPost{
    border: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}

& .author{
    font-size: 16px;
}

${({ theme }) => theme.mediaquery.laptop} {


  }


${({ theme }) => theme.mediaquery.bigScreen} {


}



${({ theme }) => theme.mediaquery.tablet} {

  height: 20%;

  }

  ${({ theme }) => theme.mediaquery.mobile} {
 
    margin: 2px 0 4px 0;
    height: 10%;
  
    }


  ${({ theme }) => theme.mediaquery.miniMobile} {
    
    }

`

export const FlexAround = ({children, padding, width}) => {
  const { theme } = useTheme();
  return (
    <FlexAroundStyles theme={theme} padding={padding}  width={width}>{children}</FlexAroundStyles>
  )
}
