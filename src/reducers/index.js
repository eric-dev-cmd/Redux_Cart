import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";

const myReducer = combineReducers({
  products,
  cart,
});

export default myReducer;
