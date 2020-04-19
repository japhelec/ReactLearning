import {combineReducers} from "redux"
import postReducer from "./postsReducer.js"
import usersReducer from "./usersReducer.js"

export default combineReducers({
    posts: postReducer,
    users: usersReducer
});