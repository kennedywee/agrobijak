import {
  WIDGET_LIST_REQUEST,
  WIDGET_LIST_SUCCESS,
  WIDGET_LIST_FAIL,
} from "../constants/widgetConstants";

export const widgetListReducers = (state = { widgets: [] }, action) => {
  switch (action.type) {
    case WIDGET_LIST_REQUEST:
      return { widgets: [] };

    case WIDGET_LIST_SUCCESS:
      return { widgets: action.payload };

    case WIDGET_LIST_FAIL:
      return { widgets: action.payload };

    default:
      return state;
  }
};
