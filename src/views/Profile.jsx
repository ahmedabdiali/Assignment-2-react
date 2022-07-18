import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageDelete } from "../utils/storage"

const Profile = () => {
    
    const { user, setUser } = useUser()

    const logout = () => {
        storageDelete('user', null)
        setUser(null)
    }
    
    return (
        <>
            <h1>Profile Page</h1>
            <ProfileHeader username={ user.username}/>
            <ProfileActions logout={ logout } />
            <ProfileTranslationHistory translations={ user.translations }/>
        </>
    )
}
export default withAuth(Profile)