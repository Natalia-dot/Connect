import React, { useEffect, useRef, useState } from "react";
import {
  SearchInputCustom,
  FlexDir,
  SearchImgCustom,
  SearchButtonCustom,
  H1Custom,
  H3Custom,
  MiniCards,
} from "../../components/StyleComponents/index";
import { useThemeApp } from "../../context/themeContext";
import {
  getAllRooms,
  getRoomByLocation,
  getRoomByPostCode,
  getRoomByProvince,
} from "../../services/room.service";
import { useErrorFindRoom } from "../../hooks/useErrorFindRoom";
import { roomData } from "../../data/Rooms.data";
import { GalleryCustom } from "../../components";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

export const RoomSearch = () => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();
  const [findOK, setFindOk] = useState();
  const [send, setSend] = useState();
  const [valueInput, setValueInput] = useState("");
  const [submit, setSubmit] = useState();

  //! ---------- Destructuring ----------
  const { theme } = useThemeApp();

  const isTablet = window.innerWidth < 1050 ? true : false;
  const titleRef = useRef();

  const handleSearch = async () => {
    setSubmit(true);
    setSend(true);
    //? -------- condicional para llamar al controlador que toque --------
    if (valueInput.length > 0) {
      if (
        valueInput.includes("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
      ) {
        setRes(await getRoomByPostCode(valueInput));
      } else if (roomData.publicLocation.includes(valueInput)) {
        setRes(await getRoomByLocation(valueInput));
      } else if (roomData.province.includes(valueInput)) {
        setRes(await getRoomByProvince(valueInput));
      }
    } else {
      setRes(await getAllRooms());
    } //? ----------------------------------------------------------------
    setSend(false);

    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // useErrorFindRoom(res, setFindOk, setRes)
  }, [res]);

  return (
    <>
      <FlexDir minHeight="100vh" width="100vw" direction="column" margin="0">
        <FlexDir
          direction="row"
          gap="5vw"
          height="100%"
          width="100%"
          padding="3rem"
          mediaqueryDirTablet="column"
          mediaqueryDirMobile="column"
        >
          <FlexDir
            direction="column"
            width="45vw"
            mediaqueryWidthTablet="90vw"
            mediaqueryWidthMobile="90vw"
            wrap="wrap"
          >
            <H1Custom>
              Perfect{" "}
              <span style={{ color: theme == "dark" ? "#72cc89" : "#4ead66" }}>
                rooms
              </span>{" "}
              await you
            </H1Custom>
            <H3Custom>
              Discover your Ideal Living Space with connect-a-mate's varied
              offers
            </H3Custom>
            <FlexDir width="100%" direction="row">
              <SearchInputCustom
                onChange={(e) => setValueInput(e.target.value)}
              />
              <SearchButtonCustom onClick={handleSearch}>🔎</SearchButtonCustom>
            </FlexDir>
          </FlexDir>
          <FlexDir
            height="90%"
            mediaqueryWidth="90vw"
            margin={isTablet && "5rem 0 0 0"}
          >
            {isTablet && (
              <>
                <SearchImgCustom
                  aspectRatioMobile="4/20"
                  marginTop="-10rem"
                  src="https://th.bing.com/th/id/R.cacb1b68ccf6fd5ff79b9e3734cc2196?rik=Ryuz9Yc6wDySsw&riu=http%3a%2f%2fwww.travelweekly.com.au%2fwp-content%2fuploads%2f2014%2f09%2fIMG_6289-r2.jpg&ehk=OWeyAb9BhmWbBMYXNbl8JZUcoXDxGC13FJb3ubE0Uh0%3d&risl=&pid=ImgRaw&r=0"
                />
                <SearchImgCustom
                  aspectRatioMobile="4/20"
                  marginTop="0rem"
                  src="https://th.bing.com/th/id/OIP.UB7BT3YPQjpidUcKh6Rp-gExDM?w=281&h=188&c=7&r=0&o=5&pid=1.7"
                />
                <SearchImgCustom
                  aspectRatioMobile="4/20"
                  marginTop="-10rem"
                  src="https://th.bing.com/th/id/R.91dcd1006a674569e23c0c258159b4ce?rik=Vn0uEeoPKp3Hww&pid=ImgRaw&r=0"
                />
              </>
            )}
            <SearchImgCustom
              aspectRatioMobile="4/20"
              marginTop="0"
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <SearchImgCustom
              aspectRatioMobile="4/20"
              marginTop="-10rem"
              src="https://hips.hearstapps.com/hmg-prod/images/melanie-pounds-mountain-brook-house-tour-living-room-fireplace-jpg-1623351404.jpg?crop=0.733xw:1.00xh;0.121xw,0&resize=980:*"
            />
            <SearchImgCustom
              aspectRatioMobile="4/20"
              marginTop={isTablet ? "0rem" : "10rem"}
              src="https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg"
            />
            {isTablet && (
              <>
                <SearchImgCustom
                  aspectRatioMobile="4/20"
                  marginTop="-10rem"
                  src="https://th.bing.com/th/id/OIP.709FyhaU7oRYVOzD5XpPNgAAAA?rs=1&pid=ImgDetMain"
                />
                <SearchImgCustom
                  aspectRatioMobile="4/20"
                  marginTop="0rem"
                  src="https://th.bing.com/th/id/R.d5b480889234da804d8b6529fe855a5e?rik=SnuAY8GONbIhag&pid=ImgRaw&r=0"
                />
                <SearchImgCustom
                  aspectRatioMobile="4/20"
                  marginTop="-10rem"
                  src="https://theinspiredroom.net/wp-content/uploads/2014/09/Cozy-Bedroom-with-Fireplace.jpg"
                />
              </>
            )}
          </FlexDir>
        </FlexDir>
        {submit == true && (
          <FlexDir direction="column" width="100%" margin="0">
            <h2 ref={titleRef}>Top Rooms in your Area</h2>
            <FlexDir wrap="wrap" gap="2rem" width="100%" margin="0">
              {/* {console.log(res)} */}
              {res &&
                res?.data?.toReversed().map((room) => {
                  return (
                    <Link to={`/roomFinds/${room._id}`}>
                      <MiniCards>
                        <img src={room.image[0]} alt={room.title} />
                        <h4>{room.title.slice(0, 30)}...</h4>
                        <ul>
                          <li>
                            {room.province}, {room.publicLocation}
                          </li>
                          {room.roomates > 0 ? (
                            <li>{room.roomates} 🙍🏻‍♂️</li>
                          ) : (
                            <li>{room.type}</li>
                          )}
                          <li>{room.surface}m²</li>
                        </ul>
                      </MiniCards>
                    </Link>
                  );
                })}
            </FlexDir>
          </FlexDir>
        )}
      </FlexDir>
    </>
  );
};
