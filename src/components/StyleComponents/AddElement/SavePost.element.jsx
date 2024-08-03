import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

const SaveElementStyle= styled.div`
/* background-color: ${({theme})=> theme.palette.button.mediumGreen}; */
/* border-radius: 50%; */
width: 1.2vw;
height: 1.2vw;
display: flex;
align-items: center;
justify-content: center;



& span{
font-size: 30px;
color: ${({theme})=> theme.palette.button.saved};

}

${({ theme }) => theme.mediaquery.bigScreen} {


}

${({ theme }) => theme.mediaquery.laptop} {


}

${({ theme }) => theme.mediaquery.tablet} {

}
${({ theme }) => theme.mediaquery.mobile} {

    width: 1.5vw;
height: 1.5vw

& span{
font-size: 40px;

}

}
${({ theme }) => theme.mediaquery.miniMobile} {

width: 45px;
height: 45px;

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


export const SavePostElement = ({onClick, variant}) => {
  return (
    <SaveElementStyle onClick={onClick} variant={variant}><span className="material-symbols-outlined">
    bookmark
    </span></SaveElementStyle>
  )
}
