import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const LabelAndInputStyle = styled.div`

margin: ${({margin})=> margin ? margin : "0"};
display: flex;
    flex-direction: column;
    align-items: ${({alignItems}) => alignItems ? alignItems : "flex-start"} ;
    justify-content: center;
width: ${({parentWidth}) => parentWidth ? parentWidth : '70%'};
gap: ${({ gap }) => (gap ? gap : null)};
& input{
  width: 100%;
  height: ${({inputHeight}) => inputHeight ? inputHeight: 'auto'};
  flex-wrap: wrap;
  font-size: 16px;
}

& textarea{
  width: 100%;
  height: ${({inputHeight}) => inputHeight ? inputHeight: 'auto'};

}

${({ theme }) => theme.mediaquery.tablet} {


  }

  ${({ theme }) => theme.mediaquery.mobile} {
    width: 90%;

  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    width: 90%;
  }





  & .inputContainer .inputLabel {
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-size: 17px;
  }
  & .inputContainer .inputLabel input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & .inputContainer .div {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
  }
  & .inputContainer .inputLabel:hover input ~ .div,
  .inputContainer .inputLabel input:focus ~ .div {
    background: #ccc;
  }
  & .inputContainer .inputLabel input:checked ~ .div {
    background: #97f6a8;
  }
  & .inputContainer .inputLabel:hover input:not([disabled]):checked ~ .div,
  .inputContainer .inputLabel input:checked:focus ~ .div {
    background: #72cc89;
  }
  & .inputContainer .inputLabel input:disabled ~ .div {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  & .inputContainer .div:after {
    content: '';
    position: absolute;
    display: none;
  }
  & .inputContainer .inputLabel input:checked ~ .div:after {
    display: block;
  }
  & .inputContainer .inputLabel--checkbox .div:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  & .inputContainer .inputLabel--checkbox input:disabled ~ .div:after {
    border-color: #7b7b7b;
  }
  & .starsss div{
  
   width: 20px;
   height: 40px;
  }






`

export const LabelAndInput = ({children, alignItems, parentWidth, inputHeight, gap, margin}) => {
  const { theme } = useTheme()
  return (
    <LabelAndInputStyle theme={theme} alignItems={alignItems} margin={margin} parentWidth={parentWidth} gap={gap} inputHeight={inputHeight}>{children}</LabelAndInputStyle>
  )
}
