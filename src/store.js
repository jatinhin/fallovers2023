import { createStore } from "redux";
import reduxReset from 'redux-reset'
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


