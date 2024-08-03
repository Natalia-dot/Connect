import React from "react";
import styled from "@emotion/styled";

const StyledAbout = styled.div`
  .about {
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 20px;
  }

  .sectionAbout {
    width: 80vw;
    gap: 10px;
    height: 40vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid white;
    padding: 20px;
    border-radius: 5px;
  }
  .imgAbout {
    width: 25vw;
    max-width: 500px;
    border-radius: 5px;
    min-width: 350px;
  }
  .articleAbout {
    width: 40vw;
  }
  .sectionAboutL {
    width: 80vw;
    border-radius: 5px;
    flex-direction: row-reverse;
    min-height: 40vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid white;
    padding: 20px;
  }
  .figureContainer {
    display: flex;
    justify-content: space-between;
    width: 80vw;
  }
  .figureContainer figure img {
    width: 150px;
  }
  .figureContainer figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @keyframes show {
    from {
      opacity: 0;
      scale: 25%;
    }
    to {
      opacity: 1;
      scale: 100%;
    }
  }

  .sectionAbout,
  .sectionAboutL {
    view-timeline-name: --image;
    view-timeline-axis: block;
    animation-timeline: --image;
    animation-name: show;
    animation-range: entry 15% cover 50%;
    animation-fill-mode: both;
  }
  .figureContainer figure {
    view-timeline-name: --image;
    view-timeline-axis: block;
    animation-timeline: --image;
    animation-name: show;
    animation-range: entry 25% cover 50%;
    animation-fill-mode: both;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .figureContainer {
      flex-wrap: wrap;
      justify-content: center;
    }
    .figureContainer figure img {
      width: 250px;
    }
  }

  /* Media query para  movil */
  @media (max-width: 767px) {
    .figureContainer {
      flex-wrap: wrap;
      justify-content: center;
    }
    .figureContainer figure img {
      width: 250px;
    }

    .sectionAbout {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;
    }
    .imgAbout {
      min-width: 200px;
    }
    .articleAbout {
      width: 100%;
    }
    .sectionAbout img {
      width: 100%;
    }
    .sectionAboutL {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;
    }
    .articleAboutL {
      width: 100%;
    }
    .sectionAboutL img {
      width: 100%;
    }
  }
  body.light .textoGrande {
    background-color: #fff;
  }
`;

export const AboutElement = ({ children }) => {
  return <StyledAbout>{children}</StyledAbout>;
};
