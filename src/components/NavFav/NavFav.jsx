import { ButtonPrimary } from "../StyleComponents";

export const NavFav = ({ setFav }) => {
  return (
    <nav >
     
      <ButtonPrimary onClick={() => {setFav("savedRooms")
   }}>Rooms</ButtonPrimary>



      <ButtonPrimary onClick={() => {
        setFav("Posts") 
       }}>Posts</ButtonPrimary>





    </nav>
  );
};
