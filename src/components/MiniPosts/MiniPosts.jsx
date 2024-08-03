import { Link, useNavigate } from "react-router-dom"
import { MiniPostStyle } from "./MiniPosts.element"
import { AddElement, FlexDir, FlexEnd, SaveElement, SavedElement } from "../StyleComponents"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/authContext"


export const MiniPosts = ({id, title, text, image, province, price, author, addToSaved, userLikedPosts, updatedLikes}) => {
const path = `/feed/${id}`
const navigate = useNavigate();
const [saved, setSaved] = useState(false)
const { user } = useAuth()

const isSaved = userLikedPosts?.includes(id)



useEffect(() => {
    setSaved(userLikedPosts?.includes(id))
    //  console.log("entro")
}, [updatedLikes, saved])





  return (
    
        
    <MiniPostStyle>

        <FlexDir  direction={"column"} width={"100%"} gap={"0"}>
            <SavedElement onClick={()=> user != null ? addToSaved(id) : navigate("/login")} variant={isSaved ? "saved" : "normal"}/>
        <Link to={path}>
            <FlexDir  width={"100%"} height={"70%"} mediaqueryHeightMobile={"95%"} mediaqueryDirMobile={"column"} margin={"0"}>
        <img src={image} alt="img post" />
    <FlexDir width={"65%"} mediaqueryWidthMobile={"90%"} mediaqueryHeightMobile={"40%"} height={"100%"} direction={"column"} mediaqueryWidthTablet={"50%"} >
        
        <h2>{title}</h2>
        <p>{text}</p>
        </FlexDir>
        </FlexDir>
        <FlexDir width={"100%"} margin={"10px 0 0 0"}>
        <FlexEnd variant={"normal"}>
            <FlexDir margin={"0"} >
            <img className="profilePicPost" alt="author profile img" src={author[0]?.image}/>
            <h4 className="author">{author[0]?.name ? author[0]?.name : author[0]?.username}</h4>
            </FlexDir>
            <h4 className="price">{price}€</h4>
            <h4 className="location">📍{" "}{province}</h4>
        </FlexEnd>
        </FlexDir>
        </Link>
        </FlexDir>
     </MiniPostStyle>
    
  )
}
