import {combineReducers} from 'redux'
import cardItems from './reducer'
import setStoreDemoData from './storeDemoData'

export default combineReducers({
  cardItems,
  setStoreDemoData,
});