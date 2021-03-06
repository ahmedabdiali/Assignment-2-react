import { createHeaders } from "."
//
const apiUrl = process.env.REACT_APP_API_URL

//function to check if the user exists in the database
const checkForUser = async ( username ) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok){
            throw new Error('Request Failed!')
        }
        const data = await response.json()
        return [ null, data]
    } 
    catch (error) {
        return [ error.message, []]
    }
}
export const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations:[]

            })
        })
        if (!response.ok){
            throw new Error('Failed to create the user: ' + username)
        }
        const data = await response.json()
        return [ null, data]
    } 
    catch (error) {
        return [ error.message, [] ]
    }
}

export const apiPostRequest = async (name) => {
   
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                translations:{name}
            })
        })
    }


   






export const loginUser = async username => {
    const [ error, user] = await checkForUser(username)
    
    if (error !== null) {
        return [error, null]
    }

    if (user.length > 0){
        return [ null, user.pop() ]
    }

    return await createUser(username)

}
