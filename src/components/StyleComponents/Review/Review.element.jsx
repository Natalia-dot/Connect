import styled from "@emotion/styled"

const ReviewElementStyle = styled.div`

text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
align-items: center;
padding: 20px 0 0 0;

    background-color: ${({ theme }) => theme.palette.background.main};
  border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main};
  border-radius: ${({ theme }) => theme.spacing(1.5)};
 


& img{
    width: 60px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
}

& p, h2,
  h3,
  h4 {
    margin: 0;
  }


  h2{
    font-weight: 600;
    font-size: 22px;
  }

  & p {
        padding: 20px 0 0 0;
      max-height: 60%;
      max-width: 90%;
      font-size: 20px;
      overflow: auto;
      font-weight: 300;
      text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* white-space: nowrap; */
    overflow: auto;
    }




  ${({ theme }) => theme.mediaquery.bigScreen} {
    width: 48%;
    height: 65%;
    /* & img {
      width: 35%;
    } */


    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
}


  ${({ theme }) => theme.mediaquery.dektop} {
  
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.laptop} {
    height: 65%;
    & img {
        width: 60px;
    }

    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.tablet} {
    width: 48%;
    min-height: 65%;
    & img {
        width: 60px;
    }

    & p {
      max-height: 70%;
      max-width: 80%;
      font-size: 13px;
    }
    & h3 {
      height: 20%;
      font-size: 15px;
      -webkit-line-clamp: 1;
    }

    & .starss{
    color: rgb(233, 233, 48);
  
  }
  

    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
    width: 90vw;
    height: 60vh;

    & img {
        width: 60px;
    }

    & p {
      max-height: 70%;
      max-width: 80%;
      font-size: 16px;
    }
    & h3 {
      height: 10%;
      font-size: 18px;
      -webkit-line-clamp: 1;
    }
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
    padding: ${({ padding }) => (padding && padding)};
    width: 90vw;
    height: fit-content;

    & img {
        width: 60px;
    }

    & p {
      max-height: 70%;
      max-width: 80%;
      font-size: 16px;
    }
    & h3 {
      height: 10%;
      font-size: 18px;
      -webkit-line-clamp: 1;
    }

  }



 


  


`
    



export const ReviewElement = ({padding, margin, children}) => {
  return (
    <ReviewElementStyle padding={padding} margin={margin}>{children}</ReviewElementStyle>
  )
}
