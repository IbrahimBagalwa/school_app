import initialStates from "../../initialStates";
import login from "./login";

export default (state = initialStates.users, action = {})=>({
    ...state,
    ...login(state, action)
})