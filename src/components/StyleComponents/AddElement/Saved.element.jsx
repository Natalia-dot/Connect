import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

const SaveElementStyle= styled.div`
/* background-color: ${({theme})=> theme.palette.button.mediumGreen}; */
/* border-radius: 50%; */
width: 90%;
/* position: relative;
z-index: 50; */
display: flex;
align-items: flex-end;
justify-content: end;




& span{
font-size: 30px;
color: ${({theme})=> theme.palette.button.saved};
:hover{
    transform: scale(1.1);
    cursor: pointer;

}
}

${({ theme }) => theme.mediaquery.bigScreen} {

}

${({ theme }) => theme.mediaquery.laptop} {


}

${({ theme }) => theme.mediaquery.tablet} {

}
${({ theme }) => theme.mediaquery.mobile} {

& span{
font-size: 40px;

}

}
${({ theme }) => theme.mediaquery.miniMobile} {

& span{
font-size: 38px;

}

}



& .material-symbols-outlined {


font-variation-settings: ${({variant}) =>
  variant == "normal" 
  ? "'FILL' 0"
: variant == "saved" 
&& "'FILL' 1"};

}


`


export const SavedElement = ({onClick, variant}) => {
  return (
    <SaveElementStyle onClick={onClick} variant={variant}><span className="material-symbols-outlined">
    bookmark
    </span></SaveElementStyle>
  )
}
