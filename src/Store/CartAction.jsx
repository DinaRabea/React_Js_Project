import { compose, createStore } from "redux"
import CartReducer from "./CartReducer"



const mystore=createStore(CartReducer)

export default mystore