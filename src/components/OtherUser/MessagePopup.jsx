import { useNavigate } from "react-router-dom";
import { newMessageChat } from "../../services/chats.service";
import { ButtonPrimary, H1Custom } from "../StyleComponents";
import { MessagePopupScreen } from "../StyleComponents/MessagePopup/MessagePopupScreen";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const MessagePopup = ({ id, setPopupActive, isMobile }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);

  const submitComment = async (formData) => {
    setSent(true)
    // console.log(formData);
    let customFormData = {
      textComment: formData.textComment,
      otherUser: id,
    };
    // console.log(customFormData);

    const response = await newMessageChat(customFormData);
    if (response.status == 200) {
        setSent(false)
      navigate("/messages");
    }
  };

  return (
    <MessagePopupScreen isMobile={isMobile}>
      <div id="uniqueDiv">
        <h1 style={{justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: '22px'}}>Send a message</h1>

        <form onSubmit={handleSubmit(submitComment)}>
          <textarea {...register("textComment")} />
          <ButtonPrimary type="submit" width="70%" variant="normal" >
            {sent ? "Loading" : "Sent Comment"} 
          </ButtonPrimary>
        </form>
        <ButtonPrimary
          variant="delete"
          width="30%"
          onClick={() => setPopupActive(false)}
        >
          CANCEL
        </ButtonPrimary>
      </div>
    </MessagePopupScreen>
  );
};
