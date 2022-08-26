import { useNavigate } from "react-router-dom"

export const UserCard = (props) => {

    let navigate = useNavigate()


    return(
        <div className="userCard" >
            <p>{props.name}</p>
            <p>{props.email}</p>
            <button className="buttonClass" onClick={()=>{navigate("/users/profile/"+props.id)}}>See Profile</button>
        </div>
    )
}