import axios from "axios";

import {
  WIDGET_LIST_REQUEST,
  WIDGET_LIST_SUCCESS,
  WIDGET_LIST_FAIL,
  WIDGET_UPDATE_REQUEST,
  WIDGET_UPDATE_SUCCESS,
  WIDGET_UPDATE_FAIL,
  WIDGET_UPDATE_RESET,
} from "../constants/widgetConstants";

export const listWidgets = () => async (dispatch, getState) => {
  try {
    dispatch({ type: WIDGET_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/widgets/`, config);

    dispatch({
      type: WIDGET_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WIDGET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateWidget = (widget) => async (dispatch, getState) => {
  try {
    dispatch({
      type: WIDGET_UPDATE_REQUEST,
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

    const id = parseInt(widget.i);

    const { data } = await axios.put(
      `/api/widgets/update/${id}/`,
      widget,
      config
    );

    dispatch({
      type: WIDGET_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: WIDGET_UPDATE_RESET,
    });
  } catch (error) {
    dispatch({
      type: WIDGET_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
