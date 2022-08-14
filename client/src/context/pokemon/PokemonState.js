import React, { useReducer } from 'react';
import axios from 'axios';
import PokemonContext from './PokemonContext';
import pokemonReducer from './PokemonReducer';
import {
  ADD_POKEMON,
  DELETE_POKEMON,
  GET_POKEMON,
  GET_POKEMONS,
  UPDATE_POKEMON,
  FILTER_POKEMONS,
} from '../types';

const PokemonState = (props) => {
  const initialState = {
    pokemons: [],
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // add contact
  const addPokemon = async (data) => {
    const config = {
      // header in axios (for content-type and etc)
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      // no need to enter localhost:5000 for every request because of proxy in package.json
      const res = await axios.post(
        'http://localhost:5000/api/pokemon',
        data,
        config
      );

      // dispatch({ type: ADD_POKEMON, payload: res.data });
    } catch (error) {}
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        addPokemon,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
