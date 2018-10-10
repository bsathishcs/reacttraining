import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import countReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const appStore = createStore(countReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
