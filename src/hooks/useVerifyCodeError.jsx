import Swal from "sweetalert2";

export const useVerifyCodeError = (
  res,
  setRes,
  setOkCheck,
  setOkDeleteUser,
  userlogin,
  setUserNotFound
) => {

  if (res?.data?.testUser?.toString() == "true") {
   

    if (localStorage.getItem("user")) {
      const currentUser = localStorage.getItem("user");
      const parseUser = JSON.parse(currentUser);
      const customUser = {
        ...parseUser,
        check: true,
      };

      const stringUser = JSON.stringify(customUser);

      userlogin(stringUser);
    }
    setOkCheck(() => true);
    setRes(() => ({}));
    return Swal.fire({
      icon: "success",
      title: "Correct code! ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }


  if (res?.data?.check == false && res?.data?.doesUserExist.includes('User deleted for security')) {
    setRes(() => ({}));
    setOkDeleteUser(() => true)
    return Swal.fire({
      icon: "error",
      title: "Code incorrect.",
      text: "Your user was deleted as a security measure. Please register again.",
      showConfirmButton: false,
      timer: 1500,
    });
  }


  if (res?.data?.check == false && res?.data?.doesUserExist.includes('Error in updating validation')) {
    setRes(() => ({}));
    return Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "Please login again.",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // if (res?.response?.data?.includes('User not found')) {
  //   setUserNotFound(() => true);
  //   setRes(() => ({}));
  //   Swal.fire({
  //     icon: "error",
  //     title: "Interval server error ❎.",
  //     text: "User not found, please register.",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // }

    // ---------------------> 500
    if (res?.response?.status == 500) {
      setRes(() => ({}));
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Internal Server Error ❎!",
        showConfirmButton: false,
        timer: 1500,
      });

    }
};

