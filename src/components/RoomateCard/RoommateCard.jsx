import { useTheme } from "@emotion/react"
import { printIconsUser } from "../../utils/enumIcons"
import { FlexDir, H3Custom } from "../StyleComponents"
import { UlCustom } from "../StyleComponents/UL/Ul"
import { RoommateCardStyle } from "./RoommateCard.element"
import { Link } from "react-router-dom"
import { ProfileIcon } from "../../pages/OtherUser/ProfileIcon"


export const RoommateCard = ({ roommate, index }) => {
  const { theme } = useTheme()
  return (
    <RoommateCardStyle fontSizeP="1.5vw" fontSizePTablet="1.8vw" fontSizePMobile="2vw">
      <FlexDir direction="row" mediaqueryMarginMobile="-2vw 0 0 0" gap="0.5rem" margin="2vw">
        {index%2 == 0 && <FlexDir mediaqueryMarginMobile="0">
        <ProfileIcon className="userimagepost" data={roommate}/>
        </FlexDir>}
        <FlexDir direction="column" mediaqueryMarginMobile="0.6rem 0">
          <FlexDir mediaqueryMarginMobile="0px" margin="0px 32px" width="60vw" padding="0 10px" justifyContent={index%2 == 0 ? "start" : "end"}>
            <FlexDir width="fit-content" padding="4px" margin="0" border="4.5px solid #72cc89">
              <H3Custom fontSize="1.8vw">{roommate?.name} {roommate?.lastName}</H3Custom>
            </FlexDir>
          </FlexDir>
          <FlexDir mediaqueryMarginMobile="0px" margin="0px 32px" width="60vw" backgroundColor="#72cc89" padding="0 10px" borderRadius="10px">
            <p>{roommate?.description}</p>
          </FlexDir>
          <FlexDir width="65vw">
            <UlCustom direction="row" margin="0px" fontSize="1vw" gap="3vw">
              <FlexDir liWidth="fit-content" border="2px solid #72cc89" padding="2px 6px" borderRadius="10px" margin="0px">
                <li>{printIconsUser("Age")}<b>{roommate?.birthYear && 2023 - roommate?.birthYear} y/o</b></li>
              </FlexDir>
              <FlexDir border="2px solid #72cc89" padding="2px 6px" borderRadius="10px" margin="0px">
                <li>{printIconsUser(roommate?.gender)}<b>{roommate?.gender}</b></li>
              </FlexDir>
              <FlexDir border="2px solid #72cc89" padding="2px 6px" borderRadius="10px" margin="0px">
                <li>{printIconsUser("Interest")}<b>{roommate?.interests && roommate?.interests?.slice(0, 3).join(", ")}</b></li>
              </FlexDir>
            </UlCustom>
          </FlexDir>
        </FlexDir>
        {index%2 !== 0 && <FlexDir mediaqueryMarginMobile="0">
          <ProfileIcon className="userimagepost" data={roommate}/>


        </FlexDir>}
      </FlexDir>
    </RoommateCardStyle>
  )
}