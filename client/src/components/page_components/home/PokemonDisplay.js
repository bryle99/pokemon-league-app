import React, { Fragment, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PokemonContext from '../../../context/pokemon/PokemonContext';
import { Link } from 'react-router-dom';

const PokemonDisplay = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemons, getPokemons, setSelectedPokemon } = pokemonContext;

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className='d-flex flex-wrap'>
      {pokemons &&
        pokemons.map((item, key) => (
          <Link
            to='/pokemon/view'
            style={{ textDecoration: 'none', color: 'black' }}
            onClick={() => setSelectedPokemon(item)}
            key={key}
          >
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Type: {item.type}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
    </div>
  );
};

export default PokemonDisplay;
