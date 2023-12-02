import { combineReducers } from "redux"
import authenticated from './authenticated';
import storeDemoData from "./storeDemoData"
export default combineReducers({
  authenticated,
  storeDemoData,
});