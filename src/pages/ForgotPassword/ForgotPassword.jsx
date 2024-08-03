import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { forgotPasswordNoAuth } from "../../services/user.service";
import { useForgotPasswordError } from "../../hooks/useForgotPasswordError";
import { ButtonPrimary, FlexDir, Form, H1Form, H3Form, LabelAndInput, Small } from "../../components/StyleComponents";


export const ForgotPassword = () => {
    const {handleSubmit, register} = useForm();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [forgotOk, setForgotOk] = useState(false);
  
    const formSubmit = async (formData) => {
      setSend(true);
      setRes(await forgotPasswordNoAuth(formData));
      setSend(false);
    }
  
    useEffect(() => {
      useForgotPasswordError(res, setRes, setForgotOk); 
      // console.log(res)
    }, [res]);
  
    if (forgotOk) {
      return <Navigate to="/login" />;
    }
    return (
        <>
        <FlexDir direction={"column"} margin={"50px 0 8px 0"}>
            <Form width={"40vw"}  height={"50vh"}  onSubmit={handleSubmit(formSubmit)}>
         
            <H1Form margin={"8px 0 0 0"}> FORGOT PASSWORD?</H1Form>
            <FlexDir direction={"column"} gap={"25px"} >
                Don't worry! We will send you a new one to your email
           
                
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
                
                  
                        <ButtonPrimary  width={"70%"} variant={send ? "loading" : "normal"} type="submit">SEND</ButtonPrimary>
               
             
                <Small>Please set a new password as soon as you log into your account.</Small>
                </FlexDir>
            </Form>
        </FlexDir>
        </>
      )
    }