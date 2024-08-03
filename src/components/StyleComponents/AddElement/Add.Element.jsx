import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

const AddElementStyle= styled.div`
background-color: ${({theme})=> theme.palette.button.mediumGreen};
border-radius: 50%;
width: 70px;
height: 70px;
position: fixed;
z-index: 100;
display: flex;
align-items: center;
justify-content: center;
top: 85%;
left: 90%;

& span{
font-size: 60px;
color: white;

}

${({ theme }) => theme.mediaquery.laptop} {

}

${({ theme }) => theme.mediaquery.tablet} {
    top: 91%;
left: 85%;
}
${({ theme }) => theme.mediaquery.mobile} {

    width: 55px;
height: 55px;

top: 90%;
left: 80%;
& span{
font-size: 44px;

}

}

${({ theme }) => theme.mediaquery.miniMobile} {

width: 52px;
height: 52px;

top: 90%;
left: 80%;
& span{
font-size: 42px;

}

}

 :hover{
    transform: scale(1.1);
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 6px 3px rgba(111,120,111,0.34);
-moz-box-shadow: 0px 0px 6px 3px rgba(111,120,111,0.34);
box-shadow: 0px 0px 6px 3px rgba(111,120,111,0.34);
}


`




export const AddElement = () => {
    const { theme } = useTheme()

  return (
   <AddElementStyle theme={theme}>
    <span className="material-symbols-outlined">
add
</span>
</AddElementStyle>
  
  )
}
