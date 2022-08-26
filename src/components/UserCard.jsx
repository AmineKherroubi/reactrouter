import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateProfileValue } from "../stores/user"

export const UserCard = (props) => {

    let navigate = useNavigate()
    let dispatcher = useDispatch()

    function pushNavigate(){
        dispatcher(updateProfileValue(props.user))
        navigate("/users/profile")
    }

    return(
        <div className="userCard" >
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
            <button className="buttonClass" onClick={()=>{pushNavigate("/users/profile")}}>See Profile</button>
        </div>
    )
}