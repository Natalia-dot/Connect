import { useTheme } from "@emotion/react";
import { useThemeApp } from "../context/themeContext";

export const printHomeIcons = (commodity) => {
  const  {theme}  = useThemeApp()
  let src = '';

  switch (commodity) {
    case "Appliances Included":
      src = "https://cdn-icons-png.flaticon.com/128/1611/1611154.png";
      break;
    case "Living Room":
      src = "https://cdn-icons-png.flaticon.com/128/2400/2400622.png";
      break;
    case "Dining Room":
      src = "https://cdn-icons-png.flaticon.com/128/1012/1012472.png";
      break;
    case "Shower":
      src = "https://cdn-icons-png.flaticon.com/128/900/900685.png";
      break;
    case "Bathtub":
      src = "https://cdn-icons-png.flaticon.com/128/5384/5384321.png";
      break;
    case "Kitchen":
      src = "https://cdn-icons-png.flaticon.com/128/450/450166.png";
      break;
    case "Microwave":
      src = "https://cdn-icons-png.flaticon.com/128/4969/4969547.png";
      break;
    case "Heating":
      src = "https://cdn-icons-png.flaticon.com/128/289/289759.png";
      break;
    case "Air Conditioning":
      src = "https://cdn-icons-png.flaticon.com/128/1530/1530297.png";
      break;
    case "Internet Wi-Fi":
      src = "https://cdn-icons-png.flaticon.com/128/11530/11530392.png";
      break;
    case "Cable Satellite TV":
      src = "https://cdn-icons-png.flaticon.com/128/2944/2944017.png";
      break;
    case "Washer":
      src = "https://cdn-icons-png.flaticon.com/128/1010/1010385.png";
      break;
    case "Dryer":
      src = "https://cdn-icons-png.flaticon.com/128/4618/4618249.png";
      break;
    case "Garage":
      src = "https://cdn-icons-png.flaticon.com/128/10815/10815101.png";
      break;
    case "Security System":
      src = "https://cdn-icons-png.flaticon.com/128/9551/9551305.png";
      break;
    case "Balcony Patio":
      src = "https://cdn-icons-png.flaticon.com/128/82/82490.png";
      break;
    case "Garden Yard":
      src = "https://cdn-icons-png.flaticon.com/128/858/858534.png";
      break;
    case "Wheelchair Accessible":
      src = "https://cdn-icons-png.flaticon.com/128/10450/10450399.png";
      break;
    case "Elevator":
      src = "https://cdn-icons-png.flaticon.com/128/2109/2109106.png";
      break;
    case "Pet Friendly":
      src = "https://cdn-icons-png.flaticon.com/128/2447/2447825.png";
      break;
    case "Smoking Allowed":
      src = "https://cdn-icons-png.flaticon.com/128/6473/6473469.png";
      break;
    case "Pool":
      src = "https://cdn-icons-png.flaticon.com/128/2784/2784593.png";
      break;
    case "Location":
      src = "https://cdn-icons-png.flaticon.com/128/186/186250.png";
      break;
  }

  return <img src={src} alt={commodity} style={{width: "30px", margin: "0 1vw 0 0", padding: "0.25vw", backgroundColor: theme == "dark" ? "white" : "transparent", borderRadius: "5px" }}/>;
  }


//todo -------- HOME COMMODITIES ICON LINKS -----------------------------
const commoditiesHomeIcon = [
  "https://cdn-icons-png.flaticon.com/128/1611/1611154.png",
  "https://cdn-icons-png.flaticon.com/128/2400/2400622.png",
  "https://cdn-icons-png.flaticon.com/128/1012/1012472.png",
  "https://cdn-icons-png.flaticon.com/128/900/900685.png",
  "https://cdn-icons-png.flaticon.com/128/5384/5384321.png",
  "https://cdn-icons-png.flaticon.com/128/450/450166.png",
  "https://cdn-icons-png.flaticon.com/128/4969/4969547.png",
  "https://cdn-icons-png.flaticon.com/128/289/289759.png",
  "https://cdn-icons-png.flaticon.com/128/1530/1530297.png",
  "https://cdn-icons-png.flaticon.com/128/11530/11530392.png",
  "https://cdn-icons-png.flaticon.com/128/2944/2944017.png",
  "https://cdn-icons-png.flaticon.com/128/1010/1010385.png",
  "https://cdn-icons-png.flaticon.com/128/4618/4618249.png",
  "https://cdn-icons-png.flaticon.com/128/10815/10815101.png",
  "https://cdn-icons-png.flaticon.com/128/9551/9551305.png",
  "https://cdn-icons-png.flaticon.com/128/82/82490.png",
  "https://cdn-icons-png.flaticon.com/128/858/858534.png",
  "https://cdn-icons-png.flaticon.com/128/10450/10450399.png",
  "https://cdn-icons-png.flaticon.com/128/2109/2109106.png",
  "https://cdn-icons-png.flaticon.com/128/2447/2447825.png",
  "https://cdn-icons-png.flaticon.com/128/6473/6473469.png",
  "https://cdn-icons-png.flaticon.com/128/2784/2784593.png",
]

export const printRoomIcons = (commodity) => {
  const  {theme}  = useThemeApp()
  let src = '';

  switch (commodity) {
    case "Furnished":
      src = "https://cdn-icons-png.flaticon.com/128/4133/4133821.png";
      break;
    case "Single Bed":
      src = "https://cdn-icons-png.flaticon.com/128/3351/3351069.png";
      break;
    case "Double Bed":
      src = "https://cdn-icons-png.flaticon.com/128/864/864595.png";
      break;
    case "Private Bathroom":
      src = "https://cdn-icons-png.flaticon.com/128/900/900688.png";
      break;
    case "Balcony":
      src = "https://cdn-icons-png.flaticon.com/128/82/82490.png";
      break;
    case "Natural Light":
      src = "https://cdn-icons-png.flaticon.com/128/2775/2775417.png";
      break;
    case "Interior":
      src = "https://cdn-icons-png.flaticon.com/128/7694/7694374.png";
      break;
    case "Working Space":
      src = "https://cdn-icons-png.flaticon.com/128/7829/7829469.png";
      break;
    case "Private Room":
      src = "https://cdn-icons-png.flaticon.com/128/263/263115.png";
      break;
    case "Surface":
      src = "https://cdn-icons-png.flaticon.com/128/5442/5442154.png";
      break;
  }

  return <img src={src} alt={commodity} style={{width: "30px", margin: "0 1vw 0 0", padding: "0.25vw", backgroundColor: theme == "dark" ? "white" : "transparent", borderRadius: "5px" }}/>;
}

const commoditiesRoomIcon = [
  "https://cdn-icons-png.flaticon.com/128/4133/4133821.png",
  "https://cdn-icons-png.flaticon.com/128/3351/3351069.png",
  "https://cdn-icons-png.flaticon.com/128/864/864595.png",
  "https://cdn-icons-png.flaticon.com/128/900/900688.png",
  "https://cdn-icons-png.flaticon.com/128/82/82490.png",
  "https://cdn-icons-png.flaticon.com/128/2775/2775417.png",
  "https://cdn-icons-png.flaticon.com/128/7829/7829469.png",
]

export const printIconsUser = (commodity) => {
  const { theme } = useTheme();
  let src = ""

  switch (commodity) {
    case "Age":
      src = "https://cdn-icons-png.flaticon.com/128/5670/5670791.png";
      break;
    case "male":
      src = "https://cdn-icons-png.flaticon.com/128/1895/1895199.png";
      break;
    case "female":
      src = "https://cdn-icons-png.flaticon.com/128/4086/4086305.png";
      break;
    case "Interest":
      src = "https://cdn-icons-png.flaticon.com/128/3162/3162297.png";
      break;
    case "Check":
      src = "https://cdn-icons-png.flaticon.com/128/9709/9709605.png";
      break;
  }

  return <img src={src} alt={commodity} style={{width: "25px", margin: "0 1vw 0 0", padding: "0.15vw", backgroundColor: theme == "dark" ? "white" : "transparent", borderRadius: "5px" }}/>;

}