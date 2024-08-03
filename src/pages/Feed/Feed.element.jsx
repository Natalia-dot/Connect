import styled from "@emotion/styled"

const FeedStyled = styled.div`
display: flex;
width: 98vw;
max-height: 160vh;
min-height: 60vh;
flex-wrap: wrap;
justify-content: center;
align-items: start ;
gap: 4px;
margin: 0 1rem 0 1rem ;

border-radius: ${({ theme }) => theme.spacing(2)};
  border: ${({ theme }) => theme.spacing(0.5)} solid
    ${({ theme }) => theme.palette.border.main};

${({ theme }) => theme.mediaquery.bigScreen} {

  }

${({ theme }) => theme.mediaquery.tablet} {
    
    flex-direction: row;
    max-height: 97vh;

  }

  ${({ theme }) => theme.mediaquery.mobile} {
    max-height: 520vh;
    flex-direction: row;
    margin: 0 ${({ theme }) => theme.spacing(0.5)} 0 ${({ theme }) => theme.spacing(0.5)};
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    max-height: 520vh;
    flex-direction: row;
    margin: 0 ${({ theme }) => theme.spacing(0.5)} 0 ${({ theme }) => theme.spacing(0.5)};
  }



`

export const FeedStyle = ({children}) => {
  return (
    <FeedStyled>{children}</FeedStyled>
  )
}
