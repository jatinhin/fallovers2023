import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.min.js";
import {store} from "./redux/store";

//import * as serviceWorker from './serviceWorker';
import App from "./App";
import { Provider } from "react-redux";
store.subscribe(() => store.getState);
const rootContainer = document.getElementById("ugc-suit-main");
const root = createRoot(rootContainer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
//serviceWorker.unregister();
