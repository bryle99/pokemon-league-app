import {
  ADD_LEAGUE,
  DELETE_LEAGUE,
  GET_LEAGUE,
  GET_LEAGUES,
  UPDATE_LEAGUE,
  CLEAR_INSERTED_LEAGUE,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LEAGUES:
      return {
        ...state,
        leagues: action.payload,
      };
    case ADD_LEAGUE:
      return {
        ...state,
        insertedLeague: action.payload,
      };
    case CLEAR_INSERTED_LEAGUE:
      return {
        ...state,
        insertedLeague: null,
      };
    // case UPDATE_LEAGUE:
    //   return {
    //     ...state,
    //     leagues: state.leagues.map((item) =>
    //       item.id === action.payload.id ? action.payload : item
    //     ),
    //   };
    // case DELETE_LEAGUE:
    //   return {
    //     ...state,
    //     leagues: state.leagues.filter(
    //       (item) => item.id !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
};
