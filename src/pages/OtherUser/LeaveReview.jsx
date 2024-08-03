import { useEffect, useState } from "react";
import { Rating } from "primereact/rating";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createUserComment } from "../../services/comment.service";
import { MessagePopupScreen } from "../../components/StyleComponents/MessagePopup/MessagePopupScreen";
import { useForm } from "react-hook-form";
import { ButtonPrimary, FlexDir, LabelAndInput } from "../../components/StyleComponents";


export const LeaveReview = ({id, setPopupActive, isMobile}) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [res, setRes] = useState(false);
    const [send, setSend] = useState(false);
    const [valueStar, setValueStar] = useState(0);

  const formSubmit = async (formData) => {
    const customFormData = {
      ...formData,
      rating: valueStar,
    };
      setRes(await createUserComment(id, customFormData));
    setSend(true);

    res?.response?.status == 404 || res?.response?.status == 500
      ? (Swal.fire({
          icon: "error",
          title: "There has been an error sending the comment.",
          text: "Please, try again",
          showConfirmButton: false,
          timer: 1500,
        }),
        setSend(false))
      : (Swal.fire({
          icon: "success",
          title: "Comment posted successfully.",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        }),
        setSend(false),
        window.location.reload()
        ); 
  }

  useEffect(() => {
    
  }, [send]);

  return (
    <>
        <MessagePopupScreen isMobile={isMobile}>
      <div id="uniqueDiv">
        <h1 style={{justifyContent: 'center', display: 'flex', alignItems: 'center', fontSize: '22px'}}>Rate the user!</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
            <Rating className="starsss" value={valueStar} onChange={(e) => setValueStar(parseInt(e.target.value))} cancel={false} style={{margin: '1rem 0'}}/>

            <input
              type="text"
              id="review"
              name="review"
              style={{ height: "70%" }}
              {...register("textComment", {
                required: true,
                minLength: 1,
                maxLength: 300,
              })}
            />

          <ButtonPrimary variant="normal" type="submit" disabled={send}>
            {send ? "Loading..." : "Send comment"}
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
    </>
  )
}
