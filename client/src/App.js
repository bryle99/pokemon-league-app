import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Home from './components/pages/Home';
import Pokemon from './components/pages/pokemon/Pokemon';
import CreatePokemon from './components/pages/pokemon/CreatePokemon';
import League from './components/pages/league/League';
import CreateLeague from './components/pages/league/CreateLeague';
import PokemonState from './context/pokemon/PokemonState';
import LeagueState from './context/league/LeagueState';

const App = () => {
  return (
    <div>
      <PokemonState>
        <LeagueState>
          <Router>
            <Fragment>
              <AppNavbar />
              <div className='container mt-5'>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  {/* pokemon routes */}
                  <Route exact path='/pokemon' element={<Pokemon />} />
                  <Route
                    exact
                    path='/pokemon/create'
                    element={<CreatePokemon />}
                  />
                  {/* league routes */}
                  <Route exact path='/league' element={<League />} />
                  <Route
                    exact
                    path='/league/create'
                    element={<CreateLeague />}
                  />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </LeagueState>
      </PokemonState>
    </div>
  );
};

export default App;
