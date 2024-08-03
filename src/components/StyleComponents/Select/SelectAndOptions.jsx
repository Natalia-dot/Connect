import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const SelectAndOptionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.light};
  border-radius: ${({theme}) => theme.spacing(2.5)};
  width: 70%;
  padding: 20px;
  position: relative;

  & label {
    display: block;
    margin-bottom: ${({theme}) => theme.spacing(1)};
    font-size: 16px;
    color: ${({ theme }) => theme.palette.textColor.main};
  }

  & select {
    width: 100%;
    padding: 10px;
    font-size: ${({theme}) => theme.spacing(2)};
    border: ${({theme}) => theme.spacing(0.5)} solid ${({ theme }) => theme.palette.border.main};
    border-radius: ${({theme}) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.palette.background.light};
    color: ${({ theme }) => theme.palette.textColor.main};
    cursor: pointer;

    transition: border-color 0.3s ease;

    &:hover {
      border-color: ${({ theme }) => theme.palette.button.main};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.palette.button.main};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.shadow.main};
    }
  }

  & select::after {
    content: "▼";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }
  ${({ theme }) => theme.mediaquery.mobile} {
    width: 90%;

  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    width: 90%;
  }





`;

export const SelectAndOptions = ({ children }) => {
  const { theme } = useTheme();
  return <SelectAndOptionsStyle theme={theme}>{children}</SelectAndOptionsStyle>;
};
