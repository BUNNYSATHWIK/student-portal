import { combineReducers } from "redux";
import addStuReducer from "./addStuReducer";
import favouriteReducer from "./favouriteReducer";



export const reducer = combineReducers({
    add: addStuReducer,
    fav: favouriteReducer
})