import {
  ADD_POKEMON,
  DELETE_POKEMON,
  GET_POKEMON,
  GET_POKEMONS,
  UPDATE_POKEMON,
  FILTER_POKEMONS,
  CLEAR_INSERTED_POKEMON,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
        insertedPokemon: action.payload,
      };
    case CLEAR_INSERTED_POKEMON:
      return {
        ...state,
        insertedPokemon: null,
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