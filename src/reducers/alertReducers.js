import {
  ALERT_LIST_REQUEST,
  ALERT_LIST_SUCCESS,
  ALERT_LIST_FAIL,
  ALERT_CREATE_REQUEST,
  ALERT_CREATE_SUCCESS,
  ALERT_CREATE_FAIL,
  ALERT_CREATE_RESET,
} from "../constants/alertConstants";

export const alertListReducers = (state = { alerts: [] }, action) => {
  switch (action.type) {
    case ALERT_LIST_REQUEST:
      return { alerts: [] };

    case ALERT_LIST_SUCCESS:
      return { alerts: action.payload };

    case ALERT_LIST_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const alertCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ALERT_CREATE_REQUEST:
      return { loading: true };

    case ALERT_CREATE_SUCCESS:
      return { loading: false, success: true, alert: action.payload };

    case ALERT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case ALERT_CREATE_RESET:
      return {};

    default:
      return state;
  }
};
