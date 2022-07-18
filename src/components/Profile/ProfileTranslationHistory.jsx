import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
    
    const TranslationList = translations.slice(translations.length -10, translations.length).reverse().map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + translation } translation={ translation } />)
    
    return (
        <section>
            <h3>Your last 10 translations: </h3>
            <ul>
                { TranslationList }
            </ul>
        </section>
    )

}
export default ProfileTranslationHistory