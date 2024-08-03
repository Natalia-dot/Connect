import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------ GET ALL CHATS ------------------
export const getUserChats = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/chats/getChats`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ GET CHAT BY IF ------------------
export const getChatByID = async (id) => {
    const APIGeneral = extraConfig();
  
    return APIGeneral.get(`/chats/getChat/${id}`)
      .then((res) => res)
      .catch((error) => error);
  };


//! ------------------ CREATE MESSAGE ------------------
export const newMessageChat = async (formData) => {
    const APIGeneral = extraConfig();
  
    return APIGeneral.post(`/chats/chat`, formData)
      .then((res) => res)
      .catch((error) => error);
  };