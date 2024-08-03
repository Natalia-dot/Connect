import styled from "@emotion/styled"

const HomeStyled= styled.div`

margin: 8px 0 0 0;

  .hHome {
    color: rgb(111, 194, 131);
  }

  .link {
    color: rgb(36, 216, 240);
  }

  .home {
    display: flex;
    gap: 4vh;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .registrate {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 15%;
    min-width: 320px;
    left: 10%;
    height: 50%;
    border-radius: 5px;
    width: 25%;
    background-color: rgb(32, 33, 36, 0.9);

    h2 {
      color: rgb(142, 255, 171);
    }
  }

  .imagenPrincipal {
    height: 65vh;
    background-image: url("https://res.cloudinary.com/djfkchzyq/image/upload/v1702550010/gc9qotvo4vjbawys2hpd.jpg");
    width: 95vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid white;
  }

  .articleSmallContainer {
    width: 80vw;
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }

  .articleSmall {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid white;

    img {
      width: 49%;
      min-width: 200px;
      min-height: 180px;
      border-radius: 5px;
    }
  }

  .parteTexto {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
  }

  .sectionGrande {
    display: flex;
    width: 80vw;
    min-height: 40vh;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid white;

    img {
      width: 60vw;
      max-width: 700px;
    }
  }

  .textoGrande {
    position: relative;
    height: 25vh;
    top: -9%;
    left: -5%;
    width: 40vw;
    background-color: ${({ theme }) => theme.palette.header.main};
    height: 90%;
    padding: 0 10px;
    border-radius: 5px;
  }

  .leftSection {
    flex-direction: row-reverse;
    display: flex;
    width: 80vw;
    min-height: 40vh;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid white;

    img {
      width: 60vw;
    }
  }

  .textoGrandeL {
    position: relative;
    min-height: 25vh;
    top: 0%;
    left: 5%;
    width: 40vw;
    height: 90%;
    background-color: ${({ theme }) => theme.palette.header.main};
    border-radius: 5px;
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

  .sectionGrande,
  .leftSection {
    view-timeline-name: --image;
    view-timeline-axis: block;
    animation-timeline: --image;
    animation-name: show;
    animation-range: entry 25% cover 50%;
    animation-fill-mode: both;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .imagenPrincipal {
      width: 100vw;
    }

    .articleSmall {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 420px;
    }

    .articleSmall img {
      width: 100%;
      min-width: 250px;
      min-height: 200px;
    }

    .sectionGrande {
      padding: 0.5rem 3rem;
    }

    .registrate {
      position: relative;
      top: 80%;
      min-width: 320px;
      left: 0%;
      height: 20%;
      width: 100%;
      background-color: rgb(142, 255, 171, 0.2);

      h2 {
        display: none;
      }
    }
  }

  @media (max-width: 767px) {
    .imagenPrincipal {
      width: 100vw;
    }

    .articleSmallContainer {
      display: flex;
      flex-direction: column;
    }

    .articleSmall {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 80vw;
      height: 100%;
    }

    .articleSmall img {
      width: 100%;
      min-height: 200px;
    }

    .imagenPrincipal {
      height: 25vh;
      background-size: cover;
      background-position: center 70%;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    .sectionGrande {
      flex-direction: column;
    }

    .sectionGrande img {
      width: 100%;
    }

    .textoGrande {
      position: none;
      min-height: 25vh;
      top: 0%;
      left: 0%;
      width: 100%;
      background-color: rgb(32, 33, 36);
    }

    .leftSection {
      flex-direction: column;
      display: flex;
      width: 80vw;
      min-height: 40vh;
      padding: 0.5rem;
    }

    .leftSection img {
      width: 100%;
    }

    .textoGrandeL {
      position: relative;
      height: 25vh;
      top: 0%;
      left: 0%;
      width: 100%;
    }

    .registrate {
      position: relative;
      top: 80%;
      min-width: 320px;
      left: 0%;
      height: 20%;
      width: 100%;
      background-color: rgb(142, 255, 171, 0.2);

      h2 {
        display: none;
      }
    }
  }

  body.light .textoGrande {
    background-color: #FFF;
  }

  body.light .textoGrandeL {
    background-color: #FFF;
  }

  body.light .imagenPrincipal {
    border: 1px solid grey;
  }

  body.light .sectionGrande {
    border: 1px solid grey;
  }

  body.light .leftSection {
    border: 1px solid grey;
  }

  body.light .articleSmall {
    border: 1px solid grey;
  }

  body.light .link {
    color: rgb(29, 54, 31);
  }
`;




export const HomeElement = ({children}) => {
  return (
    <HomeStyled>{children}</HomeStyled>
  )
}
