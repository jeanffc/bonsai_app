import { movieService } from "../services";

// Action Types
export const SET_MOVIE_LIST = "movies/SET_MOVIE_LIST";
export const SET_MOVIE_DETAILS = "movies/SET_MOVIE_DETAILS";
export const SET_MOVIE_PAGINATION = "movies/SET_MOVIE_PAGINATION";
export const SET_CART = "movies/SET_CART";
export const REMOVE_FROM_CART = "movies/REMOVE_FROM_CART";

// Initial State
export const initialState = {
  movies: [],
  movie: {},
  pagination: {
    skip: 0,
    limit: 12
  },
  cart: []
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MOVIE_LIST:
      return {
        ...state,
        movies: action.data
      };

    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.data
      };

    case SET_MOVIE_PAGINATION:
      return {
        ...state,
        pagination: { ...state.pagination, skip: action.data }
      };

    case SET_CART:
      return {
        ...state,
        cart: action.data
      };

    default:
      return state;
  }
};

// Action Creators
