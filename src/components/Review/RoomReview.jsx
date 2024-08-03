import { useEffect, useState } from "react"
import { getAllComments } from "../../services/comment.service";
import { AppCarouselReview } from "../Carousel/ReviewsCarousel";

export const RoomReview = ({roomId}) => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();

  //! ---------- Destructuring ----------

  const fetchReviews = async () => {
    setRes(await getAllComments(roomId))
    setRes(await getAllComments(roomId))
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <>
      {res &&
      <div>
          <AppCarouselReview comments = {res?.data}/>
      </div>}
    </>
  )
}