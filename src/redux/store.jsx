import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialStates from './initialStates';
import reducer from './reducer/index'

const middleware = [thunk];

const store =() =>{
    return createStore(
        reducer, //reducer est = combineReducers
        initialStates, 
        composeWithDevTools(applyMiddleware(...middleware)),
    );
} 

export default store;