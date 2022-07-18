const apiKey = process.env.REACT_APP_API_KEY

//Creating headers for the API requests 
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}
