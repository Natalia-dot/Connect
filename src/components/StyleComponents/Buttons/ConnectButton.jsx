import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useThemeApp } from "../../../context/themeContext";

const ConnectButtonStyles = styled.button`
  border-radius: 15px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  border: 2px solid ${({ theme }) => theme.palette.border.main};
  width: 100%;

  background-color: ${({ theme }) => theme.palette.button.mediumGreen};
  color: white;
  font-weight: 650;
  font-size: 20px;
  letter-spacing: 1.1px;
  max-width: 200px;

  ${({ theme }) => theme.mediaquery.mobile} {
    width: 80%;
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    width: 80%;
  }
`;

export const ConnectButtonCustom = ({ children, onClick }) => {
  const { theme } = useTheme();

  return (
    <ConnectButtonStyles onClick={onClick} theme={theme} type="submit">
      {children}
    </ConnectButtonStyles>
  );
};
