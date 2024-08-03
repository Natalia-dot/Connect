import Swal from "sweetalert2"
import { useAuth } from "../context/authContext";
import { Navigate, useNavigate } from "react-router-dom";


export const useErrorCreateRoom = (res, setRes, setCreatedRoomSuccesfully, setId, logout, navigate) => {
  // console.log(res);
  if (res?.status == 200) {
    
    setId(res.data._id)
    setRes({});
    setCreatedRoomSuccesfully(() => true);
   return  Swal.fire({
      icon: "success",
      title: 'Your property is now posted.',
      showConfirmButton: false,
      timer: 1500,
    });
    
  }

  if (res?.response?.data?.error?.includes("Error updating user")) {
    setRes({});
   return Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "Your user could not be updated properly. Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });
   
  }


  if (res?.response?.data?.error?.includes("Error creating room")) {
    setRes({});
    return Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "Your user could not be updated properly. Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });

  }

}
