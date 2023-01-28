import {
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
  DEVICE_LIST_FAIL,
  DEVICE_DETAILS_REQUEST,
  DEVICE_DETAILS_SUCCESS,
  DEVICE_DETAILS_FAIL,
  DEVICE_CREATE_REQUEST,
  DEVICE_CREATE_SUCCESS,
  DEVICE_CREATE_FAIL,
  DEVICE_CREATE_RESET,
  DEVICE_UPDATE_REQUEST,
  DEVICE_UPDATE_SUCCESS,
  DEVICE_UPDATE_FAIL,
  DEVICE_UPDATE_RESET,
} from "../constants/deviceConstants";

export const deviceListReducers = (state = { devices: [] }, action) => {
  switch (action.type) {
    case DEVICE_LIST_REQUEST:
      return { loading: true, devices: [] };

    case DEVICE_LIST_SUCCESS:
      return { loading: false, devices: action.payload };

    case DEVICE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deviceDetailsReducers = (state = { device: {} }, action) => {
  switch (action.type) {
    case DEVICE_DETAILS_REQUEST:
      return { loading: true, ...state };

    case DEVICE_DETAILS_SUCCESS:
      return { loading: false, device: action.payload };

    case DEVICE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deviceCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DEVICE_CREATE_REQUEST:
      return { loading: true };

    case DEVICE_CREATE_SUCCESS:
      return { loading: false, success: true, device: action.payload };

    case DEVICE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case DEVICE_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const deviceUpdateReducer = (state = { device: {} }, action) => {
  switch (action.type) {
    case DEVICE_UPDATE_REQUEST:
      return { loading: true };

    case DEVICE_UPDATE_SUCCESS:
      return { loading: false, success: true, device: action.payload };

    case DEVICE_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case DEVICE_UPDATE_RESET:
      return { device: {} };

    default:
      return state;
  }
};
