import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
window.global ||= window;

import axios from "axios";
axios.defaults.baseURL = `http://kennedywee.pythonanywhere.com/`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
