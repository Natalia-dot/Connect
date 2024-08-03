import { Link, NavLink, useNavigate } from "react-router-dom";
import { ButtonPrimary, FlexDir, Pagination } from "../StyleComponents";
import { useState } from "react";

export const NavProfile = () => {
  const [page, setPage] = useState("posted");

  return (
    <>
      <FlexDir
        
        gap={"0.5vw"}
        // margin={"16px 0 0 0 "}
        // height={"20%"}
      >
        <NavLink to="/profile/posted">
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            height={""}
            onClick={() => setPage("posted")}
            variant={page == "posted" ? "clicked" : "normal"}
          >
            Posted
          </Pagination>
        </NavLink>
        <NavLink to="/profile/reviews">
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            onClick={() => setPage("reviews")}
            variant={page == "reviews" ? "clicked" : "normal"}
          >
            Reviews
          </Pagination>
        </NavLink>
        <NavLink to="/profile/bookmarks">
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            onClick={() => setPage("bookmarks")}
            variant={page == "bookmarks" ? "clicked" : "normal"}
          >
            Bookmarks
          </Pagination>
        </NavLink>

      </FlexDir>
    </>
  );
};
