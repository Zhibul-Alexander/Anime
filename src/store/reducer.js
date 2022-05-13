import { LOAD_STATUSES, ITEMS_ACTIONS } from "./constants";
import { combineReducers } from "redux";

const INITIAL_ITEMS_STATE = {
  data: {},
  loadStatus: LOAD_STATUSES.UNKNOWN,
};

const itemsReducer = (state = INITIAL_ITEMS_STATE, action) => {
  switch (action.type) {
    case ITEMS_ACTIONS.fetchStart: {
      return {
        data: state.data,
        loadStatus: LOAD_STATUSES.LOADING,
      };
    }
    case ITEMS_ACTIONS.fetchError: {
      return {
        data: {},
        loadStatus: LOAD_STATUSES.ERROR,
      };
    }
    case ITEMS_ACTIONS.fetchSuccess: {
      return {
        data: action.payload,
        loadStatus: LOAD_STATUSES.LOADED,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ itemsReducer });
