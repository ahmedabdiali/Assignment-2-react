import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"

const ProfileActions = ({ logout }) => {
    
    const {user, setUser} = useUser()

    const handleLogoutClick = () => {
        logout()
        setUser(null)
    }

    const handleDeleteTranslations = () => {
        if (window.confirm('Are you sure you want to delete your translations?')){
        storageDelete('translations', [])
        setUser({
            ...user,
            translations: []
        })
    }}

    return (
        <ul>
            <button onClick={ handleLogoutClick }>Logout</button>
            <button onClick={ handleDeleteTranslations }>Delete translations</button>
        </ul>
    );
}

export default ProfileActions;