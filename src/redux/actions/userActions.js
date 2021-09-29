import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/user.constants";

const url = "http://localhost:8000";

export const loginAction = (data) => async(dispatch) =>{
    dispatch({
        type: USER_LOGIN_REQUEST
    });

    try {
        const res = await axios.post(`${url}/api/student/login`, data);
        if(res.status  === 200){
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data.data
            });
            localStorage.setItem('authtoken', res.data.token);
            window.location.href = "/"
        };
        console.log(res.status);
    } catch (error) {
        console.log(error);
        const res = error.response;
        if(res && res.status === 401){
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: res.data.message
            })
        }else{
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: 'Connexion impossible, veuillez reessayer'
            })
        }
    }
};
export const registerAction = (data)=> async (dispatch, history) =>{
    dispatch({
        type: USER_REGISTER_REQUEST
    });
    try {
        const res = await axios.post(`${url}/api/student/register-student`, data);
        if(res.status === 201){
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: res.data
            });
            // history.push('/users');
            window.location.replace('/')
        };
    } catch (error) {
        console.log(error)
      const res = error.response;
      if(res && res.status === 400){
          dispatch({
              type: USER_REGISTER_FAIL,
              payload: res.data.message
          })
      }else {
          dispatch({
              type: USER_REGISTER_FAIL,
              payload: 'Enregistrement Impossible, Veuillez reesayer'
          })
      }  
    }
}