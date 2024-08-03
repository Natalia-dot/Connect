import styled from "@emotion/styled";
import { FlexDir } from "../Layout/FlexDir";

const LinkRoomStyles = styled.div`
  img{
    height: ${({height}) => height ? height : "2vw"};
    width: ${({width}) => width ? width : "2vw"};
  }
`

export const LinkRoomButton = ({ width, height, setPopupLinkActive}) => {
  return (
  <LinkRoomStyles width={width} height={height}>
    <FlexDir>
      <>
        <button style={{border: "1px solid black", borderRadius: "5px", backgroundColor: "#EADAC2", display: "flex", alignItems: "center", gap: "1rem"}} onClick={() => setPopupLinkActive(true)}>
          <img src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png" alt="go to update" />
          <div style={{display: "flex", alignItems: "center"}}>
            <h4 style={{margin: "6px 0"}}>Link Room</h4>
          </div>
        </button> 
      </> 
    </FlexDir>
  </LinkRoomStyles>
  )
}