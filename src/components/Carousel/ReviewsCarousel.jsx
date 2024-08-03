// import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import { Rating } from "primereact/rating";
import React, { useEffect, useState } from "react";
import "./ReviewsCarousel.css";
import { ReviewCarouselStyles, ReviewStyles } from "./ReviewCarousel.element";
import { CarouselChevron } from "./CarouselChevron.element";

let CARDS;
const MAX_VISIBILITY = 3;

const Review = ({ src, alt, name, lastname, textComment, rating }) => (
  <div className="cardReview">
    <ReviewStyles>
      <img id="userPhotoReview" src={src} alt={alt} />
      <h4>
        {name} {lastname}
      </h4>
      <Rating className="rating" value={rating} readOnly cancel={false} />
      <p>"{textComment}"</p>
      <img
        className="quotationMarkImage firstQuotation"
        src="https://cdn-icons-png.flaticon.com/512/1633/1633659.png"
        alt="quotation mark"
      />
      <img
        className="quotationMarkImage secondQuotation"
        src="https://cdn-icons-png.flaticon.com/512/1633/1633659.png"
        alt="qutation mark"
      />
    </ReviewStyles>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  useEffect(() => {
    setActive(0);
  }, []);

  return (
    <div className="carouselReview">
      {/* <ReviewCarouselStyles> */}
      {active > 0 && (
        <button
          className="navReview leftreview"
          onClick={() => setActive((i) => i - 1)}
        >
          <CarouselChevron>
         arrow_circle_left
          </CarouselChevron>
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          id="card-containerReview"
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
        <button
          className="navReview rightreview"
          onClick={() => setActive((i) => i + 1)}
        >
       <CarouselChevron>
       arrow_circle_right
          </CarouselChevron>
        </button>
      )}
      {/* </ReviewCarouselStyles> */}
    </div>
  );
};

export const AppCarouselReview = ({ comments }) => {
  CARDS = comments?.length;
  return (
    <div id="carouselPage">
      <div className="appReview">
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            <>
              <Review
                key={i}
                src={comments[i]?.creator?.image}
                alt={comments[i]?.creator?.name}
                name={comments[i]?.creator?.name}
                lastname={comments[i]?.creator?.lastName}
                textComment={comments[i]?.textComment}
                rating={comments[i]?.rating}
              />
            </>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
