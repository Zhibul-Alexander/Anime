import { LOAD_STATUSES } from "./constants";

export const getItems = (state) => state.itemsReducer.data;
export const getItemsLoadStatus = (state) => state.itemsReducer.loadStatus;

export const isLoading = (state) =>
  getItemsLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isError = (state) =>
  getItemsLoadStatus(state) === LOAD_STATUSES.ERROR;
export const isLoaded = (state) =>
  getItemsLoadStatus(state) === LOAD_STATUSES.LOADED;
