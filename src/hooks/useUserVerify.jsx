import { useNavigate } from "react-router-dom";
import { getUserById } from "../services/user.service";
import Swal from "sweetalert2";

export const useUserVerify = (user, logout, navigate) => {
    const verify = async () => {
        let res = await getUserById(user._id);
    if(res?.response?.data?.includes("TokenExpiredError")) {
      logout;
      navigate('/login');
        return Swal.fire({
          icon: "error",
          title: "Please login.",
          text: "Session expired, login again.",
          showConfirmButton: false,
          timer: 3000,
        });
    }
  }

verify();

}