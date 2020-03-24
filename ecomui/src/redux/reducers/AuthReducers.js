import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_START, 
    USER_LOGIN_FAILED,
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,
    USER_CHANGEPASS_START,
    USER_CHANGEPASS_SUCCESS,
    USER_CHANGEPASS_FAILED
} from './../actions/type'

const INITIAL_STATE={
    username:'',
    id:0,
    loading:false,
    islogin:false,
    isregis:false,
    errormes:'',
    errormsg:'',
    role:'',
    password:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case USER_LOGIN_START:
            return {...state,loading:true}
        case USER_LOGIN_SUCCESS:
            return {...state,loading:false,...action.payload,islogin:true}
        case USER_LOGIN_FAILED:
            return{...state,loading:false,errormes:action.payload}

        case USER_REGISTER_START:
            return {...state, loading:true}
        case USER_REGISTER_SUCCESS:
            return {...state,loading:false,...action.payload,isregis:true}
        case USER_REGISTER_FAILED:
            return{...state,loading:false, errormsg:action.payload}

        case USER_CHANGEPASS_START:
            return{...state,loading:true}
        case USER_CHANGEPASS_SUCCESS:
            return{...state,loading:false,password:action.payload.password,changepassword:action.payload}
        case USER_CHANGEPASS_FAILED:
            return{...state,loading:false,errormes:action.payload}

        case 'ErrorClear':
            return INITIAL_STATE
        default:
            return state
    }
}
