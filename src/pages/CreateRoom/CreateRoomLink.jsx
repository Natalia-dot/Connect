//<!--IMP                     Libraries                            -->
import L from "leaflet";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";

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
import { createRoom } from "../../services/room.service";

//<!--IMP                     Data                            -->
import { roomData } from "../../data/Rooms.data";
import { useErrorCreateRoom } from "../../hooks/useErrorCreateRoom";
import { postcodes } from "../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes";
import { useAuth } from "../../context/authContext";
import { useUserVerify } from "../../hooks/useUserVerify";
import { useCanUserPost } from "../../hooks/useCanUserPost";

var icon = L.icon({
  iconUrl: 'map-marker-512.png',

  iconSize:     [38, 95], // size of the icon
});

//<!--IMP                     Component                            -->
export const CreateRoomLink = () => {

  const isMobile = window.innerWidth < 1090 ? true : false 

  //<!--sec                     Estados                         -->
  const [send, setSend] = useState(null);
  const [res, setRes] = useState({});
  const [createdRoomSuccesfully, setCreatedRoomSuccesfully] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { postId } = useParams()


  //estos estados son para que se rendericen condicionalmente elementos
  const [roomType, setRoomType] = useState("Apartment");
  const [province, setProvince] = useState("Almería");
  const [postcode, setPostcode] = useState("04001");
  const [publicLocation, setPublicLocation] = useState("Andalucia");
  const [id, setId] = useState(null);

  //estos estados son para re-renderizar el componente si cambia la referencia
  const mapRef = useRef(null);
  const markerRef = useRef(null);




  //<!--sec                     Funciones pagina                         -->
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;
    // console.log("formData en el componente", formData);
    // console.log("inputFile en el componente", inputFile);
    if (inputFile.length != 0) {
        let customFormData = {
          ...formData,
          publicLocation: publicLocation,
          province: province,
          postcode: postcode,
          image: inputFile,
          post: postId
        };
        setSend(true);
        setRes(await createRoom(customFormData));
        setSend(false);

      for (let i = 0; i < inputFile.length; i++) {
        // customFormData = {...customFormData, ['image'] : inputFile[i]} esto esta delibreadamente comentado!!
      }

      // console.log("custom form data con imagen", customFormData);
    } else {
      // no hay imagen
      const customFormData = {
        ...formData,
        publicLocation: publicLocation,
        province: province,
        postcode: postcode,
        post: postId
      };

      setSend(true);
      setRes(await createRoom(customFormData));
      setSend(false);
    }
  };

  //<!--sec                     UseEffect(gestion errores)                         -->

  useEffect(() => {
    // console.log(roomType);
    // console.log(publicLocation);
    // console.log(postcode);
    // console.log(province);
  }, [roomType, postcode, province, publicLocation]);

  useEffect(() => {
    useErrorCreateRoom(res, setRes, setCreatedRoomSuccesfully, setId, logout, navigate);
  }, [res]);

  useEffect(() => {
    useUserVerify(user, logout, navigate)
    useCanUserPost(user, navigate)
    }, [])



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
          }, {icon: icon}).addTo(map);

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
          ], {icon: icon}).addTo(map);
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

  if (createdRoomSuccesfully) {
    return <Navigate to={`/roomFinds/${id}` }/>;
 }

  //<!--Sec                       RETURN                                                             -->
  return (
    <FlexDir direction="column">
      <Form onSubmit={handleSubmit(formSubmit)} width="90%">
        <FlexDir direction={"column"} gap={"2rem"}>
          <LabelAndInput>
            <label htmlFor="title">Room title</label>
            <input
              id="title"
              name="title"
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
              placeholder="Lovely flat in the middle of Chamartin, near the train station, and with a shopping mall 200m away. The flat has full commodities and fees ar..."
              {...register("description", {
                required: true,
                minLength: 50,
                maxLength: 300,
              })}
            />
          </LabelAndInput>

          <SelectAndOptions>
            <label htmlFor="type">Location type.</label>
            <select
              name="type"
              id="type"
              defaultValue="Apartment"
              onInput={(e) => {
                //no se puede hacer un onChange, no funciona
                // console.log("soy target", e.target.value);
                setRoomType(e.target.value);
              }}
              {...register("type", { required: true })}
            >
              {roomData?.type?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </SelectAndOptions>

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="available">
              Is the {roomType.toLowerCase()} available right now?
            </label>
            <RadioInput minW="calc(100% / 1.4)">
              <input
                defaultChecked
                type="radio"
                name="available"
                id="Yes"
                value="true"
                {...register("available", { required: true })}
              />
              <label htmlFor="Yes">{isMobile ? "Yes" : "Yes, it is ready for rental."}</label>
              <input
                type="radio"
                name="available"
                id="No"
                value="false"
                {...register("available", { required: true })}
              />
              <label htmlFor="No">
              {isMobile ? "No" : `No, this ${roomType.toLowerCase()} is occupied.`}
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
              defaultValue={"100"}
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
                {...register("bathrooms", { required: true })}
              />
              <label htmlFor="0">0</label>

              <input
                type="radio"
                name="bathrooms"
                id="1"
                value="1"
                {...register("bathrooms", { required: true })}
              />
              <label htmlFor="1">1</label>

              <input
                type="radio"
                name="bathrooms"
                id="2"
                value="2"
                {...register("bathrooms", { required: true })}
              />
              <label htmlFor="2">2</label>

              <input
                type="radio"
                name="bathrooms"
                id="3+"
                value="3+"
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
                {...register("petsAllowed", { required: true })}
              />
              <label htmlFor="YesPetsAllowed">{isMobile ? "Yes" : "Yes, pets are allowed!"}</label>
              <input
                type="radio"
                name="petsAllowed"
                id="NoPetsAllowed"
                value="false"
                {...register("petsAllowed", { required: true })}
              />
              <label htmlFor="NoPetsAllowed">{isMobile  ? "No" : "No, pets are not allowed."}</label>
            </RadioInput>
          </LabelAndInput>

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="exterior">
              Does the {roomType.toLowerCase()} have a balcony, patio, or any
              other outside structure?
            </label>
            <RadioInput minW="calc(100% / 1.4)">
              <input
                type="radio"
                name="exterior"
                id="YesOutside"
                value="true"
                {...register("exterior", { required: true })}
              />
              <label htmlFor="YesOutside"> {isMobile ? "Yes" : "Yes, it has one."}</label>
              <input
                type="radio"
                name="exterior"
                id="NoOutside"
                value="false"
                {...register("exterior", { required: true })}
              />
              <label htmlFor="NoOutside">{isMobile  ? "Yes" : "No, it does not have it."}</label>
            </RadioInput>
          </LabelAndInput>

          <FlexDir direction="column" width={"100%"}>
          <label>What commodities does the house offer?</label>
          <FlexDir mediaqueryDirMobile="column">
            <LabelAndInput gap={"4px"} width={"100%"} wrap="wrap">
              {roomData?.commoditiesHome?.slice(0,11).map((item) => (
                <div
                  key={item}
                  className="inputContainer"
                  style={{ width: "300px" }}
                >
                  <label className="inputLabel inputLabel--checkbox">
                    {item}
                    <input
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
            <LabelAndInput gap={"4px"} width={"100%"} wrap="wrap">
              
              {roomData?.commoditiesHome?.slice(11,21).map((item) => (
                <div
                  key={item}
                  className="inputContainer"
                  style={{ width: "300px" }}
                >
                  <label className="inputLabel inputLabel--checkbox">
                    {item}
                    <input
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
          </FlexDir>

          <FlexDir >
         
         
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
                      {...register("commoditiesRoom")}
                    />
                    <div className="div"></div>
                  </label>
                </div>
              ))}
            </LabelAndInput>
           
          </FlexDir>

          <SelectAndOptions>
            <label htmlFor="publicLocation">
              Community where the {roomType.toLowerCase()} is located.
            </label>
            <select
              name="publicLocation"
              id="publicLocation"
              defaultValue={publicLocation}
              onInput={(e) => {
                const selectedPublicLocation = e.target.value;
                setPublicLocation(selectedPublicLocation);
                // Set province and postcode based on the first key inside their respective sections
                const firstProvince = Object.keys(postcodes[selectedPublicLocation])[0];
                setProvince(firstProvince);
                const firstPostcode = Object.keys(postcodes[selectedPublicLocation][firstProvince])[0];
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
          {publicLocation != "" && (
            <>
            <SelectAndOptions>
              <label htmlFor="province">
                Province where the {roomType.toLowerCase()} is located.
              </label>
              <select
                name="province"
                id="province"
                defaultValue={province}
                onInput={(e) => {
                  let selectedProvince = e.target.value;
                setProvince(selectedProvince);
                let firstPostcode = Object.keys(postcodes[publicLocation][selectedProvince])[0];
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
            </>
          )}
          {province != "" && (
            <>
              <SelectAndOptions>
                <label htmlFor="postcode">
                  Community where the {roomType.toLowerCase()} is located.
                </label>
                <select
                  name="postcode"
                  id="postcode"
                  onInput={(e) => setPostcode(e.target.value)}
                  required
                  defaultValue={postcode}
                >
                  {Object.entries(postcodes[publicLocation][province])
                    .sort((a, b) => a - b)
                    .map(([postcode]) => (
                      //postcode esta entre corchetes porque es destructuring de un array. Object.entries te da una
                      //serie de arrays con estructura [clave: valor], y al hacer destructuring de esos pares,
                      //sobreentiende que si solo se pone un elemento, sera del primero
                      <option key={postcode} value={postcode}>
                        {postcode}
                      </option>
                    ))}
                </select>
                {postcode != "" && (
                  <div
                    id="map"
                    style={{ width: "100%", margin: "4px", height: "50vh" }}
                  ></div>
                )}
              </SelectAndOptions>
            </>
          )}

          <UploadFile multipleUpload={true} />
          <ButtonPrimary  variant="normal" type="submit" disabled={send}>
            {send ? "Loading..." : "Upload Room"}
          </ButtonPrimary>
        </FlexDir>
      </Form>
    </FlexDir>
  );
};
