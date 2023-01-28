import {
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
  DEVICE_LIST_FAIL,
  DEVICE_DETAILS_REQUEST,
  DEVICE_DETAILS_SUCCESS,
  DEVICE_DETAILS_FAIL,
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
