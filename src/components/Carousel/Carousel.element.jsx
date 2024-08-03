import styled from "@emotion/styled";

export const CarouselStyles = styled.div`
  position: relative;
  width: 50vw;
  height: 35vw;
  perspective: 500px;
  transform-style: preserve-3d;
  @media screen and (max-width: 576px){
    width: 65vw;
    height: 44vw;
  }
  div{
    position: absolute;
    width: 100%;
    height: 100%;
    transform: 
    rotateY(calc(var(--offset) * 50deg)) 
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -1rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.3s ease-out;
  }
  .nav {
    color: white;
    font-size: 3.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    background: unset;
    border: unset;
    &.left {
      left: 15%;
      transform: translateX(-100%) translatey(-50%);
    }
    
    &.right {
      right: 15%;
      transform: translateX(100%) translatey(-50%);
    }
  }
`


export const ImageCarouselStyles = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  img{
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
    object-fit: cover;
  }
`