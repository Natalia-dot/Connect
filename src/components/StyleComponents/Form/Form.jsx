import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const FormStyle = styled.form`
  background-color: ${({ theme }) => theme.palette.form.main};
  padding: ${({ padding }) =>
  padding ? padding : "8px"};
  color: ${({ theme }) => theme.palette.textColor.main};
  border-radius: ${({ theme }) => theme.spacing(3)};
  border: ${({ theme }) => theme.spacing(0.1)} solid
    ${({ theme }) => theme.palette.border.main};
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : "fit-content")};
  & input {
    /* width: 70%; */
    height: ${({ theme }) => theme.spacing(3.5)};
  }
  & textarea {
    width: 100%;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    display: flex;
    flex-direction: column;
    min-width: 95vw;
    height: ${({ heightMobile }) =>
      heightMobile ? heightMobile : "fit-content"};
  }

  ${({ theme }) => theme.mediaquery.bigScreen} {
    width: ${({ width }) => width};
    height: ${({ heightMobile }) =>
      heightMobile ? heightMobile : "fit-content"};
  }



  ${({ theme }) => theme.mediaquery.miniMobile} {
    display: flex;
    flex-direction: column;
    width: 95vw;
    height: ${({ heightMobile }) =>
      heightMobile ? heightMobile : "fit-content"};
  }


  ${({ theme }) => theme.mediaquery.tablet} {
    width: ${({ mediaqueryWidth }) =>
      mediaqueryWidth ? mediaqueryWidth : "85vw"};
    height: ${({ heightTablet }) =>
      heightTablet ? heightTablet : "fit-content"};
  }
`;

export const Form = ({
  children,
  width,
  height,
  onSubmit,
  mediaqueryWidth,
  heightTablet,
  heightMobile,
}) => {
  const { theme } = useTheme();

  return (
    <FormStyle
      theme={theme}
      width={width}
      height={height}
      onSubmit={onSubmit}
      mediaqueryWidth={mediaqueryWidth}
      heightTablet={heightTablet}
      heightMobile={heightMobile}
    >
      {children}
    </FormStyle>
  );
};
