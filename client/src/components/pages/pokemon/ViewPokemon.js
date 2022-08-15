import React, { useContext, useEffect } from 'react';
import PokemonContext from '../../../context/pokemon/PokemonContext';
import { useNavigate } from 'react-router-dom';

const ViewPokemon = () => {
  const pokemonContext = useContext(PokemonContext);
  const { selectedPokemon } = pokemonContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPokemon == null) {
      navigate('/');
    }
  }, [selectedPokemon]);

  return (
    <div className='mx-auto w-50'>
      {selectedPokemon && (
        <div className=''>
          <h1>{selectedPokemon.name}</h1>
          <h4>Type: {selectedPokemon.type}</h4>
          <hr />
          <div className='row'>
            <div className='col-6'>
              <h4>Attack: {selectedPokemon.atk}</h4>
              <h4>Defense: {selectedPokemon.def}</h4>
              <h4>Speed: {selectedPokemon.spd}</h4>
            </div>
            <div className='col-6'>
              <h2>Overall: {selectedPokemon.totalStats}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPokemon;
