import { FETCH_NEWS, IS_LOADING } from "./type";

const initialState = {
  news: [],
  isLoading:false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
