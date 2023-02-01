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

export const dataListReducers = (state = { data: [] }, action) => {
  switch (action.type) {
    case DATA_LIST_REQUEST:
      return { data: [] };

    case DATA_LIST_SUCCESS:
      return { data: action.payload };

    case DATA_LIST_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const dataDashboardReducers = (state = { data: [] }, action) => {
  switch (action.type) {
    case DATA_DASHBOARD_REQUEST:
      return { data: [] };

    case DATA_DASHBOARD_SUCCESS:
      return { data: action.payload };

    case DATA_DASHBOARD_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const dataCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DATA_CREATE_REQUEST:
      return { loading: true };

    case DATA_CREATE_SUCCESS:
      return { loading: false, success: true, data: action.payload };

    case DATA_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
