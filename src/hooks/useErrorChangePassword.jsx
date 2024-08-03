import Swal from "sweetalert2/dist/sweetalert2.all.js";

export const useErrorChangePassword = (res, setRes, setUser) => {
  //!----------------- 200: updateUser: true,
  if (res?.data?.includes("Password updated succesfully")) {
    setUser(() => null);
    localStorage.removeItem("user");
    setRes(() => ({}));
    return Swal.fire({
      icon: "success",
      title: "Your new password has been saved",
      showConfirmButton: false,
      timer: 3000,
    });
  }
  //!------------------200: updateUser: false,
  if (res?.data?.updateUser?.toString() == "false") {
    setRes(() => ({}));
    return Swal.fire({
      icon: "error",
      title: "Internal Server Error",
      text: "There was an error in our internal servers. Please try again",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  //! -----------------404: 'password dont match'
  if (res?.response?.data?.includes("Password is not correct")) {
    setRes(() => ({}));
    return Swal.fire({
      icon: "error",
      title: "Incorrect password",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  //! -----------------404: general
  if (res?.response?.data?.includes("Password needs one")) {
    setRes(() => ({}));
    return Swal.fire({
      icon: "error",
      title: "Insuficient password",
      text: "The password must contain 8 characters, 1 upper case, 1 lower case and a special character",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  //! -----------------500: interval server error
  if (res?.response?.status == 500) {
    setRes(() => ({}));
    return Swal.fire({
      icon: "error",
      title: "Internal Server Error",
      text: "There was an error in our internal servers. Please try again",
      showConfirmButton: false,
      timer: 3000,
    });
  }
};
