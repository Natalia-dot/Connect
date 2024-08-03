import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorChangePassword } from "../../../hooks/useErrorChangePassword";
import { useDeleteUser } from "../../../hooks/useDeleteUser";
import { changePasswordAuth} from "../../../services/user.service";
import { ButtonPrimary, FlexDir, Form, H1Form, H1Profile, LabelAndInput } from "../../../components/StyleComponents";


export const AccountSettings = () => {


  const [resPassword, setResPassword] = useState({});
  const [sendPassword, setSendPassword] = useState(false);


  const { setUser, setIsDeletedUser, user, logout } = useAuth();
  const { handleSubmit, register } = useForm();


  const changePasswordFormSubmit = (formData) => {
    const { password, newPassword, confirmPassword } = formData;

    if (newPassword == confirmPassword) {
      Swal.fire({
        title: "Change password?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel,",
      }).then(async (resPassword) => {
        if (resPassword.isConfirmed) {
          setSendPassword(true);
          setResPassword(await changePasswordAuth({ password, newPassword }));
          setSendPassword(false);
        }
      
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Your password and confirmation password must match",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  //! ----- useEffect

  useEffect(() => {
    useErrorChangePassword(resPassword, setResPassword, setUser);
    // console.log(resPassword)
  }, [resPassword]);

  //! ---- estados de navegacion


  return (
    <>

 
        <FlexDir direction={"column"} >
          
          <Form  width={"40vw"} onSubmit={handleSubmit(changePasswordFormSubmit)}>
          <H1Profile >Change your password</H1Profile>
            <FlexDir direction={"column"} >
            <LabelAndInput direction={"column"}>
              <label htmlFor="custom-input" >
                Current password
              </label>
              <input
             
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              />
            </LabelAndInput>
            <LabelAndInput direction={"column"}>
              <label htmlFor="custom-input" className="customPlaceholder">
                New password
              </label>
              <input
              
                type="password"
                id="newPassword"
                name="newPassword"
                autoComplete="false"
                {...register("newPassword", { required: true })}
              />
            </LabelAndInput>
            <LabelAndInput direction={"column"}>
              <label htmlFor="custom-input" >
                Confirm password
              </label>
              <input
               
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="false"
                {...register("confirmPassword", { required: true })}
              />
            </LabelAndInput>
     
            <ButtonPrimary 
            type="submit" width={"70%"}
              
            disabled={sendPassword}
            variant={sendPassword ? "loading" : "normal"} 
             >
Change Password
</ButtonPrimary>


            </FlexDir>
          </Form>
        </FlexDir>
        <FlexDir>
        <ButtonPrimary  
              variant={"delete"} width={"50%"} onClick={() => useDeleteUser(setUser, setIsDeletedUser)}>
                <span class="material-symbols-outlined">
delete
</span>
        Delete account
      </ButtonPrimary>

        </FlexDir>

    </>
  );
};
