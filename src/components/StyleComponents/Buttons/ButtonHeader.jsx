import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonStyles = styled.button`

  color: ${({theme}) => theme.palette.textColor.main };
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin: ${({margin, theme})=> margin ? margin :
  theme.spacing(1)};
  height: 30px;
  width: ${({ width }) => width };
      &:hover{
        cursor: pointer;
        transform: scale(1.01)
      };
`;

export const ButtonHeader = ({ children, width, variant, onClick, margin }) => {
    const theme = useTheme();
  return <ButtonStyles theme={theme} width={width} variant={variant} onClick={onClick} margin={margin}>{children}</ButtonStyles>;
};
