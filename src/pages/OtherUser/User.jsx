import { Outlet, useNavigate, useParams } from "react-router-dom";
import { NavProfile } from "../../components/NavProfile/NavProfile";
import { useAuth } from "../../context/authContext";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { useUserVerify } from "../../hooks/useUserVerify";
import { getUserByIdP, getUserByUsernameP } from "../../services/user.service";
import { OtherUserProfileDataDesktop } from "../../components/OtherUser/OtherUserProfileDataDesktop";
import { OtherUserProfileDataMobile } from "../../components/OtherUser/OtherUserProfileDataMobile";
import {
  FlexDir,
  Pagination,
  ProfileContainer,
} from "../../components/StyleComponents";
import { DataProfile } from "../Profile/DataProfile/DataProfile";
import { ProfileDataDesktop, ProfileDataMobile } from "../../components";
import { UserDataProfile } from "./UserDataProfile";

export const User = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { username } = useParams();

  const [page, setPage] = useState("posted");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
    const response = await getUserByUsernameP(username);
    // console.log(response);
    setUserData(response.data);
    setLoading(false);
  };

  const isMobile = window.innerWidth < 576 ? true : false;

  useEffect(() => {
    useUserVerify(user, logout, navigate);
    dataFetch();
  }, [username]);

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
          {!isMobile && <OtherUserProfileDataDesktop />}
          {isMobile && <OtherUserProfileDataMobile />}
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
                  onClick={() => setPage("createComment")}
                  variant={page == "createComment" ? "clicked" : "normal"}
                >
                  Leave a comment!
                </Pagination>
              </FlexDir>

              <UserDataProfile userData={userData} page={page} />
            </FlexDir>
          </>
        )}
      </FlexDir>
    </>
  );
};
