//<!--IMP                     Libraries                            -->
import L from "leaflet";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Navigate, useNavigate } from "react-router-dom";

//<!--IMP                     Components                            -->
import {
  ButtonPrimary,
  FlexDir,
  Form,
  LabelAndInput,
  RadioInput,
} from "../../components/StyleComponents";
import { SelectAndOptions } from "../../components/StyleComponents/Select/SelectAndOptions";
import { UploadFile } from "../../components";

//<!--IMP                     Services                            -->
import { createPost } from "../../services/post.service";

//<!--IMP                     Data                            -->
import { postcodes } from "../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes";
import { useErrorCreatePost } from "../../hooks/useErrorCreatePost";
import { postData } from "../../data/Posts.data";
import { useAuth } from "../../context/authContext";
import { useUserVerify } from "../../hooks/useUserVerify";
import { useCanUserPost } from "../../hooks/useCanUserPost";
import { myIcon } from "../../utils/myIcon";


//<!--IMP                     Component                            -->
export const CreatePost = () => {
  const isMobile = window.innerWidth < 1050 ? true : false;

  //<!--sec                     Estados                         -->
  const [send, setSend] = useState(null);
  const [res, setRes] = useState({});
  const [createdPostSuccesfully, setCreatedPostSuccesfully] = useState(false);
  const { register, handleSubmit } = useForm();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  //estos estados son para que se rendericen condicionalmente elementos
  const [postType, setPostType] = useState("");
  const [publicLocation, setPublicLocation] = useState("Andalucia");
  const [province, setProvince] = useState("Almería");
  const [postcode, setPostcode] = useState("04001");

  //estos estados son para re-renderizar el componente si cambia la referencia
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  //<!--sec                     Funciones pagina                         -->
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;
    if (inputFile.length != 0) {
      //- !=0 -- hay una imagen en el form

      const customFormData = {
        ...formData,
        publicLocation: publicLocation,
        province: province,
        postcode: postcode,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await createPost(customFormData));
      setSend(false);
    } else {
      // no hay imagen
      const customFormData = {
        publicLocation: publicLocation,
        province: province,
        postcode: postcode,
        ...formData,
      };

      setSend(true);
      setRes(await createPost(customFormData));
      setSend(false);
    }
  };

  //<!--sec                     UseEffect(gestion errores)                         -->

  useEffect(() => {
    // console.log(postType);
    // console.log(publicLocation);
    // console.log(postcode);
    // console.log(province);
  }, [postType, postcode, province, publicLocation]);

  useEffect(() => {
    useErrorCreatePost(res, setRes, setCreatedPostSuccesfully, navigate);
  }, [res]);

  useEffect(() => {
    useUserVerify(user, logout, navigate);
    useCanUserPost(user, navigate);
  }, []);

  //   if (createdPostSuccesfully) {
  //     return <Navigate to={`/postFinds/${id}` }/>;
  //  }

  //----------------------USE EFFECT MAPA--------------------------
  useEffect(() => {
    const createMap = () => {
      if (
        publicLocation &&
        province &&
        postcode &&
        postcodes[publicLocation] &&
        postcodes[publicLocation][province] &&
        postcodes[publicLocation][province][postcode]
      ) {
        //solo si existen todos los datos que necesitamos!!
        if (!mapRef.current) {
          //si NO HAY un mapa creado (mapRef.current se dirige al estado ACTUAL de mapRef),
          //solo si es null entramos en esta primera clausula
          //vamos a inicializar una instancia de leaflet.map en el div con el id 'map'. Vamos a meterle un
          //centro, que son las coordenadas latitud y longitud del codigo postal seleccionado
          const map = L.map("map", {
            center: [
              parseFloat(
                postcodes[publicLocation][province][postcode].latitude
              ),
              parseFloat(
                postcodes[publicLocation][province][postcode].longitude
              ),
            ],
            zoom: 15,
          });
          //esto es solamente la atribucion a leaflet, gracias leaflet <3
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
          }).addTo(map);

          // guardamos la instancia del mapa en el current mapRef, para poder juzgar despues si hay que crear
          //una nueva instancia o solo modificar el mapa que ya hay
          mapRef.current = map;

          // este es el puntero lindo azulin que hay en el mapa. Decidi ponerlo porque hay veces que los codigos
          //postales estan tan cerca que el mapa no cambia de posicion. Con esto, al menos cambia el puntero.
          //se le asignan las coordenadas del codigo postal y se anade al mapa (addTo(map))
          //Luego al igual que con el mapa, lo guardamos como primera instancia de markerRef
          const marker = L.marker([
            parseFloat(postcodes[publicLocation][province][postcode].latitude),
            parseFloat(postcodes[publicLocation][province][postcode].longitude),
          ], {icon: myIcon}).addTo(map);
          markerRef.current = marker;
        } else {
          // esto se hace si SI hay mapRef.current, que es settear la vista, es decir, actualizar la vista del mapa
          mapRef.current.setView(
            [
              parseFloat(
                postcodes[publicLocation][province][postcode].latitude
              ),
              parseFloat(
                postcodes[publicLocation][province][postcode].longitude
              ),
            ],
            15
          );

          //y se actualiza el markerRef si en efecto hay markerRef. Lo que hace es un metodo de set lat(itude) y
          // LoNGitude.
          if (markerRef.current) {
            markerRef.current.setLatLng([
              parseFloat(
                postcodes[publicLocation][province][postcode].latitude
              ),
              parseFloat(
                postcodes[publicLocation][province][postcode].longitude
              ),
            ]);
          }
        }
      }
    };

    createMap();
    //y al final de todo llamamos a la funcion que hace todo esto, y tiene dependencias en postcode, para que se
    //actualice cada vez que cambia
  }, [postcode]);
  //---------------------------------------------------------------

  //<!--Sec                       RETURN                                                             -->
  return (
    <FlexDir direction="column">
      <Form onSubmit={handleSubmit(formSubmit)} width="90%">
        <FlexDir direction={"column"} gap={"2rem"}>
          <LabelAndInput>
            <label htmlFor="title">Post title</label>
            <input
              minLength={10}
              maxLength={55}
              id="title"
              name="title"
              placeholder="Looking for..."
              {...register("title", {
                required: true,
                minLength: 10,
                maxLength: 55,
              })}
            />
          </LabelAndInput>

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="postType">
              Are you looking for a flatmate or are you looking for a room?
            </label>
            <RadioInput minW="calc(100% / 1.4)">
              <input
                type="radio"
                name="postType"
                id="RoomSeeker"
                value="RoomSeeker"
                onInput={(e) => {
                  // console.log("soy target", e.target.value);
                  //este set timeout y el del siguiente radio es porque leaflet (la libreria de mapas), no muestra
                  //bien el mapa por el hidden y el renderizado condicional. El rpoblema de raiz se genera en que
                  //el div que contiene el id de map para que leaflet renderice ahi su mapa tiene que aparecer en la pagina
                  //desde el principio, porque si no, no lo encuentra. Podia probablemente haber componetizado el create map
                  //y haberlo llamado en una funcion solo cuando el estado se settease a x o cualquier cosa, pero ya tenia
                  //toda la estructura hecha de esta manera. Tratare de implementarlo si tenemos tiempo.
                  //y bueno, tenia problemas tambien con los select, porque si un usuario dejaba por defecto la provincia o
                  //el codigo postal, no se setteaba el estado a esa provincia o codigo postal, porque no se detecta como un
                  //on Input ni onChange, es solo un renderizado condicional, por lo tanto, no se renderizaba el resto de selects
                  //que dependian de los valores anteriores.
                  //La libreria no carga bien el mapa si el div con id map no esta visible o renderizado desde el principio,
                  //pero con el resize lo carga bien
                  setTimeout(() => {
                    window.dispatchEvent(new Event("resize"));
                  }, 500);
                  setPostType(e.target.value);
                }}
                {...register("type", { required: true })}
              />
              <label htmlFor="RoomSeeker">
                {isMobile ? "Room" : "I am looking for a room."}
              </label>
              <input
                type="radio"
                name="postType"
                id="RoommateSeeker"
                value="RoommateSeeker"
                onInput={(e) => {
                  setTimeout(() => {
                    window.dispatchEvent(new Event("resize"));
                  }, 500);
                  // console.log("soy target", e.target.value);
                  setPostType(e.target.value);
                }}
                {...register("type", { required: true })}
              />
              <label htmlFor="RoommateSeeker">
                {" "}
                {isMobile ? "Roommate" : "I am looking for a roommate."}
              </label>
            </RadioInput>
          </LabelAndInput>

          {postType != "" && (
            <>
              <LabelAndInput>
                <label htmlFor="text">
                  Show us a bit of who you are, and who you are looking for!
                </label>
                <textarea
                  minLength={100}
                  maxLength={1000}
                  id="text"
                  name="text"
                  style={{ width: "100%" }}
                  placeholder="Hi, we are a group of four searching for a flatmate..."
                  {...register("text", {
                    required: true,
                    minLength: 50,
                    maxLength: 1000,
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
                    value="true"
                    {...register("deposit", { required: true })}
                  />
                  <label htmlFor="Yes">Yes.</label>
                  <input
                    type="radio"
                    name="deposit"
                    id="No"
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
                  defaultValue={0}
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
                  defaultValue="18-25"
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
                  What gender are you looking for in your roommate?
                </label>
                <RadioInput minW="calc(100% / 2.2)">
                  <input
                    type="radio"
                    name="preferredGender"
                    id="female"
                    value="female"
                    {...register("preferredGender", { required: true })}
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="preferredGender"
                    id="male"
                    value="male"
                    {...register("preferredGender", { required: true })}
                  />
                  <label htmlFor="male">Male</label>

                  <input
                    type="radio"
                    name="preferredGender"
                    id="irrelevant"
                    value="irrelevant"
                    {...register("preferredGender", { required: true })}
                  />
                  <label htmlFor="irrelevant">Irrelevant</label>
                </RadioInput>
              </LabelAndInput>

              <SelectAndOptions>
                <label htmlFor="publicLocation">
                  {postType == "RoommateSeeker"
                    ? "Community where the property is located."
                    : "Community you are interested in."}
                </label>
                <select
                  name="publicLocation"
                  id="publicLocation"
                  defaultValue={publicLocation}
                  onInput={(e) => {
                    const selectedPublicLocation = e.target.value;
                    setPublicLocation(selectedPublicLocation);
                    // Set province and postcode based on the first key inside their respective sections
                    const firstProvince = Object.keys(
                      postcodes[selectedPublicLocation]
                    )[0];
                    setProvince(firstProvince);
                    const firstPostcode = Object.keys(
                      postcodes[selectedPublicLocation][firstProvince]
                    )[0];
                    setPostcode(firstPostcode);
                  }}
                  required
                >
                  <optgroup label="Community">
                    {Object.keys(postcodes)
                      .sort((a, b) => a.localeCompare(b))
                      .map((ccaa) => (
                        <option key={ccaa} value={ccaa}>
                          {ccaa}
                        </option>
                      ))}
                  </optgroup>
                </select>
              </SelectAndOptions>

              <SelectAndOptions>
                <label htmlFor="province">
                  {postType == "RoommateSeeker"
                    ? "Province where the property is located."
                    : "Province you are interested in."}
                </label>
                <select
                  name="province"
                  id="province"
                  onInput={(e) => {
                    let selectedProvince = e.target.value;
                    setProvince(selectedProvince);
                    let firstPostcode = Object.keys(
                      postcodes[publicLocation][selectedProvince]
                    )[0];
                    setPostcode(firstPostcode);
                  }}
                  required
                >
                  {Object.keys(postcodes[publicLocation])
                    .sort((a, b) => a.localeCompare(b))
                    .map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                </select>
              </SelectAndOptions>

              <>
                <SelectAndOptions>
                  <label htmlFor="postcode">
                    {postType == "RoommateSeeker"
                      ? "Postcode the property belongs to."
                      : "Postcode where you would like to live."}
                  </label>
                  <select
                    name="postcode"
                    id="postcode"
                    onInput={(e) => setPostcode(e.target.value)}
                    required
                  >
                    {Object.entries(postcodes[publicLocation][province])
                      .sort((a, b) => a - b)
                      .map(([postcode]) => (
                        <option key={postcode} value={postcode}>
                          {postcode}
                        </option>
                      ))}
                  </select>
                </SelectAndOptions>
              </>
            </>
          )}
          <div
            id="map"
            style={{
              width: "60%",
              margin: "4px",
              height: "50vh",
              display: postType == "" ? "none" : "block",
            }}
          ></div>

          <UploadFile />
          <ButtonPrimary type="submit" disabled={send}>
            {send ? "Loading..." : "Upload Post"}
          </ButtonPrimary>
        </FlexDir>
      </Form>
    </FlexDir>
  );
};
