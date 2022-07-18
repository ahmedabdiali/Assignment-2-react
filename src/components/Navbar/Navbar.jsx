import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import './Navbar.css'

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav>
            { user !== null &&
            <ul id="nav">
                <li>
                    <NavLink to="/translate">Translate</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
            }      
        </nav>
    )
}
export default Navbar