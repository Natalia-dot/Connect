import Swal from "sweetalert2";

export const useCanUserPost = (data, navigate) => {
    // console.log(data)
  if (
    data.description == "" || data.description == null ||
    data.name == "" || data.name == null ||
    data.lastName == "" || data.lastName == null ||
    data.birthYear == "" || data.birthYear == null ||
    data?.interests?.length == 0 || data.interests == null
  ) {
    const modifyThis = [];
    const requiredData = ["description", "name", "lastName", "birthYear", "interests"]

    // console.log(Object.keys(data))
    for (let i = 0; i < Object.keys(data).length; i++) {
        if (Object.values(data)[i].length === 0 ) {
            modifyThis.push(Object.keys(data)[i])
        }
    }
          for (let i = 0; i < requiredData.length; i++) {
            data[requiredData[i]] ? console.log("hola") : modifyThis.push(requiredData[i])
            
          }
    let joint = modifyThis.join(", ")
    navigate("/profile");
    return Swal.fire({
        position: "center",
        icon: "question",
        iconColor: "rgba(43,117,60,0.7)",
        title: "You have to finish editing your profile.",
        text: `You have to modify: ${joint}`,
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        animation: true,
      });
  }
};
