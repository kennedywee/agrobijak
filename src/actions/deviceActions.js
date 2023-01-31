import axios from "axios";

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
  DEVICE_DELETE_REQUEST,
  DEVICE_DELETE_SUCCESS,
  DEVICE_DELETE_FAIL,
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
    localStorage.setItem("myDevice", JSON.stringify(data));
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

export const createDevice = (device) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DEVICE_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/devices/create/`, device, config);

    dispatch({
      type: DEVICE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateDevice = (device) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DEVICE_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/devices/update/${device.id}/`,
      device,
      config
    );
    dispatch({
      type: DEVICE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteDevice = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DEVICE_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/devices/delete/${id}/`, config);
    dispatch({
      type: DEVICE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
