import {
  WIDGET_LIST_REQUEST,
  WIDGET_LIST_SUCCESS,
  WIDGET_LIST_FAIL,
  WIDGET_UPDATE_REQUEST,
  WIDGET_UPDATE_SUCCESS,
  WIDGET_UPDATE_FAIL,
  WIDGET_UPDATE_RESET,
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

export const widgetUpdateReducer = (state = { widget: {} }, action) => {
  switch (action.type) {
    case WIDGET_UPDATE_REQUEST:
      return {};

    case WIDGET_UPDATE_SUCCESS:
      return { widget: action.payload };

    case WIDGET_UPDATE_FAIL:
      return { error: action.payload };

    case WIDGET_UPDATE_RESET:
      return { widget: {} };

    default:
      return state;
  }
};
