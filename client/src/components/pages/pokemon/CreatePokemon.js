import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PokemonContext from '../../../context/pokemon/PokemonContext';

const CreatePokemon = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const pokemonContext = useContext(PokemonContext);
  const { addPokemon } = pokemonContext;

  const onSubmit = (data) => addPokemon(data);

  return (
    <div className='mx-auto w-50'>
      <div className='d-flex'>
        <h1>Add New Pokemon</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class='form-group'>
          <label>Name</label>
          <input
            class={'form-control ' + (errors.name ? 'is-invalid' : '')}
            {...register('name', { required: 'This is required.' })}
          />
          <div className='invalid-feedback'>{errors.name?.message}</div>
        </div>
        <div class='form-group'>
          <label>Type</label>
          <input
            class={'form-control ' + (errors.type ? 'is-invalid' : '')}
            {...register('type', { required: 'This is required.' })}
          />
          <div className='invalid-feedback'>{errors.type?.message}</div>
        </div>
        <div class='form-group'>
          <label>Attack</label>
          <input
            class={'form-control ' + (errors.type ? 'is-invalid' : '')}
            type='number'
            defaultValue={1}
            {...register('atk', { min: 1 })}
          />
          <div className='invalid-feedback'>{errors.atk?.message}</div>
        </div>
        <div class='form-group'>
          <label>Defense</label>
          <input
            class={'form-control ' + (errors.type ? 'is-invalid' : '')}
            type='number'
            defaultValue={1}
            {...register('def', { min: 1 })}
          />
          <div className='invalid-feedback'>{errors.def?.message}</div>
        </div>
        <div class='form-group'>
          <label>Speed</label>
          <input
            class={'form-control ' + (errors.type ? 'is-invalid' : '')}
            type='number'
            defaultValue={1}
            {...register('spd', { min: 1 })}
          />
          <div className='invalid-feedback'>{errors.spd?.message}</div>
        </div>
        <br />
        <input type='submit' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default CreatePokemon;
