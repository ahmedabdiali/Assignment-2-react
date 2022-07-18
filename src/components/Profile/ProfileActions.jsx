import { deleteTranslations } from "../../api/translation"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const ProfileActions = () => {
    
    const { user, setUser} = useUser()

    const logout = () => {
        storageDelete('user', null)
        setUser(null)
    }


    // function to delete the users translation history. The local storage is updated with an empty array. We made an assumtion that we should delete the translations in both localstorage and the API.
    const handleDeleteTranslations = async () => {
        if (!window.confirm('Are you sure you want to delete your translations?')){
            return
        }
        const [ clearError ] = await deleteTranslations(user.id)
        
        if (clearError !== null){
            return
        }
        
        storageSave('user', {...user,translations: []})
        setUser({
            ...user,
            translations: []
        })
    }

    return (
        <ul>
            <button onClick={ logout }>Logout</button>
            <button onClick={ handleDeleteTranslations }>Delete translations</button>
        </ul>
    );
}

export default ProfileActions;