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
  CLEAR_INSERTED_POKEMON,
} from '../types';
import Swal from 'sweetalert2';

const PokemonState = (props) => {
  const initialState = {
    pokemons: [],
    insertedPokemon: null,
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
      Swal.fire({
        title: 'Please Wait !',
        html: 'data uploading...', // add html attribute if you want or remove
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // no need to enter localhost:5000 for every request because of proxy in package.json
      const res = await axios.post(
        'http://localhost:5000/api/pokemon',
        data,
        config
      );

      if (res.data) {
        Swal.close();
      }

      dispatch({ type: ADD_POKEMON, payload: res.data.data });
    } catch (error) {}
  };

  const clearInsertedPokemon = () => {
    dispatch({ type: CLEAR_INSERTED_POKEMON });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        insertedPokemon: state.insertedPokemon,
        addPokemon,
        clearInsertedPokemon,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
