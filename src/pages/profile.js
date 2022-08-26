import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect , useState } from "react"

export const Profile = (props) => {

let params =useParams()

let [user, setUser] = useState([])


useEffect(()=>{

    async function getUser (){
        let result = await axios.get("https://jsonplaceholder.typicode.com/users/"+params.id)
        console.log(result.data)
        setUser(result.data)
    }
    getUser()
},[params])

    return(
        <div className="Profile">
            <p>{"Hello "+user.name}</p>
        </div>
    )
}