import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const MessagePopupStyles = styled.div`
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

  #uniqueDiv {
    width: ${({ isMobile }) => (isMobile ? "95vw" : "70%")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Additional styling for the content inside the overlay */
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    h1 {
    color: ${({ theme }) => theme == 'light' ? theme.palette.textColor.main : 'black'};
    margin: 5px 0 20px 0;
      
    }
  }

  form {
    width: ${({ isMobile }) => (isMobile ? "90%" : "70%")};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.background.light};
    color: ${({ theme }) => theme.palette.textColor.main};
    border-radius: 10px;
  }

  textarea {
    font-size: ${({ isMobile }) => (!isMobile && '26px')};
    width: ${({ isMobile }) => (isMobile ? "90%" : "70%")};
    height: 60%;
    border: ${({ theme }) => theme.palette.enhanced.main} 2px solid;
    background-color: ${({ theme }) => theme.palette.background.main};
    color: ${({ theme }) => theme.palette.textColor.main};
    border-radius: 10px;
  }
`;
export const MessagePopupScreen = ({ children, isMobile, buttonWidth }) => {
  return (
    <MessagePopupStyles isMobile={isMobile} buttonWidth={buttonWidth}>
      {children}
    </MessagePopupStyles>
  );
};
