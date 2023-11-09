// import { applyMiddleware, createStore } from "redux"
// import thunk from 'redux-thunk';
// import reducer from "./reducers"
// import {persistStore} from "redux-persist";
// //export default createStore(reducer, applyMiddleware(thunk, logger))

// const store = createStore(reducer, applyMiddleware(thunk));

// export const persistor = persistStore(store);
// export default store


import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "../Layouts/Main/brand/parts/emailSlice";

export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});
