import styled from "@emotion/styled";
import { FlexDir } from "../Layout/FlexDir";

const UpdateButtonStyles = styled.div`
  img{
    /* height: ${({height}) => height ? height : "2vw"}; */
    width: ${({width}) => width ? width : "25px"};
  }
`

export const UpdateButton = ({ page, width, height }) => {
  return (
  <UpdateButtonStyles width={width} height={height}>
    <FlexDir>
      <>
        <button style={{border: "1px solid black", borderRadius: "5px", backgroundColor: "#EADAC2", display: "flex", alignItems: "center", gap: "1rem"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/1688/1688988.png" alt="go to update" />
          <div style={{display: "flex", alignItems: "center"}}>
            <h4 style={{margin: "6px 0"}}>{page == "post" ? "Update Post" : "Update Room"}</h4>
          </div>
        </button> 
      </> 
    </FlexDir>
  </UpdateButtonStyles>
  )
}