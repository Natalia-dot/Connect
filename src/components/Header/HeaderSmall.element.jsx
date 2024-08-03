import React from "react";
import styled from "@emotion/styled";

const StyledHeaderSmall = styled.div`
  .zonaMobile {
  background-color: rgba(109, 108, 108, 0.582);
  position: absolute;
  top: 12vh;
  width: 100%;
  min-height: 160vh;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  animation: slideInFromLeft .5s ease-in-out;

}
@keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

.imgDark {

  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: rgb(74, 206, 130);
  cursor: pointer;
  

}

.navMobile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0px 0px 10px 10px;
  z-index: 10;
  position: relative;
  width: 60vw;
}

.headerSmall {
    background-color: ${({ theme }) => theme.palette.header.main};
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
 
}
.logoS {
  width: 30%;
  min-width: 200px;
  max-width: 300px;
 
}
.smallUno {
    background-color: ${({ theme }) => theme.palette.header.main};
width: 100%;
  display: flex;
  
  color: rgb(74, 206, 130);
  justify-content: space-around;
  align-items: center;
  gap: 2vw;
  padding: 0 20px;
  min-height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.267);
}
.botonesHS{
  display: flex;

}

.hamburguesa {
    background-color: ${({ theme }) => theme.palette.header.main};
  border: none;
  color: rgb(74, 206, 130);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.hamburguesa span {
  font-size: 50px;
}

.figureNav {
  margin: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.background.light};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  border-bottom: 2px solid black;
  padding: 0px 20px 5px 5px;
  transition: transform 0.3s ease, color 0.3s ease
}
.figureNav span,
.figureNav a {
  background-color: ${({ theme }) => theme.palette.background.main};
  color: rgb(74, 206, 130);
  font-weight: bold;
  text-decoration: none;
  border-radius: 0px 0px 10px 0px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
}
.figureNav:hover {
  background-color: rgb(74, 206, 130);
  color: rgb(78, 77, 77);
  transform: translateX(10px)
}
.figureNav span {
  font-size: 50px;
  width: 50px;
  height: 50px;
  border-radius: 0px 0px 0px 10px;
}
.buttonHeader{
    border-radius: 5px;
    border: 2px solid rgb(74, 206, 130) ;
    font-weight: 600;
    min-width: 60px;
    cursor: pointer;
}


`;

export const HeaderSmallElement = ({ children }) => {
  return <StyledHeaderSmall>{children}</StyledHeaderSmall>;
};
