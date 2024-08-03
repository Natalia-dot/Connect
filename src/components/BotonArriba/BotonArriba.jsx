import React, { useEffect, useState } from 'react'
import { ButtonPrimary } from '../StyleComponents';
import styled from '@emotion/styled';
export const BotonArriba = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
const StyledUp=styled.button`
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  padding: 10px;
  & span{
    font-size: 30px;
  }
`
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (<>
   {showBackToTop && (
        <StyledUp className="back-to-top" onClick={scrollToTop}>
         <span className="material-symbols-outlined">
arrow_upward
</span>
        </StyledUp>
      )}</>
   
  )
}
