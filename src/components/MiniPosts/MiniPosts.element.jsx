import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const MiniPostStyles = styled.div`
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.form.main};
  border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main};
  border-radius: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) => theme.spacing(1)};
  width: 45vw;
  height: 340px;
  margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1.5))};
  & img {
    width: 30%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
    border: ${({ theme }) => theme.spacing(0.5)} solid
      ${({ theme }) => theme.palette.border.main};
  }

  & p, h2,
  h3,
  h4 {
    margin: 0;
  }

  & h2{
    margin: 8px 0 8px 0;
  }

  & p {
    max-height: 70%;
    max-width: 100%;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: wrap;
  overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    overflow-y: hidden;
    overflow-x: hidden ;
    -webkit-hyphens: auto;
-moz-hyphens: auto;
-ms-hyphens: auto;
hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  & h3, h2 {
    height: 30%;
    font-size: 20px;
    align-self: center;
    
  }

  ${({ theme }) => theme.mediaquery.bigScreen} {
    max-width: 47vw;
    height: 40vh;
    max-height: 40vh;
    & img {
      width: 15%;
    }

    & p {
    
      max-height: 70%;
      max-width: 100%;
      font-size: 13px;
    }
    & h3 {
      height: 30%;
      font-size: 15px;
    }

    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
}



  ${({ theme }) => theme.mediaquery.laptop} {

    & img {
      width: 20%;
    }
   
    height: 38vh;
  }

  ${({ theme }) => theme.mediaquery.tablet} {
    width: 45vw;
    height: 28vh;
    & img {
      width: 30%;
    }

    & p {
      max-height: 70%;
      max-width: 100%;
      font-size: 13px;
    }
    & h2 {
      height: 30%;
      font-size: 15px;
    }

    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
    width: 90vw;
    height: 70vh;

    & img {
      width: 60%;
    }

    & p {
      max-height: 70%;
      max-width: 100%;
      font-size: 16px;
    }
    & h3 {
      height: 10%;
      font-size: 15px;
    }
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
    width: 90vw;
    height: 80vh;

    & img {
      width: 60%;
    }

    & p {
      max-height: 70%;
      max-width: 100%;
      font-size: 16px;
    }
    & h2 {
      height: 20%;
      font-size: 20px;
      text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    /* white-space: nowrap; */
    overflow: hidden;
    }
  }
`;

export const MiniPostStyle = ({ children }) => {
  const { theme } = useTheme();

  return <MiniPostStyles theme={theme}>{children}</MiniPostStyles>;
};
