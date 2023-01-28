import axios from "axios";

import {
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
  DEVICE_LIST_FAIL,
  DEVICE_DETAILS_REQUEST,
  DEVICE_DETAILS_SUCCESS,
  DEVICE_DETAILS_FAIL,
} from "../constants/deviceConstants";

export const listDevices = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DEVICE_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/devices/", config);

    dispatch({
      type: DEVICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listDeviceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DEVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/devices/${id}`);

    dispatch({
      type: DEVICE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.detail
          : error.message,
    });
  }
};
