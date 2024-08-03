import { useEffect, useState } from "react"
import { getUserByName } from "../../services/user.service"
import { NothingHere } from "../NothingHere/NothingHere"
// import "./FindRooms.css"
import { getPostByIdUnpopulated, toggleRoom, toggleRoommate } from "../../services/post.service"
import { getRoomByName } from "../../services/room.service"
import { FindRoomElement } from "./FindRooms.element"

export const FindRooms = ({ postId, resCheck, setResCheck, setPopupLinkActive }) => {
  const [findNameValue, setFindNameValue] = useState()
  const [res, setRes] = useState()
  const [resToggle, setResToggle] = useState();

  let isRoom

  const handleSubmit = async (e) => {
    let resUserByName = await getRoomByName(findNameValue)
    setRes(resUserByName)
    e.target.value = ""
  }

  const addRoom = async (userId) => {
    setResToggle(await toggleRoom(postId, userId))
    setTimeout(() => {
      setPopupLinkActive(false)
    }, "2000")
  }

  const checkRoom = async () => {
    setResCheck(await getPostByIdUnpopulated(postId))
  }

  useEffect(() => {
    checkRoom()
  }, [res, resToggle])

  return (
    // <div id="userFinderPage">
    <FindRoomElement>
      <div id = "userFinderContainer">
        <input  id = "userFinderInput" placeholder = "enter a room title to search" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/>
        <button type="submit" id = "findUsersButton" onClick={(e) => handleSubmit(e)}>🔎</button>
        <img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" alt="close popup" onClick={() => setPopupLinkActive(false)} style={{height: "30%"}}/>
      </div>
      {res?.data?.length > 0 ? <div id="padreSection">
        {res?.data?.map((room) => {
          isRoom = resCheck?.data?.room?.includes(room._id)
          return (
            <div className="findUserMapResult" key = {room._id} style={{ backgroundColor: isRoom ? "#97F6A8" : "transparent"}}>
              <section className="findUserMapSection">
                <img src={room?.image[0]} alt={room?.title} className="userFinderImage"/>
                <h2 className="userFinderName">{room?.title?.slice(0,40)}</h2>
              </section>
              <section>
                <button className="addRoommateButton" onClick={() => addRoom(room._id)}>{isRoom ? "Unadd" : "Add"}</button>
              </section>
            </div>
          )
        })}
      </div>
      : res && <NothingHere height="85%" page="post"/>}
    </FindRoomElement>
    // </div>
  )
}
