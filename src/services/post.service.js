import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------ CREATE ------------------
export const createPost = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/posts/create`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ UPDATE ------------------
export const updatePost = async (postId, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/posts/update/${postId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};


//! ------------------ DELETE ------------------
export const deletePost = async (postId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/posts/${postId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------- GET by ID -----------------
export const getPostById = async (postId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/getById/populated/${postId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------- GET by ID SIN POPULAR -----------------
export const getPostByIdUnpopulated = async (postId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/getById/${postId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ GET ALL ------------------
export const getAllPosts = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/getAll/`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ GET ALL POPULATED------------------
export const getAllPostsPopulated = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/getAll/populated/`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET by TYPE ----------------
export const getPostByType = async (type) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/getByType/${type}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET  ALL by TYPE ----------------


export const getAllPostByType = async (type) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/posts/getAllByType/${type}`)
    .then((res) => res)
    .catch((error) => error);
};


//! ---------------- GET by LOCATION ----------------
export const getPostByLocation = async (location) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/getByLocation/${location}`)
    .then((res) => res)
    .catch((error) => error);
};
//! ---------------- GET by POSTCODE ----------------
export const getPostByPostCode = async (postcode) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/byPostcode/${postcode}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET by PROVINCE ----------------
export const getPostByProvince = async (province) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/byProvince/${province}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- SEARCH -------------------------
//  export const searchPost = async (formData) => {
//     const APIGeneral = extraConfig();
//     // const data = { search: formData}
//   console.log(formData)
//     return APIGeneral.get("/posts/search", formData)
//       .then((res) => res)
//       .catch((error) => error);
//   };

export const search = async (search) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/posts/search/${search}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- TOGGLE ROOMMATE ----------------
export const toggleRoommate = async (id, formData) => {
  // console.log(formData)
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/posts/toggleRoommates/${id}/${formData}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- TOGGLE ROOM ----------------
export const toggleRoom = async (id, formData) => {
  // console.log(formData)
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/posts/toggleRoom/${id}/${formData}`)
    .then((res) => res)
    .catch((error) => error);
};
