import React, { Fragment, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const LeagueSlot = ({ pokemon_1, pokemon_2 = null }) => {
  const [totalSlots, setTotalSlots] = useState(0);

  useEffect(() => {
    let total = 0;
    if (pokemon_1 != null) {
      total += pokemon_1.totalStats;
    }
    if (pokemon_2 != null) {
      total += pokemon_2.totalStats;
    }
    setTotalSlots(total);
  }, [pokemon_1, pokemon_2]);

  return (
    <Fragment>
      {pokemon_1 != null && (
        <Card className='mt-3'>
          <Card.Body>
            <Card.Text>
              <div className='row'>
                <div className='col-6'>
                  <h4>{pokemon_1.name}</h4>
                  <h5>Type: {pokemon_1.type}</h5>
                  <hr />
                  <div className='row'>
                    <div className='col-6'>
                      <h6>Attack: {pokemon_1.atk}</h6>
                    </div>
                    <div className='col-6'>
                      <h6>Defense: {pokemon_1.def}</h6>
                    </div>
                  </div>
                  <h6>Speed: {pokemon_1.spd}</h6>
                  <h4>Overall: {pokemon_1.totalStats}</h4>
                </div>
                {pokemon_2 != null && (
                  <div className='col-6'>
                    <h4>{pokemon_2.name}</h4>
                    <h5>Type: {pokemon_2.type}</h5>
                    <hr />
                    <div className='row'>
                      <div className='col-6'>
                        <h6>Attack: {pokemon_2.atk}</h6>
                      </div>
                      <div className='col-6'>
                        <h6>Defense: {pokemon_2.def}</h6>
                      </div>
                    </div>
                    <h6>Speed: {pokemon_2.spd}</h6>
                    <h4>Overall: {pokemon_2.totalStats}</h4>
                  </div>
                )}
              </div>
              <hr />
              <div>
                <h4>Total: {totalSlots}</h4>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Fragment>
  );
};

export default LeagueSlot;
