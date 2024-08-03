import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";
import { googleUser } from "./serviceGoogle.config";


//*--------------------- user ----------------------------

//! ------------------------- REGISTER ----------------------------------

export const registerUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/redirectRegister", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

export const registerUserWithGoogle = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/register/registerGoogle", formData)
    .then((res) => res)
    .catch((error) => error);
};



export const registerGoogle = async (token) => {
  const APIGeneral = googleUser(token);

  return APIGeneral.then((res) => res).catch((error) => error);
};



//! ------------------------- VERIFY CODE - CHECK NEW USER -------------------------------

export const verifyConfirmationCode = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("users/check", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- RESEND CODE --------------------------------

export const resendConfirmationCode = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("/users/resend/code", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------------- AUTOLOGIN ----------------------------------

export const autoLoginUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("users/login/autologin", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------------------------- LOGIN -------------------------------

export const loginUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.post("users/login", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------------- FORGOT PASSWORD --------------------------------

export const forgotPasswordNoAuth = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("/users/changeUserPassword/changeUserPassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//*--------------------------------------------------------------------------------
//*---------------------------------- CON AUTH -------------------------------------
//*--------------------------------------------------------------------------------

//! ------------------------ CHANGE PASSWORD -------------------------------

export const changePasswordAuth = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("/users/changepassword", formData)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------- UPDATE USER ------------------------------

export const updateUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch("users/update/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------- DELETE USER ------------------------------

export const deleteUser = async (formData) => {
  const APIGeneral = extraConfig();
  return APIGeneral.delete("/users/deleteUser", formData)
    .then((res) => res)
    .catch((error) => error);
};

//* GET USER ------------------------------
//! -------------------> Get User By Name
export const getUserByName = async (userName) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/users/byName/${userName}`)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------> Get User By Id
export const getUserById = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/users/getById/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
//! -------------------> Get User By Id
export const getUserByIdP = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/users/getByIdP/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------> Get User By Id
export const getUserByUsernameP = async (username) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/users/getByUsernameP/${username}`)
    .then((res) => res)
    .catch((error) => error);
};


//! -------------------> Get User By Id Populated Likes
export const getUserByIdPLikes = async (id) => {
  const APIGeneral = extraConfig();
  return APIGeneral.get(`/users/getByIdPopulatedLikes/${id}`)
    .then((res) => res)
    .catch((error) => error);
};


//!-------- ADD FAVS ---------------

export const addFavComment = async (idComment) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/likeComment/${idComment}`)
    .then((res) => res)
    .catch((error) => error);
};

export const addFavPost= async (idPost) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/likePost/${idPost}`)
    .then((res) => res)
    .catch((error) => error);
};

export const addFavRoom = async (idRoom) => {
  const APIGeneral = extraConfig();
  return APIGeneral.patch(`/users/saveRoom/${idRoom}`)
    .then((res) => res)
    .catch((error) => error);
};

