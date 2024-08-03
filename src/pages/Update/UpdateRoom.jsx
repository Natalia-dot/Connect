//<!--IMP                     Libraries                            -->
import L from "leaflet";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
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
import { createRoom, getRoomById, updateRoom } from "../../services/room.service";

//<!--IMP                     Data                            -->
import { roomData } from "../../data/Rooms.data";
import { useErrorCreateRoom } from "../../hooks/useErrorCreateRoom";
import { useAuth } from "../../context/authContext";
import { useUserVerify } from "../../hooks/useUserVerify";
import { useCanUserPost } from "../../hooks/useCanUserPost";
import { useIsAuthor } from "../../hooks/useIsAuthor";
import { useFetchDataUpdate } from "../../hooks/useFetchDataUpdate";

//<!--IMP                     Component                            -->
export const UpdateRoom = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { id } = useParams();
  const route = useLocation();
  //<!--sec                     Estados                         -->
  const [send, setSend] = useState(null);
  const [res, setRes] = useState({});
  const [roomType, setRoomType] = useState("");

  //<!--sec                     Hooks                       -->
  const { post } = useFetchDataUpdate(id, route, user, navigate, setRoomType);

  //<!--sec                     Funciones pagina                         -->

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;

    if (inputFile.length != 0) {
      let customFormData = {
        ...formData,
        image: inputFile,
      };

      setSend(true);
      setRes(await updateRoom(id, customFormData));
      setSend(false);
    } else {
      const customFormData = {
        ...formData,
      };
      setSend(true);
      setRes(await updateRoom(id, customFormData));
      setSend(false);
    }
  };

  //<!--sec                     UseEffect(gestion errores)                         -->

  useEffect(() => {}, [roomType]);


  useEffect(() => {
    useUserVerify(user, logout, navigate);
    useCanUserPost(user, navigate);
  }, []);

  //<!--Sec                       RETURN                                                             -->
  return (
    <>
      {post && (
        <FlexDir direction="column">
          <Form onSubmit={handleSubmit(formSubmit)} width="90%">
            <FlexDir direction={"column"} gap={"2rem"}>
              <LabelAndInput>
                <label htmlFor="title">Room title</label>
                <input
                  id="title"
                  name="title"
                  defaultValue={post.title}
                  placeholder="Spacious flat in Chamartin"
                  {...register("title", { required: true, maxLength: 50 })}
                />
              </LabelAndInput>

              <LabelAndInput>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  style={{ width: "100%" }}
                  defaultValue={post.description}
                  placeholder="Lovely flat in the middle of Chamartin, near the train station, and with a shopping mall 200m away. The flat has full commodities and fees ar..."
                  {...register("description", {
                    required: true,
                    minLength: 50,
                    maxLength: 300,
                  })}
                />
              </LabelAndInput>


              <LabelAndInput alignItems={"center"}>
                <label htmlFor="available">
                  Is the {roomType.toLowerCase()} available right now?
                </label>
                <RadioInput minW="calc(100% / 1.4)">
                  <input
                    defaultChecked={post.available == true ? true : false}
                    type="radio"
                    name="available"
                    id="Yes"
                    value="true"
                    {...register("available", { required: true })}
                  />
                  <label htmlFor="Yes">Yes, it is ready for rental.</label>
                  <input
                    defaultChecked={post.available == false ? true : false}
                    type="radio"
                    name="available"
                    id="No"
                    value="false"
                    {...register("available", { required: true })}
                  />
                  <label htmlFor="No">
                    No, this {roomType.toLowerCase()} is occupied.
                  </label>
                </RadioInput>
              </LabelAndInput>

              <LabelAndInput>
                <label htmlFor="surface">
                  {roomType} surface in square meters.
                </label>
                <input
                  type="number"
                  id="surface"
                  name="surface"
                  placeholder="150m2"
                  defaultValue={post.surface}
                  {...register("surface", { required: true })}
                />
              </LabelAndInput>

              <LabelAndInput alignItems={"center"}>
                <label htmlFor="bathrooms">
                  How many bathrooms are there in the {roomType.toLowerCase()}?
                </label>
                <RadioInput minW="calc(100% / 3)">
                  <input
                    type="radio"
                    name="bathrooms"
                    id="0"
                    value="0"
                    defaultChecked={post.bathrooms == "0" ? true : false}
                    {...register("bathrooms", { required: true })}
                  />
                  <label htmlFor="0">0</label>

                  <input
                    type="radio"
                    name="bathrooms"
                    id="1"
                    value="1"
                    defaultChecked={post.bathrooms == "1" ? true : false}
                    {...register("bathrooms", { required: true })}
                  />
                  <label htmlFor="1">1</label>

                  <input
                    type="radio"
                    name="bathrooms"
                    id="2"
                    value="2"
                    defaultChecked={post.bathrooms == "2" ? true : false}
                    {...register("bathrooms", { required: true })}
                  />
                  <label htmlFor="2">2</label>

                  <input
                    type="radio"
                    name="bathrooms"
                    id="3+"
                    value="3+"
                    defaultChecked={post.bathrooms == "3+" ? true : false}
                    {...register("bathrooms", { required: true })}
                  />
                  <label htmlFor="3+">3 +</label>
                </RadioInput>
              </LabelAndInput>

              <LabelAndInput>
                <label htmlFor="roommates">
                  How many people can the {roomType.toLowerCase()} hold?
                </label>
                <input
                  type="number"
                  id="roommates"
                  name="roommates"
                  defaultValue={post.roommates}
                  {...register("roommates", { required: true })}
                />
              </LabelAndInput>

              <LabelAndInput alignItems={"center"}>
                <label htmlFor="petsAllowed">
                  Are pets allowed in the {roomType.toLowerCase()}?
                </label>
                <RadioInput minW="calc(100% / 1.4)">
                  <input
                    type="radio"
                    name="petsAllowed"
                    id="YesPetsAllowed"
                    value="true"
                    defaultChecked={post.petsAllowed == true ? true : false}
                    {...register("petsAllowed", { required: true })}
                  />
                  <label htmlFor="YesPetsAllowed">Yes, pets are allowed!</label>
                  <input
                    type="radio"
                    name="petsAllowed"
                    id="NoPetsAllowed"
                    value="false"
                    defaultChecked={post.petsAllowed == false ? true : false}
                    {...register("petsAllowed", { required: true })}
                  />
                  <label htmlFor="NoPetsAllowed">
                    No, pets are not allowed.
                  </label>
                </RadioInput>
              </LabelAndInput>

              <LabelAndInput alignItems={"center"}>
                <label htmlFor="exterior">
                  Does the {roomType.toLowerCase()} have a balcony, patio, or
                  any other outside structure?
                </label>
                <RadioInput minW="calc(100% / 1.4)">
                  <input
                    type="radio"
                    name="exterior"
                    id="YesOutside"
                    value="true"
                    defaultChecked={post.exterior == true ? true : false}
                    {...register("exterior", { required: true })}
                  />
                  <label htmlFor="YesOutside">Yes, it has one.</label>
                  <input
                    type="radio"
                    name="exterior"
                    id="NoOutside"
                    defaultChecked={post.exterior == false ? true : false}
                    value="false"
                    {...register("exterior", { required: true })}
                  />
                  <label htmlFor="NoOutside">No, it does not have it.</label>
                </RadioInput>
              </LabelAndInput>

              <FlexDir direction="row" width={"100%"}>
                <LabelAndInput gap={"4px"} width={"100%"} wrap="wrap">
                  <label>What commodities does the house offer?</label>
                  {roomData?.commoditiesHome?.map((item) => (
                    <div
                      key={item}
                      className="inputContainer"
                      style={{ width: "300px" }}
                    >
                      <label className="inputLabel inputLabel--checkbox">
                        {item}
                        <input
                          defaultChecked={
                            post.commoditiesHome.join(", ").includes(item)
                              ? true
                              : false
                          }
                          type="checkbox"
                          name={item}
                          value={item}
                          {...register("commoditiesHome")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                  ))}
                </LabelAndInput>
              </FlexDir>

              <FlexDir>
                <LabelAndInput gap={"4px"}>
                  <label>What commodities do the rooms offer?</label>
                  {roomData?.commoditiesRoom?.map((item) => (
                    <div key={item} className="inputContainer">
                      <label className="inputLabel inputLabel--checkbox">
                        {item}
                        <input
                          type="checkbox"
                          name={item}
                          value={item}
                          defaultChecked={
                            post.commoditiesRoom.join(", ").includes(item)
                              ? true
                              : false
                          }
                          {...register("commoditiesRoom")}
                        />
                        <div className="div"></div>
                      </label>
                    </div>
                  ))}
                </LabelAndInput>
              </FlexDir>

              <UploadFile multipleUpload={true} />
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
