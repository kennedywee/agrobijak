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

export const scheduleListReducers = (state = { schedules: [] }, action) => {
  switch (action.type) {
    case SCHEDULE_LIST_REQUEST:
      return { schedules: [] };

    case SCHEDULE_LIST_SUCCESS:
      return { schedules: action.payload };

    case SCHEDULE_LIST_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const scheduleDetailsReducers = (state = { schedule: {} }, action) => {
  switch (action.type) {
    case SCHEDULE_DETAILS_REQUEST:
      return { loading: true, ...state };

    case SCHEDULE_DETAILS_SUCCESS:
      return { loading: false, schedule: action.payload };

    case SCHEDULE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const scheduleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SCHEDULE_CREATE_REQUEST:
      return { loading: true };

    case SCHEDULE_CREATE_SUCCESS:
      return { loading: false, success: true, schedule: action.payload };

    case SCHEDULE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case SCHEDULE_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const scheduleUpdateReducer = (state = { schedule: {} }, action) => {
  switch (action.type) {
    case SCHEDULE_UPDATE_REQUEST:
      return { loading: true };

    case SCHEDULE_UPDATE_SUCCESS:
      return { loading: false, success: true, schedule: action.payload };

    case SCHEDULE_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case SCHEDULE_UPDATE_RESET:
      return { schedule: {} };

    default:
      return state;
  }
};

export const scheduleDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SCHEDULE_DELETE_REQUEST:
      return {};

    case SCHEDULE_DELETE_SUCCESS:
      return { success: true };

    case SCHEDULE_DELETE_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
