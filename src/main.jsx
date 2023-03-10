import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
window.global ||= window;
import axios from "axios";

const localURL = "http://127.0.0.1:8000/";
const hostedURL = "https://kennedywee.pythonanywhere.com/";
axios.defaults.baseURL = hostedURL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
