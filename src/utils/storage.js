//storing the user in the localstorage
export const storageSave = (key, value) =>{
    localStorage.setItem(key, JSON.stringify(value))
}

//get user from the localstorage
export const storageRead = key =>{
    const data = localStorage.getItem(key)
    if (data){
        return JSON.parse(data)
    }
    return null
}
//delete user from the localstorage
export const storageDelete = key =>{
    localStorage.removeItem(key)
}