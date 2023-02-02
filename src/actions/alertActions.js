import axios from "axios";

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

export const listAlertDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/alerts/${id}`);

    dispatch({
      type: ALERT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALERT_DETAILS_FAIL,
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

    console.log(alert.field);

    const { data } = await axios.post(`/api/alerts/create/`, alert, config);

    dispatch({
      type: ALERT_CREATE_SUCCESS,
      payload: data,
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

export const updateAlert = (alert) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALERT_UPDATE_REQUEST,
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
      `/api/alerts/update/${alert.id}/`,
      alert,
      config
    );
    dispatch({
      type: ALERT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALERT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteAlert = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALERT_DELETE_REQUEST,
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

    const { data } = await axios.delete(`/api/alerts/delete/${id}/`, config);
    dispatch({
      type: ALERT_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALERT_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
