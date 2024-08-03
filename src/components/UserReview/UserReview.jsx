import { Rating } from "primereact/rating";
import { useEffect, useState } from "react";
import {
  createComment,
  createUserComment,
} from "../../services/comment.service";
import { useNavigate, useParams } from "react-router-dom";
import {
  ButtonPrimary,
  FlexDir,
  Form,
  LabelAndInput,
} from "../StyleComponents";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { H3PerfectFit } from "../StyleComponents/Text/H3/H3PerfectFit";

export const UserReview = ({ action, userData }) => {
  const { register, handleSubmit } = useForm();
  const [page, setPage] = useState("");
  const [res, setRes] = useState(false);
  const [send, setSend] = useState(false);
  const [valueStar, setValueStar] = useState(0);
  // const { id } = useParams();
  const navigate = useNavigate();

  const id = userData?._id;

  const formSubmit = async (formData) => {
    const customFormData = {
      ...formData,
      rating: valueStar,
    };
    // console.log("Custom Form Data:", customFormData);
    if (action == "usercomment") {
      setRes(await createUserComment(id, customFormData));
    } else if (action == "roomcomment") {
      setRes(await createComment(id, customFormData));
    }
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
        window.location.reload());
  };

  useEffect(() => {}, [send]);
  return (
    <FlexDir
      direction="column"
      width="100%"
      height="100%"
      justifyContent="center"
    >
      <Form onSubmit={handleSubmit(formSubmit)} width="100%" height="100%">
        <H3PerfectFit>Add a Review</H3PerfectFit>
        <FlexDir
          alignItems="center"
          direction="column"
          width="100%"
          justifyContent="center"
          height="100%"
        >
          <LabelAndInput alignItems="center" gap="20px">
            <Rating
              className="starsss"
              value={valueStar}
              onChange={(e) => setValueStar(parseInt(e.target.value))}
              cancel={false}
            />

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
          </LabelAndInput>
          <ButtonPrimary variant="normal" type="submit" disabled={send}>
            {send ? "Loading..." : "Send comment"}
          </ButtonPrimary>
        </FlexDir>
      </Form>
    </FlexDir>
  );
};
