import React, { useReducer } from 'react';
import axios from 'axios';
import LeagueContext from './LeagueContext';
import leagueReducer from './LeagueReducer';
import {
  ADD_LEAGUE,
  DELETE_LEAGUE,
  SET_SELECTED_LEAGUE,
  GET_LEAGUES,
  UPDATE_LEAGUE,
  CLEAR_INSERTED_LEAGUE,
} from '../types';
import Swal from 'sweetalert2';
import config from '../../config/config.json';
import { errorSwal } from '../../utils/errorUtill';

const LeagueState = (props) => {
  const initialState = {
    leagues: null,
    insertedLeague: null,
    selectedLeague: null,
  };
  const url = config['api-url'];
  const [state, dispatch] = useReducer(leagueReducer, initialState);

  const getLeagues = async (data) => {
    const config = {
      // header in axios (for content-type and etc)
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      // no need to enter localhost:5000 for every request because of proxy in package.json
      const res = await axios.get(`${url}/api/league`, data, config);

      dispatch({ type: GET_LEAGUES, payload: res.data.data });
    } catch (error) {
      errorSwal(error);
    }
  };

  // add contact
  const addLeague = async (data) => {
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

      const res = await axios.post(`${url}/api/league`, data, config);

      if (res.data) {
        Swal.close();
      }

      dispatch({ type: ADD_LEAGUE, payload: res.data.data });
    } catch (error) {
      errorSwal(error);
    }
  };

  const setSelectedLeague = (data) => {
    dispatch({ type: SET_SELECTED_LEAGUE, payload: data });
  };

  const clearInsertedLeague = () => {
    dispatch({ type: CLEAR_INSERTED_LEAGUE });
  };

  return (
    <LeagueContext.Provider
      value={{
        leagues: state.leagues,
        insertedLeague: state.insertedLeague,
        selectedLeague: state.selectedLeague,
        addLeague,
        getLeagues,
        clearInsertedLeague,
        setSelectedLeague,
      }}
    >
      {props.children}
    </LeagueContext.Provider>
  );
};

export default LeagueState;
