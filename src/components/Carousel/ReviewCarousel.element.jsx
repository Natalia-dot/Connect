import styled from "@emotion/styled";

export const ReviewCarouselStyles = styled.div`
  position: relative;
  width: 60vw;
  height: 20vw;
  perspective: 250px;
  transform-style: preserve-3d;
  div{
    position: absolute;
    width: 100%;
    height: 100%;
    transform: 
    rotateY(calc(var(--offset) * 50deg)) 
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -2.5rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.3s ease-out;
  }
  .navReview {
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
    &.leftreview {
      left: 3%;
      transform: translateX(-100%) translatey(-50%);
    }
    
    &.rightreview {
      right: 3%;
      transform: translateX(100%) translatey(-50%);
    }
  }
`


export const ReviewStyles = styled.div`
  background-color:#C3F1DA;
  border: 2px solid black;
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease-out;
  position: relative;
  #userPhotoReview{
    position: absolute;
    top: -25%;
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    border: 1px solid black;
    object-fit: cover;
  }
  .rating{
    position: absolute;
    top: -70%;
    color: #F8B101;
    
    svg{
      @media screen and (max-width: 925px) {
        width: 2vw;
      }
    }

    @media screen and (max-width: 892px) {
      top: -40%
    }
    @media screen and (max-width: 490px) {
      top: -45%
    }
  }
  h4{
    margin: 0.5rem;
    font-size: 1.7vw;

    @media screen and (max-width: 794px) {
      margin: 1rem 0 0 0;
    }
  }
  p{
    margin: 8px 32px;
    text-align: center;
    font-size: 1.3vw;
  }
  .quotationMarkImage {
    height: 3vw;
    width: 3vw;
  }

  .firstQuotation {
    rotate: -180deg;
    position: absolute;
    top: 10%;
    left: 5%
  }

  .secondQuotation {
    position: absolute;
    bottom: 10%;
    right: 5%
  }
`