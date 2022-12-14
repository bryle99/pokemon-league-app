import React, { Fragment, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LeagueContext from '../../../context/league/LeagueContext';
import { Link } from 'react-router-dom';
import moment from 'moment';

const LeagueDisplay = () => {
  const leagueContext = useContext(LeagueContext);
  const { leagues, getLeagues, setSelectedLeague } = leagueContext;

  useEffect(() => {
    getLeagues();
  }, []);

  return (
    <div className='d-flex flex-wrap'>
      {leagues ?
        leagues.map((item, key) => (
          <Link
            to='/league/view'
            style={{ textDecoration: 'none', color: 'black' }}
            onClick={() => setSelectedLeague(item)}
            key={key}
          >
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img
                variant='top'
                src='images/league_default.jpeg'
                style={{ maxHeight: '200px' }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Location: {item.location} <br />
                  Terrain: {item.terrain} <br />
                  Date: {moment(item.date).format('MM/DD/YYYY')} <br />
                </Card.Text>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Link>
        )) : 'Loading...'}
    </div>
  );
};

export default LeagueDisplay;
