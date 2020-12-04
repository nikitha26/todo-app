import { act } from "react-dom/test-utils";
import {ADD_TODO,REMOVE_TODO} from "../Context/action";
 
export default (state,action)=>{
    switch (action.type) {
        case ADD_TODO:
            //console.log(action.payload)
            return [...state,action.payload]
        case REMOVE_TODO:
            return state.filter(todo =>todo.id !== action.payload)
        default:
            return state;
       }
}