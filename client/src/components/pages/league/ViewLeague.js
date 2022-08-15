import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import LeagueContext from '../../../context/league/LeagueContext';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

const ViewLeague = () => {
  const leagueContext = useContext(LeagueContext);
  const { selectedLeague } = leagueContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedLeague == null) {
      navigate('/');
    }
  }, [selectedLeague]);

  return (
    <div className='mx-auto'>
      {selectedLeague && (
        <div className='row'>
          <div className='col-6'>
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
                  <h4>Maximum Stats Allowed: {selectedLeague.maxStatsLimit}</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-6'></div>
        </div>
      )}
    </div>
  );
};

export default ViewLeague;
