import React, { Fragment, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PokemonContext from '../../../context/pokemon/PokemonContext';

const PokemonDisplay = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemons, getPokemons } = pokemonContext;

  useEffect(() => {
    if (pokemons.length == 0) {
      getPokemons();
    }
  }, [pokemons]);

  return (
    <div className='d-flex flex-wrap'>
      {pokemons.map((item) => (
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Type: {item.type}</Card.Text>
            <Button variant='primary'>Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PokemonDisplay;
