import {
  WIDGET_LIST_REQUEST,
  WIDGET_LIST_SUCCESS,
  WIDGET_LIST_FAIL,
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

    const { data } = await axios.get(`/api/data/dashboard/`, config);

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
