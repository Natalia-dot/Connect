import Swal from "sweetalert2"

export const useErrorUpdatePost = (res, setRes, navigate) => {
  // console.log(res);
  if (res?.status == 200) {
    let id = (res?.data?.postByIdUpdated?._id)
  navigate(`/feed/${id}`)
  setRes({});
   return Swal.fire({
      icon: "success",
      title: 'Updated successfully.',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  
  }

  if (res?.response?.data?.update == false) {
    setRes({});
    return Swal.fire({
      icon: "error",
      title: "Could not update the room properly.",
      text: "The post was not properly updated, sorry! Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    
  }

  if (res?.response?.data?.error?.includes( "Error al actualizar por id")) {
    setRes({});
   return Swal.fire({
      icon: "error",
      title: "Update did not go as expected.",
      text: "Please retry or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });
  
  }
  if (res?.response?.data?.error?.includes( "Error encontrando el post")) {
    setRes({});
    return Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "Post not found.",
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
