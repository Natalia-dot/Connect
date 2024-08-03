import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const PopUpLinkStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Adjust the alpha value for transparency */
  z-index: 999;
  
  #topDiv {
    width: ${({ isMobile }) => (isMobile ? "95vw" : "80%")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Additional styling for the content inside the overlay */
    /* padding: 20px; */
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    #secondTopDiv{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: ${({ theme }) => theme == 'light' ? theme.palette.textColor.main : 'black'};
        margin: 5px 0 20px 0;
      }

    }


  }
`;
export const PopUpLinkElement = ({ children, isMobile, buttonWidth }) => {
  return (
    <PopUpLinkStyles isMobile={isMobile} buttonWidth={buttonWidth}>
      {children}
    </PopUpLinkStyles>
  );
};
