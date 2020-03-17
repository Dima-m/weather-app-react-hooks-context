import { SET_LOCATION, CLEAR_LOCATION, SEARCH_CITY, CLEAR_CITY, SET_ERROR } from './types';

export default (state, action) => {
  switch (action.type) {

    case SEARCH_CITY:
      return {
        ...state,
        city: action.payload
      };

    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
  
    case CLEAR_LOCATION:
      return {
        ...state,
        location: ''
      };

    case CLEAR_CITY:
      return {
        ...state,
        city: {},
        cityError: ''
      };

    case SET_ERROR:
      return {
        ...state,
        cityError: action.payload
      };

    default:
      return state;
  }
};
