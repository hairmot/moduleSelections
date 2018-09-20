import { combineReducers } from 'redux'
import modules from './modules'
import students from './students'

export default combineReducers({
    modules,
    students
})