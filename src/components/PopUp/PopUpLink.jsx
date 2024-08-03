import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary, H1Custom } from "../StyleComponents";
import { PopUpLinkElement } from "./PopUpLink.element";
import { FindRooms } from "../FindRooms/FindRooms";
import { useState } from "react";

export const PopUpLink = ({ id, setPopupLinkActive, resCheck, setResCheck}) => {
  const [existing, setExisting] = useState(false)
  const isMobile = window.innerWidth < 600 ? true : false
  return (
    <PopUpLinkElement isMobile={isMobile}>
      <div id="topDiv">
        <div id="secondTopDiv">
          {!existing && 
          <>
            <h1 style={{justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: '22px'}}>Link to:</h1>
              <ButtonPrimary
                width="fit-content"
                onClick={() => setExisting(true)}>
                EXISTING ROOM
              </ButtonPrimary>
            <Link to={`/createRoom/${id}`}>
              <ButtonPrimary
                width="fit-content"
                onClick={() => setPopupActive(false)}>
                NEW ROOM
              </ButtonPrimary>
            </Link>
            <img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" alt="close popup" onClick={() => setPopupLinkActive(false)} style={{height: "10%", margin: "20% 0 0 0"}}/>
          </>}
          {existing && <FindRooms postId = {id} resCheck={resCheck} setResCheck={setResCheck} setPopupLinkActive={setPopupLinkActive}/>}
        </div>
      </div>
    </PopUpLinkElement>
  );
};
