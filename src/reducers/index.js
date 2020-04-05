import { combineReducers } from 'redux'
import LoginFormReducer from './LoginReducer'
import UserFormReducer from './UserReducer'

export default combineReducers({
    login: LoginFormReducer,
    user: UserFormReducer
})