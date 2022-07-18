import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

//Authenticates if the user exists or not. If the user doesn't exist, the user is sent to the login page.
const withAuth = Component => props => {
    const { user } = useUser()
    if (user !== null){
        return <Component {...props}/>
    }
    else{
        return <Navigate to="/" />
    }
}
export default withAuth