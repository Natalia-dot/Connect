import styled from "@emotion/styled";
import { useState } from "react";
import { UserReview } from "../../UserReview/UserReview";
import { FlexDir } from "../Layout/FlexDir";

const AddReviewStyles = styled.div`
  img{
    height: ${({height}) => height ? height : "15vw"};
    width: ${({width}) => width ? width : "15vw"};
  }
`

export const AddReview = ({ id, width, height }) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = async () => {
    setPressed(true)
  }
  return (
  <AddReviewStyles width={width} height={height}>
    <FlexDir>
      {pressed == false ?
      <>
        <button style={{border: "none", backgroundColor: "transparent"}} onClick={handleClick}>
          <img src="https://cdn-icons-png.flaticon.com/128/4210/4210903.png" alt="add roommate" />
        </button> 
        <div style={{display: "flex", alignItems: "center"}}>
          <h4>Add New Review</h4>
        </div>
      </> 
      : <UserReview action="roomcomment"/>}
    </FlexDir>
  </AddReviewStyles>
  )
}