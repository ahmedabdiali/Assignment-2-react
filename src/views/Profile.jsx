import ProfileActions from "../components/Profile/ProfileActions"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import './Profile.css'

const Profile = () => {
    
    const { user } = useUser()

    return (
        <div>
            <h1>Profile Page</h1>
            <ProfileActions />
            <div id="TranslationHistoryDiv">
                <ProfileTranslationHistory translations={ user.translations }/>
            </div>
        </div>
    )
}
export default withAuth(Profile)