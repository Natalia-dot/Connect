import React, { useEffect, useState } from "react";
import {
  addFavPost,
  getUserById,
  getUserByIdP,
} from "../../../services/user.service";
import { useAuth } from "../../../context/authContext";
import {
  Loading,
  MiniPostProfile,
  MiniPostProfileContainerElement,
  MiniPosts,
} from "../../../components";
import { DataProfileElement } from "./DataProfile.element";
import {
  FlexDir,
  FlexEnd,
  ProfileContainer,
  ReviewElement,
} from "../../../components/StyleComponents";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { NothingHere } from "../../../components/NothingHere/NothingHere";
import { Rating } from "primereact/rating";
import { Link, useNavigate } from "react-router-dom";
import { DeleteButtonComponent } from "../../../components/DeleteButton/DeleteButtonComponent";

export const DataProfile = ({ page }) => {
  const isMobile = window.innerWidth < 576 ? true : false;
  const navigate = useNavigate();
  const { MiniPaginacion, setGaleriaItems, dataPag } = usePaginacion(
    isMobile ? 1 : 2
  );
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [userLikedPosts, setUserLikedPosts] = useState([]); //! useState de los likes
  const [updatedLikes, setUpdatedLikes] = useState(false);

  const fetchData = async () => {
    setRes(await getUserByIdP(user?._id));
    setIsLoading(false);
  };

  //------------------------------------ save post

  const addToSaved = async (id) => {
    const response = await addFavPost(id); //! TIENE QUE IR EN CONSTANTE POR ASINCRONIA DE REACT, NO EN USE STATE
    setUpdatedLikes(!updatedLikes);
  };

  const getSavedPosts = async () => {
    const userSavedPosts = await getUserById(user._id); //! TIENE QUE IR EN CONSTANTE POR ASINCRONIA DE REACT, NO EN USE STATE
    setUserLikedPosts(userSavedPosts?.data?.savedPosts); //! tiene que ser un array - BACK NO POPULADO
  };

  // console.log(userLikedPosts);

  useEffect(() => {
    getSavedPosts();
  }, [updatedLikes, res]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // if (res?.status == 200) {
    page === "posted"
      ? setGaleriaItems(res?.data?.myPosts)
      : page === "rooms"
      ? setGaleriaItems(res?.data?.myRooms)
      : page === "reviews"
      ? setGaleriaItems(
          res?.data?.receivedComments?.filter(
            (comment) => comment.type === "public"
          )
        )
      : page === "bookmarks" && setGaleriaItems(res?.data?.savedPosts);

    // }
  }, [res, page]);

  const renderSection = () => {
    switch (page) {
      case "posted":
        return (
          isLoading ? <Loading/> :
          <>
            <ProfileContainer heightTablet={"38vh"} height={"77vh"} key={page}>
              <FlexDir>
                <h1>Posts you have made</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag[0] ? (
                  dataPag.map((post) => (
                    <>
                    
                      <MiniPostProfile
                        key={post._id}
                        page={"post"}
                        id={post._id}
                        title={post.title}
                        text={post.text}
                        image={post.image}
                        province={post.province}
                        price={post.price}
                        type={post.type}
                        addToSaved={addToSaved}
                        userLikedPosts={userLikedPosts}
                      >
                        {post.author == user._id && (
                          <DeleteButtonComponent type="post" id={post._id} />
                        )}
                      </MiniPostProfile>
                    </>
                  ))
                ) : (
                  <NothingHere path={"/createPost"} />
                )}
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "rooms":
        return (
          isLoading ? <Loading/> :
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} key={page}>
              <FlexDir>
                <h1>Rooms you have posted</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {page == "rooms" && dataPag[0] ? (
                  dataPag.map((room) => (
                    <>
          
                      {room && (
                        <MiniPostProfile
                          key={room._id}
                          page={"room"}
                          id={room._id}
                          title={room.title}
                          text={room.description}
                          image={room?.image}
                          province={room.province}
                          price={room.price}
                          type={room.type}
                          addToSaved={addToSaved}
                          userLikedPosts={userLikedPosts}
                        >
                          {" "}
                          {
                            //el componente de DeleteButtonComponent entra como child a minipost profile
                            room.postedBy == user._id && (
                              <DeleteButtonComponent
                                type="room"
                                id={room._id}
                              />
                            )
                          }{" "}
                        </MiniPostProfile>
                      )}
                    </>
                  ))
                ) : (
                  <NothingHere path={"/createRoom"} />
                )}
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "reviews":
        return (
          isLoading ? <Loading/> :
          <>
            <ProfileContainer
              heightTablet={"58vh"}
              height={"77vh"}
              key={page}
              review={true}
            >
              <FlexDir>
                <h1>Reviews of your profile</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag[0] ? (
                  dataPag?.map((review) => (
                    <ReviewElement
                      key={review._id}
                      padding="2rem 0 1rem 0"
                      margin="3rem 0 1rem 0"
                    >
                      {/* {console.log(review)} */}

                      <FlexEnd
                        variant="inverted"
                        height={"70px"}
                        onClick={() => navigate(`/user/${review.creatorName}`)}
                      >
                        <img
                          src={review.creatorImage}
                          className="commentImage"
                          alt="Creator"
                        />
                        <h2 className="commentUser">{review.creatorName}</h2>

                        <Rating
                          className="starss"
                          value={review?.rating}
                          readOnly
                          cancel={false}
                        />
                      </FlexEnd>

                      <p>{review.textComment}</p>
                    </ReviewElement>
                  ))
                ) : (
                  <NothingHere path={"/feed"} />
                )}
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "bookmarks":
        return (
          isLoading ? <Loading/> :
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} key={page}>
              <FlexDir>
                <h1>Bookmarks</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag ? (
                  dataPag?.map((bookmark) => (
                    <>
                    
                      <MiniPostProfile
                        key={bookmark._id}
                        page={"bookmark"}
                        id={bookmark._id}
                        title={bookmark.title}
                        text={bookmark.text}
                        image={bookmark.image}
                        province={bookmark.province}
                        price={bookmark.price}
                        type={bookmark.type}
                        addToSaved={addToSaved}
                        userLikedPosts={userLikedPosts}
                      >
                        {" "}
                      </MiniPostProfile>
                    </>
                  ))
                ) : (
                  <NothingHere path={"/feed"} />
                )}
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      default:
        return <h1>default</h1>;
    }
  };

  return dataPag && renderSection();
};
