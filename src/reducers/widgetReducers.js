import {
  WIDGET_LIST_REQUEST,
  WIDGET_LIST_SUCCESS,
  WIDGET_LIST_FAIL,
  WIDGET_CREATE_REQUEST,
  WIDGET_CREATE_SUCCESS,
  WIDGET_CREATE_FAIL,
  WIDGET_CREATE_RESET,
  WIDGET_UPDATE_REQUEST,
  WIDGET_UPDATE_SUCCESS,
  WIDGET_UPDATE_FAIL,
  WIDGET_UPDATE_RESET,
  WIDGET_DELETE_REQUEST,
  WIDGET_DELETE_SUCCESS,
  WIDGET_DELETE_FAIL,
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

export const widgetCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WIDGET_CREATE_REQUEST:
      return { loading: true };

    case WIDGET_CREATE_SUCCESS:
      return { loading: false, success: true, widget: action.payload };

    case WIDGET_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case WIDGET_CREATE_RESET:
      return {};

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

export const widgetDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case WIDGET_DELETE_REQUEST:
      return {};

    case WIDGET_DELETE_SUCCESS:
      return { success: true };

    case WIDGET_DELETE_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
