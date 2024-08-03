import { useNavigate } from "react-router-dom";

import {
  FlexDir,
  Pagination,
  ProfileContainer,
} from "../../components/StyleComponents";

import { useAuth } from "../../context/authContext";

import { useTheme } from "@emotion/react";
import { ProfileDataDesktop, ProfileDataMobile } from "../../components";
import { useEffect, useState } from "react";
import { useUserVerify } from "../../hooks/useUserVerify";
import { DataProfile } from "./DataProfile/DataProfile";

export const Profile = () => {
  const [page, setPage] = useState("posted");

  const { theme } = useTheme();

  //  console.log("hola", theme.mediaquery.mobile)
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 576 ? true : false;

  useEffect(() => {
    useUserVerify(user, logout, navigate);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <FlexDir
        width={"98vw"}
        height={"86vh"}
        mediaqueryHeightTablet={"75vh"}
        mediaqueryDirTablet={"column"}
        mediaqueryMarginMobile={"0"}
        mediaqueryWidthMobile={"100vw"}
        mediaqueryWidthminiMobile={"100vw"}
        mediaqueryHeightMiniMobile={"750px"}
        mediaqueryHeightMobile={"950px"}
      >
        {/* <UserProfileData/> */}
        <ProfileContainer
          width={"32vw"}
          height={"83vh"}
          margin={"10px 0 10px 20px"}
          heightTablet={"38vh"}
        >
          {!isMobile && <ProfileDataDesktop />}
          {isMobile && <ProfileDataMobile />}
        </ProfileContainer>

        {!isMobile && (
          <>
            <FlexDir direction={"column"} width={"66vw"} height={"83vh"}>
              {/* <NavProfile /> */}

              <FlexDir gap={"0.5vw"}>
                <Pagination
                  width={"9.5vw"}
                  mediaQueryWTablet={"15.75vw"}
                  mediaQueryWMobile={"23vw"}
                  height={""}
                  onClick={() => setPage("posted")}
                  variant={page == "posted" ? "clicked" : "normal"}
                >
                  Posts
                </Pagination>
                <Pagination
                  width={"9.5vw"}
                  mediaQueryWTablet={"15.75vw"}
                  mediaQueryWMobile={"23vw"}
                  height={""}
                  onClick={() => setPage("rooms")}
                  variant={page == "rooms" ? "clicked" : "normal"}
                >
                  Rooms
                </Pagination>

                <Pagination
                  width={"9.5vw"}
                  mediaQueryWTablet={"15.75vw"}
                  mediaQueryWMobile={"23vw"}
                  onClick={() => setPage("reviews")}
                  variant={page == "reviews" ? "clicked" : "normal"}
                >
                  Reviews
                </Pagination>

                <Pagination
                  width={"9.5vw"}
                  mediaQueryWTablet={"15.75vw"}
                  mediaQueryWMobile={"23vw"}
                  onClick={() => setPage("bookmarks")}
                  variant={page == "bookmarks" ? "clicked" : "normal"}
                >
                  Bookmarks
                </Pagination>
              </FlexDir>

              <DataProfile page={page} />
            </FlexDir>
          </>
        )}
      </FlexDir>
    </>
  );
};
