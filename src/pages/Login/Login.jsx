import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user.service";
import { useErrorLogin } from "../../hooks/useErrorLogin";
import { useAuth } from "../../context/authContext";
import { Anchor, ButtonPrimary, FlexDir, Form, H1Form, LabelAndInput, Small } from "../../components/StyleComponents";



export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, setUser } = useAuth();
  const navigate = useNavigate();

  const [isSent, setIsSent] = useState(false); 
  const [res, setRes] = useState({});
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const formSubmit = async (formData) => {
    setIsSent(true);
    setRes(await loginUser(formData));
    setIsSent(false);
  };

  useEffect(() => {
    useErrorLogin(res, setRes, login, setSuccessfulLogin);
    // console.log(res)
  }, [res]);

  useEffect(() => {
    setUser(() => null);
    localStorage.removeItem("user");
  }, []);

  if (successfulLogin) {
    if (res?.data?.user.check == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      return <Navigate to="/" />;
      
    }
  }

  return (
    <>
    <FlexDir direction={"column"} gap={"2px"} margin={"50px 0 8px 0"}>

        <Form  width={"40vw"}  height={"55vh"} onSubmit={handleSubmit(formSubmit)}>
        <FlexDir direction={"column" } gap={"16px"}>
        <H1Form margin={"8px 0 0 0"}>LOG IN</H1Form>
      

          <LabelAndInput>
          <label htmlFor="email">
          Email
        </label>
        <input
    
          type="email"
          id="userEmail"
          name="userEmail"
          autoComplete="false"
          {...register("email", { required: true })}
        />
          </LabelAndInput>
          
 
          <LabelAndInput>
       <label htmlFor="password">
          Password
        </label>
        <input
        
          type="password"
          id="password"
          name="password"
          autoComplete="false"
          {...register("password", { required: true })}
        />
</LabelAndInput>
        




<ButtonPrimary width={"70%"} type="submit" margin={"1rem 0 0 0"}
                  disabled={isSent} variant={ isSent ? "loading" : "normal"}>
     {isSent ? "Loading..." : "LOGIN"}
    </ButtonPrimary>
   

    <Small>
            Have you forgotten the password?{" "}
            <Link to="/forgotpassword" >
              <Anchor>Change password</Anchor>
            </Link>
            </Small>
            <FlexDir margin={"0 0 1rem"}>

Are you not registered? <Link to="/register"><Anchor>Register Here</Anchor></Link>

</FlexDir>

</FlexDir>
      
     
      </Form>
      </FlexDir>
  </>
  );
};
