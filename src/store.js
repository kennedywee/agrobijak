import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducers,
  userDetailsReducers,
  userUpdateProfileReducers,
  userListReducers,
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
  dataCreateReducer,
} from "./reducers/dataReducers";

import {
  alertListReducers,
  alertDetailsReducers,
  alertCreateReducer,
  alertUpdateReducer,
  alertDeleteReducer,
} from "./reducers/alertReducers";

import {
  scheduleListReducers,
  scheduleDetailsReducers,
  scheduleCreateReducer,
  scheduleUpdateReducer,
  scheduleDeleteReducer,
} from "./reducers/scheduleReducers";

import {
  widgetListReducers,
  widgetCreateReducer,
  widgetUpdateReducer,
  widgetDeleteReducer,
} from "./reducers/widgetReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  userUpdateProfile: userUpdateProfileReducers,
  userList: userListReducers,

  deviceList: deviceListReducers,
  deviceDetails: deviceDetailsReducers,
  deviceCreate: deviceCreateReducer,
  deviceUpdate: deviceUpdateReducer,
  deviceDelete: deviceDeleteReducer,

  dataList: dataListReducers,
  dashboardData: dataDashboardReducers,
  dataCreate: dataCreateReducer,

  widgetList: widgetListReducers,
  widgetCreate: widgetCreateReducer,
  widgetUpdate: widgetUpdateReducer,
  widgetDelete: widgetDeleteReducer,

  alertList: alertListReducers,
  alertDetails: alertDetailsReducers,
  alertCreate: alertCreateReducer,
  alertUpdate: alertUpdateReducer,
  alertDelete: alertDeleteReducer,

  scheduleList: scheduleListReducers,
  scheduleDetails: scheduleDetailsReducers,
  scheduleCreate: scheduleCreateReducer,
  scheduleUpdate: scheduleUpdateReducer,
  scheduleDelete: scheduleDeleteReducer,
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
