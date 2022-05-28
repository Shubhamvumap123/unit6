
import {LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_FAILURE} from './action';

const initState ={
    loading:false,
    error:false,
    isAuthenticated:false,
    token:"",
    username:""
};                                                                                                                                                                                                                                                                                                                                                                              

export const loginReducer = (store = initState,{type,payload}) =>{
    switch(type){
        case LOGIN_LOADING:
            return {...store,loading:true};
            case LOGIN_SUCCESS:
                return {...store,isAuthenticated:true,loading:false,error:false,
                token:payload.token ,username:payload.username};
                case LOGIN_FAILURE:
                    return{
                        ...store,isAuthenticated:true,loading:false,error:true,taken:"",username:""
                    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            default:
                return store;
    }
};
