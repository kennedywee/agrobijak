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
  deviceDeleteReducer,
} from "./reducers/deviceReducers";

import {
  dataListReducers,
  dataDashboardReducers,
} from "./reducers/dataReducers";

import {
  alertListReducers,
  alertCreateReducer,
} from "./reducers/alertReducers";

import { widgetListReducers } from "./reducers/widgetReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducers,
  deviceList: deviceListReducers,
  deviceDetails: deviceDetailsReducers,
  deviceCreate: deviceCreateReducer,
  deviceUpdate: deviceUpdateReducer,
  deviceDelete: deviceDeleteReducer,
  dataList: dataListReducers,
  dashboardData: dataDashboardReducers,
  widgetList: widgetListReducers,
  alertList: alertListReducers,
  alertCreate: alertCreateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const myDeviceFromStorage = localStorage.getItem("myDevice")
  ? JSON.parse(localStorage.getItem("myDevice"))
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
