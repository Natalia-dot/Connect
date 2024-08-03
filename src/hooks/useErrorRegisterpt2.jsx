import Swal from "sweetalert2/dist/sweetalert2.all.js";



export const useErrorRegisterpt2 = (res, setRes, setOkRegister, login, user) => {
// console.log(res)
let acc
if(res?.data){
    acc = 0
    res?.data?.testingUpdate?.map((item)=>{
        for (let key in item){
            if (item[key] == false){ //en el backend metemos un false cada vez que la informacion no se ha guardado bien
                acc++
            }
        }
    })
}

if(acc == 0){
    let check = ""

    res?.data?.testingUpdate?.forEach((item)=>{
        for (let key in item){
            if (item[key] == true ){
                check += `${key}`
            }
        }
    })
//! ----- dentro--- el 200

if (res?.status == 200){
  
  let user1 = {
    _id: res.data.updatedUser._id,
    email: res.data.updatedUser.email,
    birthYear: res.data.updatedUser.birthYear,
    isVerified: res.data.updatedUser.isVerified,
    gender: res.data.updatedUser.gender,
    interests: res.data.updatedUser.interests,
    role: res.data.updatedUser.role,
    image: res.data.updatedUser.image,
    description: res.data.updatedUser.description,
    name: res.data.updatedUser.name,
    lastName: res.data.updatedUser.lastName,
    token: user.token
  }

  const userToJSONString = JSON.stringify(user1)
  login(userToJSONString)
    setRes(()=>({}))
    setOkRegister(() => true) 
    return Swal.fire({
        icon: "success",
        title: "Register completed",
        timer: 3000,
      });
}

}

  //! -------------------------------------> 404 general y el 500

  if (res?.response?.status == 500 || res?.response?.status == 404) {
    setRes(() => ({}));
    return Swal.fire({
      icon: "error",
      title: "Internal Server Error",
      text: "There was an error in our internal servers. Please, try again later",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  if (acc != 0) {
    if (res?.status == 200) {    // enviabamos el test con la respuesta 200
      setRes(() => ({}));
      return Swal.fire({
        icon: "error",
        title: "There was an error registering data",
        text: "Please try again",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }




}
