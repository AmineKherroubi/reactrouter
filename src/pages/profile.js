import axios from "axios"
import { useEffect , useState } from "react"
import { useSelector } from "react-redux"

export const Profile = (props) => {

let user = useSelector((state) => state.userReducer.profileValue)



    return(
        <div className="Profile">
            <p>{"Hello "+user.name}</p>
        </div>
    )
}