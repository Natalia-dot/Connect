import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
 .figureNav span {
  color: rgb(74, 206, 130);
  font-weight: 700;
}
.headerSmall span {
  color: rgb(74, 206, 130);
}


  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 13vh;
  /* margin-bottom: 20px; */
  min-height: 100px;
  max-height: 140px;

  background-color: ${({ theme }) => theme.palette.header.main};


& div {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
}
.navUno {
  display: flex;
  justify-content: flex-end;
}
.navUno ul {
  margin: px;
  display: flex;
  height: 1vh;
  color: rgb(74, 206, 130);
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(74, 206, 130);
  color: white;
}

.redes {
  display: flex;

  gap: 2vw;
  margin-right: 2vw;
}
.botonesH {
  display: flex;
  gap: 10px;

  justify-content: flex-end;
  align-items: center;
  margin-right: 3vw;
  padding-top: 10px;
}
.user-img{
 height: 50px;
 width: 50px;
 background-color:rgb(74, 206, 130);
 object-fit: cover;
 padding: 2px;

 border-radius:50%;
}
.botonesH img:hover{
    background-color: ${({ theme }) => theme.palette.background.header};
 cursor: pointer;
}
& nav {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  color: rgb(74, 206, 130);
  font-weight: 600;
  font-size: 18px;
}

.headerImg img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
 
}
.headerImg {
  display: flex;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navDos ul li:hover {
  cursor: pointer;
}
.navDos a {
    position: relative;
    overflow: hidden;
    text-decoration: none;
  }
  
  .navDos a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px; 
    background-color: rgb(74, 206, 130);
    transform-origin: center;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .navDos a:hover::before {
    transform: scaleX(1);
  }
  
  & li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 15px;
  }




.mainNav {
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60vw;
  max-width: 1000px;
}
body.light .headerDesktop {
background-color: #f0f9f3;
}


`;

export const HeaderElement = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
