import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useThemeApp } from "../../../context/themeContext";

const SearchInputStyles = styled.input`
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 2px solid ${({theme}) => theme.palette.button.mediumGreen};
  background-color: ${({theme}) => theme.palette.form.main};
  color:${({theme}) => theme.palette.textColor.main}; ;
  height: 45px;
  min-width: 38vw;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* -webkit-box-shadow: 2px 10px 25px -7px ${({theme}) => theme.palette.shadow.main};
  -moz-box-shadow: 2px 10px 25px -7px ${({theme}) => theme.palette.shadow.main};
  box-shadow: 2px 10px 25px -7px ${({theme}) => theme.palette.shadow.main}; */

  ::placeholder{
    color: ${({ theme }) => theme.palette.textColor.main};
    /* font-family: ${({theme}) => theme.typography.fonts.italic}; */
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0.7px;
    text-align: center;
    margin: 0 0 0 1rem;
  }

  ${({ theme }) => theme.mediaquery.tablet} {
    height: 6vw;
    min-width: 40vw;

    ::placeholder{
      font-size: 2.5vw
    }
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    height: 10vw;
    min-width: 60vw;

    ::placeholder{
      font-size: 3vw
    }
  }
`
export const SearchInputCustom = ({ onChange }) => {
  const { theme } = useTheme()
  const themeObject = useThemeApp()
  const darkOrLight = themeObject.theme

  return (
    <SearchInputStyles onChange={onChange} darkOrLight = {darkOrLight} theme = {theme} placeholder="Search..." autoCapitalize="words"></SearchInputStyles>
  )
}