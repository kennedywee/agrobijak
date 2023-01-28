import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducers,
} from "./reducers/userReducers";

import {
  deviceListReducers,
  deviceDetailsReducers,
  deviceCreateReducer,
  deviceUpdateReducer,
} from "./reducers/deviceReducers";

import { dataListReducers } from "./reducers/dataReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducers,
  deviceList: deviceListReducers,
  deviceDetails: deviceDetailsReducers,
  deviceCreate: deviceCreateReducer,
  deviceUpdate: deviceUpdateReducer,
  dataList: dataListReducers,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
