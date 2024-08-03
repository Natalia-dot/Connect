import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------ GET ALL COMMENTS ------------------
export const getAllComments = async (id) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/comments/getAll/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ CREATE ------------------
export const createComment = async (roomId, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/comments/createRoomReview/${roomId}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

export const createUserComment = async (userId, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/comments/createUserReview/${userId}`, formData)
    .then((res) => res)
    .catch((error) => error);
};

export const deleteComment = async (commentId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/comments/delete/${commentId}`)
    .then((res) => res)
    .catch((error) => error);
};