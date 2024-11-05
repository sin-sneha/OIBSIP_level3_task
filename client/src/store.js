import { combineReducers } from "redux";
import { createStore , applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzasReducer} from './reducers/pizzaReducers'
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer } from "./reducers/userReducer";
import { userLoginReducer } from "./reducers/userReducer";


const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer ,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    userLoginReducer : userLoginReducer

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cartReducer : {
        cartItems : cartItems ,
        registerUserReducer : registerUserReducer
    },
userLoginReducer : {
    userInfo : userInfo
}
}
const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)) )

export default store