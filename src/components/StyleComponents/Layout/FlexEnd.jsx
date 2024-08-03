import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"


const FlexEndStyles = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: ${({width}) => width ? width : "90%"};
height: ${({height}) => height ? height : "30px"};
background-color: ${({ theme, variant }) => 
variant =="normal" ? theme.palette.background.main :
variant == "inverted" && theme.palette.form.main


};
border-radius: ${({ theme }) => theme.spacing(1)};
  border: ${({ theme }) => theme.spacing(0.1)} solid
    ${({ theme }) => theme.palette.border.main};
padding: ${({padding}) => padding ? padding : "1rem" };
margin: 0 4px 0 4px;
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

  padding: 2px;
  }


${({ theme }) => theme.mediaquery.bigScreen} {

padding: 20px;
}



${({ theme }) => theme.mediaquery.tablet} {
  padding: 4px;
  height: 20%;

  }

  ${({ theme }) => theme.mediaquery.mobile} {
    padding: 8px;
    margin: 2px 0 4px 0;
    height: 10%;
  
    }


  ${({ theme }) => theme.mediaquery.miniMobile} {
    /* padding: 8px;
    margin: 4px 0 4px 0;
    height: 5%;
   */
    }

`

export const FlexEnd = ({children, padding, variant, width, height, onClick}) => {
  const { theme } = useTheme();
  return (
    <FlexEndStyles theme={theme} height={height} onClick={onClick} adding={padding} variant={variant} width={width}>{children}</FlexEndStyles>
  )
}
