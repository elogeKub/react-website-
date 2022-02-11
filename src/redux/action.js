export const ADD_DATA = "@ADD_DATA";
export const DELETE_DATA = "@DELETE_DATA";
export const UPDATE_DATA = "@UPDATE_DATA";
export const SAVE_DATA = "@SAVE_DATA";

export const add_data = (data) => (dispatch) => {
  dispatch({
    type: ADD_DATA,
    payload: data,
  });
};
export const update_data = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_DATA,
    payload: data,
  });
};

export const delete_data = (id) => (dispatch) => {
  dispatch({
    type: DELETE_DATA,
    payload: id,
  });
};
