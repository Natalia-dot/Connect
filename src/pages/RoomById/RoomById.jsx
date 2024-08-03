import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRoomById } from "../../services/room.service";
import {
  FlexDir,
  H1Custom,
  H3Custom,
  Small,
} from "../../components/StyleComponents";
import { UlCustom } from "../../components/StyleComponents/UL/Ul";
import { ConnectButtonCustom } from "../../components/StyleComponents/Buttons/ConnectButton";
import { Description } from "../../components/StyleComponents/Text/Small/Description";
import { ByIdMap } from "../Pruebas/ByIdMap";
import { printHomeIcons, printRoomIcons } from "../../utils/enumIcons";
import { AppCarousel } from "../../components/Carousel/Carousel";
import { RoomReview } from "../../components/Review/RoomReview";
import { UpdateButton } from "../../components/StyleComponents/Buttons/Update";
import { useAuth } from "../../context/authContext";
import { UserReview } from "../../components/UserReview/UserReview";
import { AddReview } from "../../components/StyleComponents/Buttons/AddReview";
import { MessagePopup } from "../../components/OtherUser/MessagePopup";
import { WarningElement } from "../../components/StyleComponents/Warning/Warning.element";
import { H3PerfectFit } from "../../components/StyleComponents/Text/H3/H3PerfectFit";
import { SuccessElement } from "../../components/StyleComponents/Warning/Success.element";
import { Loading, Protected } from "../../components";
export const RoomById = () => {
  //! ---------- Estados ----------
  const navigate = useNavigate();
  const [res, setRes] = useState();
  const [isOwner, setIsOwner] = useState();
  const [popupActive, setPopupActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //! ---------- Destructuring ----------
  const { id } = useParams();
  const { user } = useAuth();
  let roomData;
  let isMobile = window.innerWidth < 575;

  const fetchRoom = async () => {
    setRes(await getRoomById(id));
    setIsLoading(false);
  };

  const showPopup = () => {
    setPopupActive(true);
  };

  const isOwnerFunction = () => {
    if (res?.data?.postedBy[0]?.email == user?.email) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  };

  useEffect(() => {
    fetchRoom();
  }, []);

  console.log(user)

  useEffect(() => {
    if (res?.status == 200) {
      isOwnerFunction();
    }
  }, [res]);

  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
    <>
      {res && (
        <FlexDir gap="20px" minHeight="100vh" direction="column" margin="0">
          <H3Custom
            fontSize="3.8vw"
            textAlign="center"
            padding="0"
            fontSizeMobile="4.5vw"
            fontSizeTablet="4.5vw"
          >
            {res?.data?.title}
          </H3Custom>
          {!res?.data?.post && isOwner && (
            <WarningElement onClick={() => navigate("/createPost")}>
              Create a <span>post</span> for this room so others can see it on
              the Feed
            </WarningElement>
          )}
          <FlexDir
            direction="row"
            gap="2rem"
            mediaqueryDirMobile="column"
            minHeigh="55vh"
          >
            <FlexDir width="60vw">
              {/* {console.log(res?.data)} */}
              <AppCarousel src={res?.data?.image} alt={res?.data?.title} />
            </FlexDir>
            <FlexDir
              direction="column"
              height="90%"
              width="25vw"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              mediaqueryWidthMobile="70vw"
              mediaqueryMarginMobile="-1rem 0 0 0"
            >
              <UlCustom
                mediaqueryDirMobile="column"
                width="100%"
                height="90%"
                justifyContent="flex-start"
                alginItemsMobile="center"
                alignItems="start"
              >
                {res?.data?.post && (
                  <li>
                    <span>{res?.data?.post?.price}€/month</span>
                  </li>
                )}
                {!isMobile && (
                  <>
                    <li>
                      {printRoomIcons("Private Room")}
                      {res?.data?.type}
                    </li>
                    <li>
                      {printRoomIcons("Surface")}
                      {res?.data?.surface}m²
                    </li>
                    <li>
                      {printHomeIcons("Location")}
                      {res?.data?.province}, {res?.data?.publicLocation}
                    </li>
                    {res?.data?.exterior && <li>🪟 Exterior Room</li>}
                  </>
                )}
                {isMobile && (
                  <UlCustom
                    mediaqueryDirMobile="row"
                    justifyContent="flex-start"
                    justifyContentMobile="center"
                    alginItemsMobile="center"
                  >
                    <li>
                      {printRoomIcons("Private Room")}
                      {res?.data?.type}
                    </li>
                    <li>
                      {printRoomIcons("Surface")}
                      {res?.data?.surface}m²
                    </li>
                    <li>
                      {printHomeIcons("Location")}
                      {res?.data?.province}
                    </li>
                  </UlCustom>
                )}
                {isOwner && !res?.data?.post && (
                  <WarningElement onClick={() => navigate("/createPost")}>
                    Post this room
                  </WarningElement>
                )}
                {isOwner && (
                  <Link to={`/updateRoom/${id}`}>
                    <UpdateButton page="room" />
                  </Link>
                )}
              </UlCustom>
              {!isOwner && (
      <ConnectButtonCustom onClick={() => user != null ? showPopup : navigate("/login")}>
      Connect
    </ConnectButtonCustom>
      
              )}
              {res?.data?.post?._id && (
                <SuccessElement
                  onClick={() => navigate(`/feed/${res?.data?.post?._id}`)}
                >
                  Check Post
                </SuccessElement>
              )}
            </FlexDir>
          </FlexDir>
          <FlexDir
            gap="10vw"
            direction="row"
            width="80vw"
            alignItems="flex-start"
            margin="0.5rem 0 1rem 0"
            mediaqueryMarginMobile="0.3rem 0 0 0"
          >
            <FlexDir
              direction="column"
              height="100%"
              width="50%"
              justifyContent="flex-start"
              gap="20px"
            >
              <H3PerfectFit>House Commodities</H3PerfectFit>
              <UlCustom
                width="100%"
                height="90%"
                justifyContent="flex-start"
                alignItems="start"
              >
                {res?.data?.commoditiesHome?.map((commodity) => (
                  <li key={commodity}>
                    {printHomeIcons(commodity)}
                    {commodity}
                  </li>
                ))}
              </UlCustom>
            </FlexDir>
            <FlexDir
              justifyContent="flex-start"
              direction="column"
              width="50%"
              height="100%"
              gap="20px"
            >
              <H3PerfectFit>Room Commodities</H3PerfectFit>
              <UlCustom
                width="100%"
                height="90%"
                justifyContent="flex-start"
                alignItems="start"
              >
                {res?.data?.commoditiesRoom?.map((commodity) => (
                  <li key={commodity}>
                    {printRoomIcons(commodity)}
                    {commodity}
                  </li>
                ))}
              </UlCustom>
            </FlexDir>
          </FlexDir>
          <FlexDir direction="column" margin="2rem 0 0 0" width="100vw">
            <H3PerfectFit>Description</H3PerfectFit>
            <Description>{res?.data?.description}</Description>
          </FlexDir>
          <FlexDir direction="column" margin="3vh">
            <H3PerfectFit>Location</H3PerfectFit>
            {res && (
              <ByIdMap
                postcode={res?.data?.postcode}
                province={res?.data?.province}
                ccaa={res?.data?.publicLocation}
              />
            )}
          </FlexDir>
          <FlexDir
            width="75%"
            mediaqueryMarginMobile="0 0 5vw 0"
            mediaqueryMarginTablet="1rem 0 5vw 0"
            margin="5vw 0"
            direction="column"
          >
            {res?.data?.comments?.length > 0 ? (
              <>
                <H3PerfectFit>Add a review</H3PerfectFit>
                <RoomReview roomId={res?.data?._id} />
                {/* {res?.data?.post?.roommates?.includes(user._id) && (
                  <AddReview width="5vw" height="5vw" />
                )} */}
              </>
            ) : (
              !isOwner && user != null && <UserReview action="roomcomment" />
            )}
            {popupActive && (
              <MessagePopup
                id={res.data.postedBy[0]}
                setPopupActive={setPopupActive}
              />
            )}
          </FlexDir>
        </FlexDir>
      )}
    </>
    )}
     </>
  );
};
