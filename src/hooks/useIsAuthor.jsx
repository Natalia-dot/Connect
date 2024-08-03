import Swal from "sweetalert2"


//esto creo que no va a servir
export const useIsAuthor = async (user, id, navigate, route, item) => {
    if(route.pathname.includes('/updateRoom')) {
        if (!item.postedBy[0].includes(user._id)) {
            navigate(`/roomFinds/${id}`)
            return Swal.fire({
                icon: "error",
                title: "You are not the owner.",
                showConfirmButton: false,
                timer: 3000,
              });
    } 
}
    else if (route.pathname.includes('/updatePost')) {
        if (!item.author[0].includes(user._id)) {
            navigate(`/feed/${id}`)
           return Swal.fire({
                icon: "error",
                title: "You are not the owner.",
                showConfirmButton: false,
                timer: 3000,
              });
    } 
    }
}