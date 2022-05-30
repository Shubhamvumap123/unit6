import {GET_TODOS,GET_TODOS_LODING,GET_TODOS_ERROR} from './action';
// import {store} from '../Products/store'
const initState ={
    loading : false,
    error : false,
    todos : []
};
export const todosReducer = (state= initState, {type,payload})=>{
    switch(type){
        case GET_TODOS_LODING:
            return {...state, loading:true}
            case GET_TODOS:
                return {...state, loading:false, todos :[...payload],error:false};
                case GET_TODOS_ERROR:
               return { ...state, loading: false, error: true, todos: [] }; 
            default:
                return state;
            }
                
}
