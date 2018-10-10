import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import userReducer from "./reducer/userReducer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import combineAllReducer from "./reducer/combineAllReducer";

const appStore = createStore(
  combineAllReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
