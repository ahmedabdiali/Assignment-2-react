import { createHeaders } from "."


//function to delete the translation history in the API. 
export const deleteTranslations = async (userid) => {
       try {
        const response = await fetch(`https://sros-noroff-api.herokuapp.com/translations/${userid}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Faild updating translations')
        }
        const result = await response.json()
        return [ null, result ]

       } catch (error) {
            return [ error, null ]
       } 
}

export const addTranslations = async (userid) => {
    try {
     const response = await fetch(`https://sros-noroff-api.herokuapp.com/translations/${userid}`, {
         method: 'PATCH',
         headers: createHeaders(),
         body: JSON.stringify({
             translations: []
         })
     })
     if (!response.ok) {
         throw new Error('Faild adding translations')
     }
     const result = await response.json()
     return [ null, result ]

    } catch (error) {
         return [ error, null ]
    } 
}