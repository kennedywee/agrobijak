import {
  ALERT_LIST_REQUEST,
  ALERT_LIST_SUCCESS,
  ALERT_LIST_FAIL,
  ALERT_DETAILS_REQUEST,
  ALERT_DETAILS_SUCCESS,
  ALERT_DETAILS_FAIL,
  ALERT_CREATE_REQUEST,
  ALERT_CREATE_SUCCESS,
  ALERT_CREATE_FAIL,
  ALERT_CREATE_RESET,
  ALERT_UPDATE_REQUEST,
  ALERT_UPDATE_SUCCESS,
  ALERT_UPDATE_FAIL,
  ALERT_UPDATE_RESET,
  ALERT_DELETE_REQUEST,
  ALERT_DELETE_SUCCESS,
  ALERT_DELETE_FAIL,
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

export const alertDetailsReducers = (state = { alert: {} }, action) => {
  switch (action.type) {
    case ALERT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case ALERT_DETAILS_SUCCESS:
      return { loading: false, alert: action.payload };

    case ALERT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

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

export const alertUpdateReducer = (state = { alert: {} }, action) => {
  switch (action.type) {
    case ALERT_UPDATE_REQUEST:
      return { loading: true };

    case ALERT_UPDATE_SUCCESS:
      return { loading: false, success: true, alert: action.payload };

    case ALERT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case ALERT_UPDATE_RESET:
      return { alert: {} };

    default:
      return state;
  }
};

export const alertDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ALERT_DELETE_REQUEST:
      return {};

    case ALERT_DELETE_SUCCESS:
      return { success: true };

    case ALERT_DELETE_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
