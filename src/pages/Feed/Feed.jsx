import { useEffect, useState } from "react";
import { Loading, MiniPostProfile, MiniPosts } from "../../components";
import { FeedStyle } from "./Feed.element";
import {
  getAllPostByType,
  getAllPosts,
  getAllPostsPopulated,
  getPostByProvince,
  search,
} from "../../services/post.service";
import { usePaginacion } from "../../hooks/usePaginacion";
import {
  AddElement,
  FlexDir,
  H1Posts,
  LabelAndInput,
  Pagination,
  RadioInput,
  SearchButtonCustom,
  SearchInputCustom,
} from "../../components/StyleComponents";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {
  addFavPost,
  getUserById,
  getUserByIdPLikes,
} from "../../services/user.service";
import { provinceEnum } from "../../utils/provinceEnum";
import { NothingHere } from "../../components/NothingHere/NothingHere";

export const Feed = () => {
  const isMobile = window.innerWidth < 576 ? true : false;


  const [res, setRes] = useState(null); //!useState de todas las res

  const [feed, setFeed] = useState(null); //!useState del feed
  const [send, setSend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [sendSearch, setSendSearch] = useState(false); //! useState del Search
  const [searchInput, setSearchInput] = useState(null);
  const [resSearch, setResSearch] = useState([]);

  const [userLikedPosts, setUserLikedPosts] = useState([]); //! useState de los likes
  const [updatedLikes, setUpdatedLikes] = useState(false);

  const [province, setProvince] = useState(false); //! useState del input de provincias
  const [resFilterProvince, setResFilterProvince] = useState([]);

  const { ComponentPaginacion, setGaleriaItems, dataPag } = usePaginacion(isMobile ? 1 : 6);
  const { user } = useAuth();




  //-------------------------------- set Gallery segun el tipo (feed)
  const setGallery = async () => {
    setSend(true);
    setRes(await getAllPostByType(feed));

    setIsLoading(false);
    setSend(false);
  };

  //------------------------------------ hace el search segun el tipo
  const handleSearch = async () => {
    setIsLoading(true);
    setSendSearch(true);
    setResSearch(await search(searchInput));
    // console.log(resSearch);
    setIsLoading(false);
  };

  //------------------------------------ filtra por provincia

  const filterByProvince = async (provinceConst) => {
    setIsLoading(true);
    setProvince(true);
    setResFilterProvince(await getPostByProvince(provinceConst));
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

  //! useEffects

  useEffect(() => {
    if (sendSearch == true && resSearch?.status == 200) {

      feed == "RoomSeeker"
        ? setGaleriaItems(resSearch?.data?.resArrayRoommSeeker) //aqui se setea la respuesta del search segun estes en room o roommate
        : setGaleriaItems(resSearch?.data?.resArrayRoommateSeeker);
    } else if (province == true && resFilterProvince?.status == 200) {

      setGaleriaItems(resFilterProvince?.data);
    } else {
      res?.status == 200 && setGaleriaItems(res?.data?.allPosts);
      // console.log(res?.data?.allPosts)
    }
  }, [res, resSearch, resFilterProvince]);

  useEffect(() => {
    res?.status == 200 && setGaleriaItems(res?.data);
  }, [res, feed]);

  useEffect(() => {
    setGallery();
  }, [feed]);

  useEffect(() => {
    getSavedPosts();
  }, [updatedLikes, feed]);

 

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
   
          <FlexDir direction={"column"}>
            <LabelAndInput
              alignItems={"center"}
              margin={feed == null && "22vh 0 30vh 0"}
            >
              {feed == null && <H1Posts>I'm looking for a </H1Posts>}
              <FlexDir>
                <Pagination
                  width={"9.5vw"}
                  mediaQueryWTablet={"15.75vw"}
                  mediaQueryWMobile={"23vw"}
                  onClick={() => setFeed("RoomSeeker")}
                  variant={feed == "RoomSeeker" ? "clicked" : "normal"}
                >
                  Roomie
                </Pagination>
                <Pagination
                  width={"9.5vw"}
                  mediaQueryWTablet={"15.75vw"}
                  mediaQueryWMobile={"23vw"}
                  onClick={() => setFeed("RoommateSeeker")}
                  variant={feed == "RoommateSeeker" ? "clicked" : "normal"}
                >
                  Room
                </Pagination>
              </FlexDir>
            </LabelAndInput>
            <FlexDir>
              {feed != null && (
                <>
                <FlexDir margin={"0"} direction={"column"}>
                  <FlexDir margin={"0"}>
                  <SearchInputCustom
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <SearchButtonCustom onClick={handleSearch}>
                    <span className="material-symbols-outlined">search</span>
                  </SearchButtonCustom>
                  </FlexDir>
                  <select
                    onInput={(e) => {
                      const provinceConst = e.target.value;
                      filterByProvince(provinceConst);
                    }}
                  >
                    {provinceEnum.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                  </FlexDir>
                </>
              )}
            </FlexDir>

            { feed != null && (
              <>


                <ComponentPaginacion />
                {!isMobile ? (
                <FeedStyle>
                  
                  {dataPag[0]
                    ? dataPag.map((item) => (
                        <MiniPosts
                          key={item?._id}
                          id={item?._id}
                          title={item?.title}
                          text={item?.text}
                          image={item?.image}
                          province={item?.province}
                          price={item?.price}
                          author={item?.author}
                          addToSaved={addToSaved}
                          userLikedPosts={userLikedPosts}
                          updatedLikes={updatedLikes}
                        ></MiniPosts>
                      ))
                    : (res?.response?.status == 404 ||
                        res?.response?.status == 500 ||
                        resSearch?.response?.status == 404 ||
                        resSearch?.response?.status == 500) && (
                        <NothingHere path={"/createPost"}/>
                      )}
                  <Link to="/createPost">
                    <AddElement />
                  </Link>
                  


                </FeedStyle>
                ) : (
                  <>
                  { isLoading ? ( <Loading /> ) : (
                  <FeedStyle>
                 
                  {dataPag[0]
                    ? dataPag.map((item) => (
                        <MiniPostProfile
                          key={item?._id}
                          id={item?._id}
                          title={item?.title}
                          text={item?.text}
                          image={item?.image}
                          province={item?.province}
                          price={item?.price}
                          author={item?.author}
                          addToSaved={addToSaved}
                          userLikedPosts={userLikedPosts}
                          updatedLikes={updatedLikes}
                        ></MiniPostProfile>
                      ))
                    : (res?.response?.status == 404 ||
                        res?.response?.status == 500 ||
                        resSearch?.response?.status == 404 ||
                        resSearch?.response?.status == 500) && (
                          <NothingHere path={"/createPost"}/>
                      )}

                      
                  </FeedStyle>
                  )}
                   <Link to="/createPost">
                   <AddElement />
                 </Link>
</>
                )}
              </>
            )}
          </FlexDir>
      
        </>
      )}
    </>
  );
};
