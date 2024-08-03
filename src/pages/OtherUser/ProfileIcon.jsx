import { Link } from "react-router-dom"

export const ProfileIcon = ({className, data}) => {
  const review = className === "review" ? { height: '60px' } : {};
  return (
    <Link style={review} to={`/user/${data.username}`}>
    <img className={className} src={data.image} alt={`${data.username} profile icon`}/>
  </Link>
  )
}
