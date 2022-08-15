import React, { Fragment, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LeagueContext from '../../../context/league/LeagueContext';

const LeagueDisplay = () => {
  const leagueContext = useContext(LeagueContext);
  const { leagues, getLeagues } = leagueContext;

  useEffect(() => {
    getLeagues();
  }, []);

  return (
    <div className='d-flex flex-wrap'>
      {leagues &&
        leagues.map((item, key) => (
          <Card style={{ width: '18rem', margin: '10px' }} key={key}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>Location: {item.location}</Card.Text>
              <Card.Text>Terrain: {item.terrain}</Card.Text>
              <Button variant='primary'>Details</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default LeagueDisplay;
