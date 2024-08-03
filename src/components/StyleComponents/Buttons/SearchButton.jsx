import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useThemeApp } from "../../../context/themeContext"

const SearchButtonStyles = styled.button`
  /* border-radius: 50%; */
  border: 2px solid ${({theme}) => theme.palette.border.main};
  width: 50px;
  font-size: 25px;
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
  aspect-ratio: 1/1;
  background-color:  ${({theme}) => theme.palette.button.mediumGreen};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  /* margin-left: 10px; */
`

export const SearchButtonCustom = ({ children, onClick }) => {
  const { theme } = useTheme()
  const themeObject = useThemeApp()
  const darkOrLight = themeObject.theme

  return <SearchButtonStyles onClick={onClick} darkOrLight = {darkOrLight} theme = {theme} type="submit">{children}</SearchButtonStyles>
}