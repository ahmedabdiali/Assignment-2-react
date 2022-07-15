/**
 * display the 10 last translation
 * button to clear the translation(delete from the API)
 * logout button should clear all the storage(redirect to Login page)
 */
 import React,{useState,useEffect} from 'react';

//  import './translation.css'
 
 
     const TranslationPage =props=> {
         const [value, setValue]=useState('')
         const [disabled, setDisabled]=useState([])
 
         let tempArray = [];
         let images =[
             {src:'handSign'}
         ]
     
 
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
 
             for(let index = 0; index <value.length;index++){
                 tempArray.push(value[index])
                 // tempArray.push(`${images.src}`);
         }
             console.log('value stored : ',tempArray)
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
              {images.map((image,index)=>{
                 return(
                     <div key={index}>
                         <ul>
                             <img src={`${image.src}/${value}.png`}
                                     alt=""
                                     key={index}/>
                         </ul>
                         <div>
                              //display here imageArrays
                         </div>
                 </div>
                 )
              })}
         </div>
     );
 }
 
 export default TranslationPage;