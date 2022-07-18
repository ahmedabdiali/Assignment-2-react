import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user';
import { storageSave } from '../../utils/storage';
import {useNavigate} from 'react-router-dom'
import { useUser } from '../../context/UserContext';

//Requirements on the name that the user inputs
const nameRequirement = {
    required: true,
    minLength: 3
};


//Function for the user to login to the app
const LoginForm=()=> {
    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [apiError, setApiError] = useState(null)
    const { user, setUser } = useUser(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (user !== null) {
        navigate('translate')
        }
    }, [ user, navigate ])

    const onSubmit = async ({username}) => {
        const [error, userResponse] = await loginUser(username)
        if (error !==null){
            setApiError(error)
        }
        if (userResponse !== null){
            storageSave('user', userResponse)
            setUser(userResponse)
        }
    }

const errorMessage = (() =>{
    if (!errors.username){
        return null
    }
    if (errors.username.type === 'minLength'){
        return <span>Name must be at least 3 letters</span>
    }
    if (errors.username.type === 'required'){
        return <span>Please enter a name</span>
    }
})()

    return (
        <>
        <h2>Enter your name</h2>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="username"> Name: </label>
                <input type="text" {...register("username", nameRequirement)} />
                { errorMessage }
            </fieldset>

            <button type="submit">Login</button>
            {apiError && <p>{ apiError }</p>}
        </form>
        </>
    );
}

export default LoginForm;