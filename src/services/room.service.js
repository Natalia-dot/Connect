import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------ CREATE ------------------
export const createRoom = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/rooms/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ UPDATE ------------------
export const updateRoom = async (roomId, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/rooms/${roomId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ DELETE ------------------
export const deleteRoom = async (roomId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/rooms/${roomId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------- GET by ID -----------------
export const getRoomById = async (roomId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/${roomId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET by NAME ----------------
export const getRoomByName = async (roomName) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/byName/${roomName}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET by LOCATION ----------------
export const getRoomByLocation = async (location) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/byLocation/${location}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET by POSTCODE ----------------
export const getRoomByPostCode = async (postcode) => {
  const APIGeneral = extraConfig();
  console.log(postcode)

  return APIGeneral.get(`/rooms/byPostcode/${postcode}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET by PROVINCE ----------------
export const getRoomByProvince = async (province) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/byProvince/${province}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ GET ALL ------------------
export const getAllRooms = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------- SORT -------------------
export const sortRooms = async (method, value) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/sort/rooms/${method}/${value}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ FILTER ------------------
export const filterRooms = async (filter, min, max) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/filter/rooms/${filter}/${min}/${max}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ FILTER ENUM ------------------
export const filterEnumRooms = async (filter, value) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/filterEnum/rooms/${filter}/${value}`)
    .then((res) => res)
    .catch((error) => error);
};