import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAutoLogin } from "../../hooks/useAutoLogin";
import { useResendCodeError } from "../../hooks/useResendCodeError";
import { useAuth } from "../../context/authContext";
import { Navigate, useNavigate } from "react-router";
import { useVerifyCodeError } from "../../hooks/useVerifyCodeError";
import {
  resendConfirmationCode,
  verifyConfirmationCode,
} from "../../services/user.service";
import {
  Anchor,
  ButtonPrimary,
  FlexDir,
  Form,
  H1Form,
  LabelAndInput,
  Small,
} from "../../components/StyleComponents";

export const VerifyCode = () => {
  const navigate = useNavigate();
  const { allUser, login, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [okCheck, setOkCheck] = useState(false);
  const [okDeleteUser, setOkDeleteUser] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const formSubmit = async (formData) => {
    const userLocal = localStorage.getItem("user");

    if (userLocal == null) {
      const custFormData = {
        confirmationCode: parseInt(formData.confirmationCode),

        email: allUser.data.user.email,
      };

      setSend(true);
      setRes(await verifyConfirmationCode(custFormData));
      setSend(false);
    } else {
      const parseUser = JSON.parse(userLocal);
      console.log(parseUser.email, parseInt(formData.confirmationCode));
      const customFormData = {
        email: parseUser.email,
        confirmationCode: parseInt(formData.confirmationCode),
      };
      setSend(true);
      setRes(await verifyConfirmationCode(customFormData));
      setSend(false);
    }
  };

  const handleReSend = async () => {
    const userLocal = localStorage.getItem("user");
    if (userLocal != null) {
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
      };

      setSend(true);
      setResResend(await resendConfirmationCode(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        email: allUser?.data?.user?.email,
      };

      setSend(true);
      setResResend(await resendConfirmationCode(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    useVerifyCodeError(
      res,
      setRes,
      setOkCheck,
      setOkDeleteUser,
      login,
      setUserNotFound
    );
  }, [res]);

  useEffect(() => {
    useResendCodeError(resResend, setResResend, setUserNotFound);
  }, [resResend]);

  if (okCheck) {
    if (!localStorage.getItem("user")) {
      useAutoLogin(allUser);
    } else {
      return <Navigate to="/register/complete" />;
    }
  }

  if (okDeleteUser) {
    return <Navigate to="/register" />;
  }

  return (
    <>
      <FlexDir direction={"column"} margin={"50px 0 8px 0"}>
        <Form
          width={"40vw"}
          height={"50vh"}
          onSubmit={handleSubmit(formSubmit)}
        >
          <FlexDir direction={"column"} gap={"20px"}>
            <H1Form margin={"8px 0 0 0"}>Verify your account</H1Form>

            <LabelAndInput>
              Confirmation Code
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                {...register("confirmationCode", { required: false })}
              />
            </LabelAndInput>

            <ButtonPrimary
              width={"70%"}
              variant={send ? "loading" : "normal"}
              type="submit"
            >
              Verify Code
            </ButtonPrimary>

            <Anchor onClick={() => handleReSend()}>Resend Code</Anchor>

            <Small>
              If the code is not correct, your user will be deleted from the
              database and you will need to register again.{" "}
            </Small>
          </FlexDir>
        </Form>
      </FlexDir>
    </>
  );
};
