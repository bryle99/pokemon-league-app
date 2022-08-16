import React, { Fragment, useContext, useEffect, useState } from 'react';
import LeagueContext from '../../../context/league/LeagueContext';
import PokemonContext from '../../../context/pokemon/PokemonContext';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../../../config/config.json';
import { errorSwal } from '../../../utils/errorUtill';
import LeagueSlot from '../../page_components/league/LeagueSlot';

const ViewLeague = () => {
  const leagueContext = useContext(LeagueContext);
  const pokemonContext = useContext(PokemonContext);
  const { selectedLeague } = leagueContext;
  const { pokemons } = pokemonContext;
  const navigate = useNavigate();
  const [leagueSlotInput, setLeagueSlotInput] = useState({
    pokemon_id_1: null,
    pokemon_id_2: null,
    pokemon_1: null,
    pokemon_2: null,
  });
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [totalSlotStatsInput, setTotalSlotStatsInput] = useState(0);
  const url = config['api-url'];
  const [leagueSlots, setLeagueSlots] = useState([]);

  useEffect(() => {
    if (selectedLeague == null) {
      navigate('/');
    } else {
      axios
        .get(`${url}/api/league_slot?league_id=${selectedLeague.id}`)
        .then((data) => {
          if (data.data.data) {
            setLeagueSlots(data.data.data);
          }
        });
    }
  }, [selectedLeague]);

  useEffect(() => {
    if (leagueSlotInput.pokemon_id_1 != null) {
      setPokemonsFiltered(
        pokemons.filter((item) => item.id != leagueSlotInput.pokemon_id_1)
      );

      let slot_2 = 0;
      if (
        leagueSlotInput.pokemon_id_2 != null &&
        leagueSlotInput.pokemon_id_2 &&
        leagueSlotInput.pokemon_2
      ) {
        slot_2 = leagueSlotInput.pokemon_2.totalStats;
      }
      setTotalSlotStatsInput(slot_2 + leagueSlotInput.pokemon_1.totalStats);
    }
  }, [leagueSlotInput]);

  const onSubmit = (e) => {
    if (
      leagueSlotInput &&
      selectedLeague.maxStatsLimit >= totalSlotStatsInput
    ) {
      Swal.fire({
        title: 'Please Wait !',
        html: 'data uploading...', // add html attribute if you want or remove
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const config = {
        // header in axios (for content-type and etc)
        header: {
          'Content-Type': 'application/json',
        },
      };

      axios
        .post(
          `${url}/api/league_slot`,
          {
            pokemon_id_1: leagueSlotInput.pokemon_id_1,
            pokemon_id_2: leagueSlotInput.pokemon_id_2,
            league_id: selectedLeague.id,
          },
          config
        )
        .then((data) => {
          if (data.data.success) {
            Swal.fire({
              title: 'Successfully added League Slot.',
              icon: 'success',
            });
            setLeagueSlots([...leagueSlots, leagueSlotInput]);
            setLeagueSlotInput({
              pokemon_id_1: null,
              pokemon_id_2: null,
              pokemon_1: null,
              pokemon_2: null,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          errorSwal(err);
        });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'League Slot has exceeded League stat limits.',
      });
    }
  };

  return (
    <div className='mx-auto'>
      {selectedLeague && (
        <div className='row'>
          <div className='col-6'>
            <h3 className='text-center mb-3'>League</h3>
            <Card style={{}}>
              <Card.Body>
                <Card.Title>
                  <h1>{selectedLeague.title}</h1>
                </Card.Title>
                <Card.Text>
                  <h4>Location: {selectedLeague.location}</h4>
                  <h4>Terrain: {selectedLeague.terrain}</h4>
                  <h4>
                    Date: {moment(selectedLeague.date).format('MM/DD/YYYY')}
                  </h4>
                  <h4>Required Slots: {selectedLeague.reqSlots}</h4>
                  <h4>Slot Max Stats: {selectedLeague.maxStatsLimit}</h4>
                </Card.Text>
              </Card.Body>
            </Card>

            {pokemons &&
              pokemons.length > 0 &&
              leagueSlots.length < selectedLeague.reqSlots && (
                <div className='mt-3 mb-3'>
                  <h2>Add a Slot</h2>
                  {leagueSlotInput.pokemon_id_1 != null && (
                    <div class='d-flex justify-content-end mb-2'>
                      <Button variant='success' onClick={onSubmit}>
                        Add
                      </Button>
                    </div>
                  )}
                  <div className='row'>
                    <div className='col-6'>
                      <select
                        class='form-control'
                        onChange={(e) =>
                          setLeagueSlotInput({
                            ...leagueSlotInput,
                            pokemon_id_1: e.target.value,
                            pokemon_1: pokemons.find(
                              (item) => item.id == e.target.value
                            ),
                          })
                        }
                      >
                        <option value={null} selected disabled>
                          Select a Pokemon
                        </option>
                        {pokemons.map((item) => (
                          <option value={item.id}>
                            {item.name} - {item.type}
                          </option>
                        ))}
                      </select>
                    </div>
                    {leagueSlotInput.pokemon_id_1 != null &&
                      leagueSlotInput.pokemon_1 != null && (
                        <Fragment>
                          <div className='col-6'>
                            <select
                              class='form-control'
                              onChange={(e) =>
                                setLeagueSlotInput({
                                  ...leagueSlotInput,
                                  pokemon_id_2: e.target.value,
                                  pokemon_2: e.target.value
                                    ? pokemons.find(
                                      (item) => item.id == e.target.value
                                    )
                                    : e.target.value,
                                })
                              }
                            >
                              <option value={0} selected>
                                None
                              </option>
                              {pokemonsFiltered.map((item) => (
                                <option value={item.id}>
                                  {item.name} - {item.type}
                                </option>
                              ))}
                            </select>
                          </div>
                          <LeagueSlot
                            pokemon_1={leagueSlotInput.pokemon_1}
                            pokemon_2={leagueSlotInput.pokemon_2}
                          />
                        </Fragment>
                      )}
                  </div>
                </div>
              )}
          </div>
          <div className='col-6 mb-5'>
            <h3 className='text-center mb-3'>League Slots</h3>
            {leagueSlots &&
              leagueSlots.length > 0 &&
              leagueSlots.map((item) => (
                <LeagueSlot
                  pokemon_1={item.pokemon_1}
                  pokemon_2={item.pokemon_2}
                ></LeagueSlot>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewLeague;
