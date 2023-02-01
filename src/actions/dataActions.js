import axios from "axios";

import {
  DATA_LIST_REQUEST,
  DATA_LIST_SUCCESS,
  DATA_LIST_FAIL,
  DATA_DASHBOARD_REQUEST,
  DATA_DASHBOARD_SUCCESS,
  DATA_DASHBOARD_FAIL,
  DATA_CREATE_REQUEST,
  DATA_CREATE_SUCCESS,
  DATA_CREATE_FAIL,
} from "../constants/dataConstants";

export const listData = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DATA_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/data/read/${id}`, config);

    dispatch({
      type: DATA_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATA_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const dashboardData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DATA_DASHBOARD_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/data/dashboard/`, config);

    dispatch({
      type: DATA_DASHBOARD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATA_DASHBOARD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createData = (newdata) => async (dispatch, getState) => {
  const value = newdata.fieldValue ? 1 : 0;
  try {
    dispatch({
      type: DATA_CREATE_REQUEST,
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

    const body = {
      device: newdata.device.id,
      [newdata.fieldStr]: value,
    };

    const { data } = await axios.post(`/api/data/create/`, body, config);

    dispatch({
      type: DATA_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATA_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
