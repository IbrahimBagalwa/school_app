import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../../constants/user.constants";


export default (state, {type, payload}) =>{
    switch(type){
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true,
                    error: null
                }
            };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    data: payload,
                }
            }

        case USER_LOGIN_FAIL:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    error: payload
                }
            }
    }
}