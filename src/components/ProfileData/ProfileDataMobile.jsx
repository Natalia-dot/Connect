import React, { useEffect, useState } from "react";
import { ProfileDataMobileElement } from "./ProfileDataMobile.element";
import { useAuth } from "../../context/authContext";
import { ButtonPrimary, FlexDir } from "../StyleComponents";
import { ConnectButtonCustom } from "../StyleComponents/Buttons/ConnectButton";
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../../services/user.service";
import { Loading } from "../Loading/Loading";

export const ProfileDataMobile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
    const [data, setData] = useState(null);
    const [res, setRes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
      const response = await getUserById(user?._id);
      setData(response.data)
      setIsLoading(false);
    };
  
    useEffect(() => {
      fetchData();
    }, []);



  return (
    isLoading ? <Loading/> :
    <>
    { data && (
      <ProfileDataMobileElement>
        <img alt="user logo" src={data.image} />
        <Link to={`/user/${data?.username}`}><h1>@{data?.username}</h1></Link>
        {data.description && <p>{data.description}</p>}
        <FlexDir wrap={"wrap"}>
          {data.interests.map((interest) => (
            <h3 className="interests" key={interest}>{interest}</h3>
          ))}
        </FlexDir>

        <div className="line"></div>

        <div className="links" onClick={() => navigate("/profile/mobile/posts")}>
          <span className="material-symbols-outlined">article</span> My Posts
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>
        <div className="line"></div>

<div className="links" onClick={() => navigate("/profile/mobile/rooms")}>
  <span className="material-symbols-outlined">meeting_room</span> My Rooms
  <span className="material-symbols-outlined arrow">chevron_right</span>
</div>
        <div className="line"></div>

        <div className="links" onClick={() => navigate("/profile/mobile/reviews")}>
          <span className="material-symbols-outlined">star</span> Reviews
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

        <div className="links" onClick={() => navigate("/profile/mobile/bookmarks")}>
          <span className="material-symbols-outlined">bookmark</span> Bookmarks
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

        <div className="links"
        onClick={() => navigate("/profile/edit")}>
          <span
            className="material-symbols-outlined"
            
          >
            edit
          </span>
          Edit 
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>
        <div
          className="links"
          onClick={() => navigate("/profile/settings")}
        >
          <span className="material-symbols-outlined">settings</span> Settings
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>
        <div className="line"></div>
        <div className="links" onClick={logout}>
          <span className="material-symbols-outlined">move_item</span> Logout
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>
      </ProfileDataMobileElement>
    )}
    </>
  
  );
};
