import {combineReducers} from 'redux'
import list from './list'
import filter from './filter'



export default combineReducers({
    list,
    filter
})