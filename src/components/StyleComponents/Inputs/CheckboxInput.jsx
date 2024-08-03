
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useForm } from "react-hook-form";


const CheckBoxInputStyle = styled.div`

margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(0.5))};

 & label {
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-size: 15px;
  }
  & label input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & .div {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
  }
  & label:hover input ~ .div,
  & label input:focus ~ .div {
    background: #ccc;
  }
  & label input:checked ~ .div {
    background: ${({theme}) => theme.palette.button.mediumGreen};
  }
  & label:hover input:not([disabled]):checked ~ .div,
  & label input:checked:focus ~ .div {
    background: ${({theme}) => theme.palette.button.main};
  }
  & label input:disabled ~ .div {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  & .div:after {
    content: '';
    position: absolute;
    display: none;
  }
  & label input:checked ~ .div:after {
    display: block;
  }
  & label .div:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  & label input:disabled ~ .div:after {
    border-color: #7b7b7b;
  }

`






export const CheckboxInput = ({value, margin}) => {
    const { register } = useForm();
    const { theme } = useTheme();

  return (
    <CheckBoxInputStyle margin={margin}>
        <label htmlFor={value}>{value}
  {/* <input type="checkbox" name={value}
    value={value}
     id={value} /> */}
    <div className="div"></div>
  </label>
        </CheckBoxInputStyle>
  )
}
