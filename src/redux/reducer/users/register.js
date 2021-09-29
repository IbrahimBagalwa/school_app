import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../constants/user.constants";


export default (state, {type, payload}) =>{
    switch (type) {
        case USER_REGISTER_REQUEST:
           return{
               ...state,
               register:{
                    ...state.register,
                    loading: true,
                    error:null
               }
           };
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                register: {
                    ...state.register,
                    loading: false,
                    data: payload,
                }
            };
        case USER_REGISTER_FAIL:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading:false,
                    error: payload
                }
            }
    }
}