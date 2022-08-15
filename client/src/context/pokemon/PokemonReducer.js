import {
  ADD_POKEMON,
  DELETE_POKEMON,
  SET_SELECTED_POKEMON,
  GET_POKEMONS,
  UPDATE_POKEMON,
  FILTER_POKEMONS,
  CLEAR_INSERTED_POKEMON,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ADD_POKEMON:
      return {
        ...state,
        insertedPokemon: action.payload,
      };
    case CLEAR_INSERTED_POKEMON:
      return {
        ...state,
        insertedPokemon: null,
      };
    case SET_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    // case UPDATE_POKEMON:
    //   return {
    //     ...state,
    //     pokemons: state.pokemons.map((pokemon) =>
    //       pokemon.id === action.payload.id ? action.payload : pokemon
    //     ),
    //   };
    // case DELETE_POKEMON:
    //   return {
    //     ...state,
    //     pokemons: state.pokemons.filter(
    //       (pokemon) => pokemon.id !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
};
