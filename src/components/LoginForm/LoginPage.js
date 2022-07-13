import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login=(props)=> {
    const navigate = useNavigate();
    const [firstName,setfirstName]=useState('');
    
    const handleSubmit=e=>{
    e.preventDefault();
    let valueInput = firstName.length
    


    if(valueInput>0){
        navigate('/translate')
        console.log('login successful: ',firstName) 
    
    }else{console.log('Enter Name')}
}

    return (
        <div>
            <h2>Welcome to loginPage</h2>
            <input placeholder='whats your name'value={firstName}  onChange={(e) => setfirstName(e.target.value)} />
            <button onClick={handleSubmit}>click</button>

            
        </div>
    );
}

export default Login;