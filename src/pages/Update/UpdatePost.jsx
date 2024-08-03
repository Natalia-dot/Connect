//<!--IMP                     Libraries                            -->

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

//<!--IMP                     Components                            -->
import {
  FlexDir,
  Form,
  LabelAndInput,
  RadioInput,
} from "../../components/StyleComponents";
import { SelectAndOptions } from "../../components/StyleComponents/Select/SelectAndOptions";
import { UploadFile } from "../../components";

//<!--IMP                     Services                            -->
import { getPostById, updatePost } from "../../services/post.service";

//<!--IMP                     Data                            -->
import { postData } from "../../data/Posts.data";

//<!--IMP                     Hooks                            -->
import { useAuth } from "../../context/authContext";
import { useUserVerify } from "../../hooks/useUserVerify";
import { useCanUserPost } from "../../hooks/useCanUserPost";
import { getRoomById } from "../../services/room.service";
import { useErrorUpdatePost } from "../../hooks/useErrorUpdatePost";
import { useFetchDataUpdate } from "../../hooks/useFetchDataUpdate";

//<!--IMP                     Component                            -->
export const UpdatePost = () => {
  const { register, handleSubmit } = useForm(); //formularios
  const { logout, user } = useAuth(); // contexto
  const navigate = useNavigate(); //navegacion en gestion de errores
  const { id } = useParams();
  const route = useLocation(); //para checkear si hace fetch de room o post en is author

  //<!--sec                     Estados                         -->
  const [send, setSend] = useState(null); //para los botones
  const [res, setRes] = useState({}); //para almacenar la respuesta y gestion de errores

  //este useFetchDataUpdate es un hook que va a comprobar si el usuario es dueno del post primero. Si no lo es,
  //te redirige al post en cuestion. Si lo eres, te manda a la interfaz de actualizacion de post, con los datos
  //rellenados como los tenia de antes. De ahi se pueden actualizar la mayoria de campos, menos los de ubicacion,
  //porque ya me diras tu si le han salido patas al apartamento. Es lo mismo que el useAuth, donde nos devuelve
  //algi el hook.
  const { post, postType } = useFetchDataUpdate(id, route, user, navigate);

  //<!--sec                     Funciones pagina                         -->
  const formSubmit = async (formData) => {
    // console.log("formData", formData)
    // console.log("typeOf", typeof(formData.price), typeof(formData.depositPrice))
    const inputFile = document.getElementById("file-upload").files;
    if (inputFile.length != 0) {
      //- !=0 -- hay una imagen en el form
      const customFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await updatePost(id, customFormData));
      setSend(false);
    } else {
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await updatePost(id, customFormData));
      setSend(false);
    }
  };

  //<!--sec                     UseEffect(gestion errores)                         -->
  useEffect(() => {
    useErrorUpdatePost(res, setRes, navigate);
  }, [res]);

  useEffect(() => {
    useUserVerify(user, logout, navigate);
    useCanUserPost(user, navigate);
  }, []);

  // console.log(post)
  // console.log(postType)

  //<!--Sec                       RETURN                                                             -->
  return (
    <>
      {post && (
        <FlexDir direction="column">
          <Form onSubmit={handleSubmit(formSubmit)} width="90%">
            <FlexDir direction={"column"} gap={"2rem"}>
              <LabelAndInput>
                <label htmlFor="title">Post title</label>
                <input
                  id="title"
                  name="title"
                  placeholder="Looking for..."
                  defaultValue={post.title}
                  {...register("title", { required: true, maxLength: 50 })}
                />
              </LabelAndInput>

              {postType != "" && (
                <>
                  <LabelAndInput>
                    <label htmlFor="text">
                      Show us a bit of who you are, and who you are looking for!
                    </label>
                    <textarea
                      minLength={100}
                      id="text"
                      name="text"
                      defaultValue={post.text}
                      style={{ width: "100%" }}
                      placeholder="Hi, we are a group of four searching for a flatmate..."
                      {...register("text", {
                        required: true,
                        minLength: 50,
                        maxLength: 600,
                      })}
                    />
                  </LabelAndInput>

                  <LabelAndInput alignItems={"center"}>
                    <label htmlFor="deposit">
                      {postType == "RoommateSeeker"
                        ? "Are you asking for a deposit?"
                        : "Are you willing to pay a deposit?"}
                    </label>
                    <RadioInput minW="calc(100% / 1.4)">
                      <input
                        type="radio"
                        name="deposit"
                        id="Yes"
                        defaultChecked={post.deposit == true ? true : false}
                        value="true"
                        {...register("deposit", { required: true })}
                      />
                      <label htmlFor="Yes">Yes.</label>
                      <input
                        type="radio"
                        name="deposit"
                        id="No"
                        defaultChecked={post.deposit == false ? true : false}
                        value="false"
                        {...register("deposit", { required: true })}
                      />
                      <label htmlFor="No">No.</label>
                    </RadioInput>
                  </LabelAndInput>

                  <LabelAndInput>
                    <label htmlFor="depositPrice">
                      {postType == "RoommateSeeker"
                        ? "How much is the deposit?"
                        : "How much can you pay for a deposit?"}
                    </label>
                    <input
                      type="number"
                      id="depositPrice"
                      name="depositPrice"
                      defaultValue={post.depositPrice}
                      {...register("depositPrice", { required: true })}
                    />
                  </LabelAndInput>

                  <LabelAndInput>
                    <label htmlFor="price">
                      {postType == "RoommateSeeker"
                        ? "How much is the monthly fee?"
                        : "How much can you pay for the monthly fee?"}
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      defaultValue={post.price}
                      {...register("price", { required: true })}
                    />
                  </LabelAndInput>

                  <SelectAndOptions>
                    <label htmlFor="preferredAge">
                      What age range are you looking for in your roommates?
                    </label>
                    <select
                      name="preferredAge"
                      id="preferredAge"
                      defaultValue={post.preferredAge}
                      {...register("preferredAge", { required: true })}
                    >
                      {postData?.preferredAge?.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </SelectAndOptions>

                  <LabelAndInput alignItems={"center"}>
                    <label htmlFor="preferredGender">
                      {postType == "RoommateSeeker"
                        ? "What gender are you looking for in your roommate?"
                        : "What gender do you identify as?"}
                    </label>
                    <RadioInput minW="calc(100% / 2.2)">
                      <input
                        type="radio"
                        name="preferredGender"
                        id="female"
                        value="female"
                        defaultChecked={
                          post.preferredGender == "female" ? true : false
                        }
                        {...register("preferredGender", { required: true })}
                      />
                      <label htmlFor="female">Female</label>
                      <input
                        type="radio"
                        name="preferredGender"
                        id="male"
                        value="male"
                        defaultChecked={
                          post.preferredGender == "male" ? true : false
                        }
                        {...register("preferredGender", { required: true })}
                      />
                      <label htmlFor="male">Male</label>

                      <input
                        type="radio"
                        name="preferredGender"
                        id="irrelevant"
                        value="irrelevant"
                        defaultChecked={
                          post.preferredGender == "irrelevant" ? true : false
                        }
                        {...register("preferredGender", { required: true })}
                      />
                      <label htmlFor="irrelevant">
                        {postType == "RoommateSeeker"
                          ? "Irrelevant"
                          : "None of those"}
                      </label>
                    </RadioInput>
                  </LabelAndInput>
                </>
              )}

              <UploadFile />
              <button type="submit" disabled={send}>
                {send ? "Loading..." : "Upload Room"}
              </button>
            </FlexDir>
          </Form>
        </FlexDir>
      )}
    </>
  );
};
