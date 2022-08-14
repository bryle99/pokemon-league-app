import React from 'react';
import PokemonDisplay from '../page_components/home/PokemonDisplay';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='mt-5'>
        <div className='d-flex'>
          <div className='flex-grow-1 '>
            <h1>Pokemons</h1>
          </div>
          <div>
            <Link to='/pokemon/create'>
              <Button variant='outline-success'>Add New Pokemon</Button>
            </Link>
          </div>
        </div>
        <br />
        <PokemonDisplay />
      </div>
      <div className='mt-5'>
        <div className='d-flex'>
          <div className='flex-grow-1 '>
            <h1>Leagues</h1>
          </div>
          <div>
            <Link to='/league/create'>
              <Button variant='outline-success'>Add New League</Button>
            </Link>
          </div>
        </div>
        <br />
        <PokemonDisplay />
      </div>
    </div>
  );
};

export default Home;
