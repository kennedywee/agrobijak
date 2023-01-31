import axios from "axios";

import {
  ALERT_LIST_REQUEST,
  ALERT_LIST_SUCCESS,
  ALERT_LIST_FAIL,
  ALERT_CREATE_REQUEST,
  ALERT_CREATE_SUCCESS,
  ALERT_CREATE_FAIL,
  ALERT_CREATE_RESET,
} from "../constants/alertConstants";

export const listAlerts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALERT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/alerts/`, config);

    dispatch({
      type: ALERT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALERT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createAlert = (alert) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALERT_CREATE_REQUEST,
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

    const { data } = await axios.post(`/api/alerts/create/`, alert, config);

    dispatch({
      type: ALERT_CREATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: ALERT_CREATE_RESET,
    });
  } catch (error) {
    dispatch({
      type: ALERT_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
