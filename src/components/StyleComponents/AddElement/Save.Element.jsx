import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

const SaveElementStyle= styled.div`
/* background-color: ${({theme})=> theme.palette.button.mediumGreen}; */
/* border-radius: 50%; */
width: 20px;
height: 20px;
position: relative;
z-index: 50;
display: flex;
align-items: center;
justify-content: center;
top: 10%;
left: 93%;



& span{
font-size: 30px;
color: ${({theme})=> theme.palette.button.saved};

}

${({ theme }) => theme.mediaquery.bigScreen} {
    top: 5%;
left: 90%;

}

${({ theme }) => theme.mediaquery.laptop} {
  top: 7%;
left: 90%;

}

${({ theme }) => theme.mediaquery.tablet} {
    top: 1%;
left: 90%;
z-index: 50;
}
${({ theme }) => theme.mediaquery.mobile} {

    width: 50px;
height: 50px;
z-index: 50;

top: 1%;
left: 37%;
& span{
font-size: 40px;

}

}
${({ theme }) => theme.mediaquery.miniMobile} {

width: 45px;
height: 45px;
z-index: 50;

top: 1%;
left: 37%;
& span{
font-size: 38px;

}

}

 :hover{
    transform: scale(1.1);
    cursor: pointer;

}

& .material-symbols-outlined {
  /* font-variation-settings:
  'FILL' 0,
  'wght' 300,
  'GRAD' -25,
  'opsz' 48, */


font-variation-settings: ${({variant}) =>
  variant == "normal" 
  ? "'FILL' 0"
: variant == "saved" 
&& "'FILL' 1"};

}


`


export const SaveElement = ({onClick, variant}) => {
  return (
    <SaveElementStyle onClick={onClick} variant={variant}><span className="material-symbols-outlined">
    bookmark
    </span></SaveElementStyle>
  )
}
