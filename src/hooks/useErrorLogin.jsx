import Swal from "sweetalert2";

export const useErrorLogin = (res, setRes, login, setSuccessfulLogin) => {
    if (res?.status == 200) {
        const updatedUser = {   
          token: res.data.token,
          username: res.data.user.username,
          name: res.data.user.name,
          lastName: res.data.user.lastName,
          email: res.data.user.email,
          image: res.data.user.image,
          check: res.data.user.check,
          _id: res.data.user._id,
          role: res.data.user.role,
          gender: res.data.user.gender,
          birthYear: res.data.user.birthYear,
          interests: res.data.user.interests,
          description: res.data.user.description,

        };
    
        const userString = JSON.stringify(updatedUser);
        login(userString);
        setSuccessfulLogin(() => true);
    
        return Swal.fire({
          icon: "success",
          title: "Welcome back.",
          text: "Succesfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    
    
      if (res?.response?.data?.includes("User not found")) {
        setRes(() => ({}));
       return Swal.fire({
          icon: "error",
          title: "Sorry!",
          text: "This user is not registered! Try making an account, it's super easy!",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    
    
      if (res?.response?.data?.includes("Password is incorrect")) {
        setRes(() => ({}));
        return  Swal.fire({
          icon: "error",
          title: "Wrong password",
          showConfirmButton: false,
          timer: 1500,
        });
       
      }
    
      if (res?.response?.status == 500) {
        setRes(() => ({}));
      return  Swal.fire({
          icon: "error",
          title: "Interval Server Error",
          text: "There has been an error in our internal servers. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });

      }
}
