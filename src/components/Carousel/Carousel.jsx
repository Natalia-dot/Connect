// import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

import React, { useEffect, useState } from "react";
import { CarouselStyles, ImageCarouselStyles } from "./Carousel.element";
import { CarouselChevron } from "./CarouselChevron.element";

let CARDS;
const MAX_VISIBILITY = 2;

const Image = ({ src, alt }) => (
  <ImageCarouselStyles>
    <img src={src} alt={alt} />
  </ImageCarouselStyles>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  useEffect(() => {
    setActive(0);
  }, []);

  return (
    <CarouselStyles>
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <CarouselChevron>
          arrow_circle_left
          </CarouselChevron>
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          id="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <CarouselChevron>
          arrow_circle_right
          </CarouselChevron>
        </button>
      )}
    </CarouselStyles>
  );
};

export const AppCarousel = ({ src, alt }) => {
  // console.log(src);
  CARDS = src?.length;
  return (
    <div id="carouselPage">
      <div className="app">
        <Carousel>
          {CARDS > 0 &&
            [...new Array(CARDS)].map((_, i) => (
              <Image key={i} src={src[i]} alt={alt} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

// ReactDOM.render(
//   <AppCarousel/>,
//   document.body
// );
