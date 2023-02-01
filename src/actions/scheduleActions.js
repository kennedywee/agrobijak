import axios from "axios";

import {
  SCHEDULE_LIST_REQUEST,
  SCHEDULE_LIST_SUCCESS,
  SCHEDULE_LIST_FAIL,
  SCHEDULE_DETAILS_REQUEST,
  SCHEDULE_DETAILS_SUCCESS,
  SCHEDULE_DETAILS_FAIL,
  SCHEDULE_CREATE_REQUEST,
  SCHEDULE_CREATE_SUCCESS,
  SCHEDULE_CREATE_FAIL,
  SCHEDULE_CREATE_RESET,
  SCHEDULE_UPDATE_REQUEST,
  SCHEDULE_UPDATE_SUCCESS,
  SCHEDULE_UPDATE_FAIL,
  SCHEDULE_UPDATE_RESET,
  SCHEDULE_DELETE_REQUEST,
  SCHEDULE_DELETE_SUCCESS,
  SCHEDULE_DELETE_FAIL,
} from "../constants/scheduleConstants";

export const listSchedules = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SCHEDULE_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/schedules/`, config);

    dispatch({
      type: SCHEDULE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SCHEDULE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listScheduleDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SCHEDULE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/schedules/${id}`);

    dispatch({
      type: SCHEDULE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SCHEDULE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createSchedule = (schedule) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SCHEDULE_CREATE_REQUEST,
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

    const { data } = await axios.post(
      `/api/schedules/create/`,
      schedule,
      config
    );

    dispatch({
      type: SCHEDULE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SCHEDULE_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateSchedule = (schedule) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SCHEDULE_UPDATE_REQUEST,
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
      `/api/schedules/update/${schedule.id}/`,
      schedule,
      config
    );
    dispatch({
      type: SCHEDULE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SCHEDULE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteSchedule = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SCHEDULE_DELETE_REQUEST,
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

    const { data } = await axios.delete(`/api/schedules/delete/${id}/`, config);
    dispatch({
      type: SCHEDULE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SCHEDULE_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
