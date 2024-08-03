import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useThemeApp } from "../../context/themeContext";
import { useAuth } from "../../context/authContext";
import { HeaderSmall } from "./HeaderSmall";
import { HeaderElement } from "./Header.element";
import { ButtonPrimary } from "../StyleComponents";
import { NavSpan } from "../StyleComponents/Buttons/NavSpan.element";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 776);
  const { toggleTheme, theme } = useThemeApp();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 776);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <HeaderElement>

          <Link to={"/"} className="headerImg">
            <img
              src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png"
              alt="Logo connect-a-mate"
            />
          </Link>
          <div className="navs">

            <nav className="navDos">
              <ul className="mainNav">
                <NavLink to={"/feed"}>Feed</NavLink>
                <NavLink to={"/roomSearch"}>Find your Room</NavLink>
                {/* <NavLink to={"/createRoom"}>Post Room</NavLink> */}
                <NavLink to={"/createPost"}>Post</NavLink>
                <NavLink to={"/messages"}>Messages</NavLink>
                <li>
                <NavSpan onClick={toggleTheme}>
{theme == "dark" ? "light_mode" : "dark_mode"}
</NavSpan>
{user != null ? (
                <>
                <Link to={"/profile"}>
                  <img
                    className="user-img"
                    src={user.image}
                    alt="User"
                  />
                </Link>

                </>
              ): 
              <NavSpan onClick={ navigateToLogin} size={"50px"} variant="fill">
account_circle
</NavSpan>}
</li>
              </ul>
            </nav>
          </div>

        </HeaderElement>
      ) : (
        <HeaderSmall />
      )}
    </>
  );
};

