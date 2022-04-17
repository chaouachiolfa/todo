 
import { ADD , DELETE, DONE, UPDATE } from "./constant"

 export const add =(payload)=>{ 
 return {
    type : ADD ,
    payload 
}
}

 export const done =(payload)=>{
     return{
         type : DONE , 
         payload
     }
 }

 export const delate= (payload) =>{
     return {
         type : DELETE , 
         payload
     }
 }

 export const update= (payload) =>{
    return {
        type : UPDATE , 
        payload
    }
}