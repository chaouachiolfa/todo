import { ADD ,DELETE,DONE, UPDATE } from "../action/constant";
import {v4 as uuidv4} from "uuid"

 
 
 
 // initialisation state 
const initialState = {
    todos : [ ] 
};
function todoReducer (state = initialState , action) {
     const {type , payload}=action
    switch (type) {
        case ADD:
            return{
                todos : [...state.todos , {id:uuidv4() , isDone : false , text : payload.text}]
            }
            case DONE:
            return{
                todos : state.todos.map((todo)=>todo.id === payload.id ? {...todo , isDone : !todo.isDone} : todo )
            }
            case DELETE :
                return{
                    todos : state.todos.filter(todo =>todo.id !== payload.id)
                }

                case UPDATE:
                return{
                    todos : state.todos.map((todo)=>todo.id === payload.id ? {...todo ,text : payload.text} : todo)
                }
        default:
            return state;
    } 
}

 

 export default todoReducer