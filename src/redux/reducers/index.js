import {combineReducers} from 'redux'
import Authreducers from './AuthReducers'
import HeaderReducers from './Headerreducers'
export default combineReducers({
    Auth: Authreducers,
    Header: HeaderReducers
})