import Swal from "sweetalert2"

export const useErrorCreatePost = (res, setRes, setCreatedPostSuccesfully, navigate) => {
  // console.log(res);
  if (res?.status == 200) {
    let id = (res?.data?.savedPost?._id)
  navigate(`/feed/${id}`)
  setRes({});
    setCreatedPostSuccesfully(() => true);
   return Swal.fire({
      icon: "success",
      title: 'Your post is now public.',
      showConfirmButton: false,
      timer: 1500,
    });
     
  }

  if (res?.response?.data?.includes("Error saving post")) {
    setRes({});
    return Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "The post was not saved, sorry! Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });
    
  }

  if (res?.response?.data?.error?.includes( "no se encontro por id")) {
    setRes({});

    return Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "Your user could not be updated properly. Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });

  }

  if (res?.response?.status === 500) {
    setRes({}); 
    return Swal.fire({
        icon: "error",
        title: "Server problems!",
        text: "Please try again later.",
        showConfirmButton: false,
        timer: 3000,
      });
     
  }

}
