import {
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
  DEVICE_LIST_FAIL,
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
