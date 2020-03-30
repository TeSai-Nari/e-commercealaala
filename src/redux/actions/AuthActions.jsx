//pakai redux thunk (buat jalanin function async di dlm axios.get)

import Axios from 'axios'
import {
    USER_LOGIN_START,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_START,
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS,
    USER_CHANGEPASS_START,
    USER_CHANGEPASS_SUCCESS,
    USER_CHANGEPASS_FAILED
  } from './type'
import {API_URL} from '../../supports/ApiUrl'

export const RegisterUser = ({username, password, passwordconfirm}) => {
  return (dispatch)=>{
    var role="user"
    dispatch({type:USER_REGISTER_START})
    if( username===''||password===''||passwordconfirm===''){
      dispatch({type:USER_REGISTER_FAILED,payload:'Mohon isi semuanya'})
    }else{
      Axios.get(`${API_URL}/users?username=${username}`)
      .then ((res1)=>{
        if(res1.data.length){
          dispatch({type:USER_REGISTER_FAILED,payload:'Username sudah ada'})
        }else if(password !== passwordconfirm){
          dispatch({type:USER_REGISTER_FAILED,payload:'Password konfirmasi tidak sama'})
        }else{
          Axios.post(`${API_URL}/users`,{username, password , role})
          .then((res2)=>{
            dispatch({type:USER_REGISTER_SUCCESS,payload:res2.data[0]})
          }).catch((err1)=>{
            console.log(err1)
          })
        }
      }).catch((err2)=>{
        console.log(err2)
      })
    }
  }
}

export const LoginUser=({username,password})=>{
    return (dispatch)=>{
        dispatch({type:USER_LOGIN_START})
        if(username===''||password===''){
            dispatch({type:USER_LOGIN_FAILED,payload:'username atau password tidak terisi'})
        }else{
            Axios.get(`${API_URL}/users`,{
              params:{
                username:username,
                password:password
              }
          })
            .then((res)=>{
                if(res.data.length){//user ada
                    localStorage.setItem('iduser',res.data[0].id)
                    dispatch({type:USER_LOGIN_SUCCESS,payload:res.data[0]})
                }else{
                    dispatch({type: USER_LOGIN_FAILED,payload:'Username atau Password tidak terdaftar'})
                }
            }).catch((err)=>{
                console.log(err)
                dispatch({type:USER_LOGIN_FAILED,payload:err.message}) 
            })
        }
    }
}

// export const ChangePassword =()=>{
//   return (dispatch){
//     dispatch({type:USER_CHANGE})
//   }
// }
export const errormessageclear=()=>{
  return{
        type:'ErrorClear'
    }
}
export const KeepLogin=(data)=>{            //tetap masuk dg id si A meskipun di reload
    return{
        type:USER_LOGIN_SUCCESS,       
        payload:data
    }
}
export const LoginSucces=(datauser)=>{
  return{
      type:'LOGIN_SUCCESS',
      payload:datauser
  }
}
export const GantiPassword = (passwordbaru) => {
  return {
    type: "GANTI_PASSWORD",
    payload: passwordbaru
  };
};