/**
 * display the 10 last translation
 * button to clear the translation(delete from the API)
 * logout button should clear all the storage(redirect to Login page)
 */
 import React,{useState} from 'react';
 

 import './Translation.css'
 
 
     const TranslationPage =props=> {
         const [value, setValue]=useState('')
         const [disabled, setDisabled]=useState([])
         const [imageSequence, setImageSequence] = useState([])
 
 
         const handleChange =e=>{
             setDisabled(false)
             setValue(e.target.value)
             console.log('value: '+value)
         }
 
         const handleSubmit =e=>{
             e.preventDefault();
             setDisabled(true)

             if(value<1){
                 alert('please enter a word')
                 return;
             }
             const tempArray=[];
             for(let index = 0; index <value.length;index++){
                 tempArray.push(value[index])
         }
            setImageSequence(tempArray)
             console.log('value stored in tempArray : ',tempArray)
             console.log('value stored setImageSequence : ',imageSequence)
         }
 
         
 
     return (
         
         <div>
             <h2>welcome{}</h2>
             <div>
                 <form onSubmit={handleSubmit}>
                     <input type="text" value={value} onChange={handleChange} placeholder="Enter text..."/>
                     <button type="submit" disabled={disabled} className={disabled?"disabled":""}>click</button>
                 </form>
             </div>
             <div className="translate-container">
              {imageSequence.map((image,index)=>{
                 return(
                     <div key={index}>
                         <ul>
                             <img src={`handSign/${image}.png`}

                                     alt=""
                                     key={index}/>
                         </ul>
                 </div>
                 )
              })}
              </div>
         </div>
     );
 }
 
 export default TranslationPage;