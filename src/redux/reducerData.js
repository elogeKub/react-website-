import { ADD_DATA, UPDATE_DATA, DELETE_DATA } from "./action";

const initialState = {
  list: [],
};

export default function reducerData(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case UPDATE_DATA:
      return {
        ...state,
        list: [
          ...state.list,
          state.list.map((data) => {
            return data.id === action.payload.id ? action.payload : data;
          }),
        ],
      };
    case DELETE_DATA:
      return {
        ...state,
        list: [
          ...state.list,
          state.list.filter((data) => data.id !== action.payload),
        ],
      };

    default:
      return state;
  }
}
