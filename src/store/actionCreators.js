import { ITEMS_ACTIONS } from "./constants";
import { getItems } from "../api";

const fetchStart = () => ({ type: ITEMS_ACTIONS.fetchStart });
const fetchError = () => ({ type: ITEMS_ACTIONS.fetchError });
const fetchSuccess = (result) => ({
  type: ITEMS_ACTIONS.fetchSuccess,
  payload: result,
});

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
      const result = await getItems();
      dispatch(fetchSuccess(result.data));
    } catch {
      dispatch(fetchError());
    }
  };
};
