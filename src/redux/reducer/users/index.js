import initialStates from "../../initialStates";
import login from "./login";
import register from "./register";

export default (state = initialStates.users, action = {})=>({
    ...state,
    ...login(state, action),
    ...register(state, action)
})