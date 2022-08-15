import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import LeagueContext from '../../../context/league/LeagueContext';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const CreateLeague = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const leagueContext = useContext(LeagueContext);
  const { addLeague, insertedLeague, clearInsertedLeague } = leagueContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (insertedLeague != null) {
      navigate('/');
      clearInsertedLeague();
    }
    console.log(insertedLeague);
  }, [insertedLeague]);

  const onSubmit = (data) =>
    addLeague({ ...data, date: moment(data.date).format('YYYY-MM-DD') });

  return (
    <div className='mx-auto w-50'>
      <div className='d-flex'>
        <h1>Add New League</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label>Title</label>
          <input
            className={'form-control ' + (errors.title ? 'is-invalid' : '')}
            {...register('title', { required: 'This is required.' })}
          />
          <div className='invalid-feedback'>{errors.title?.message}</div>
        </div>
        <div className='form-group'>
          <label>Location</label>
          <input
            className={'form-control ' + (errors.location ? 'is-invalid' : '')}
            {...register('location', { required: 'This is required.' })}
          />
          <div className='invalid-feedback'>{errors.location?.message}</div>
        </div>
        <div className='form-group'>
          <label>Terrain</label>
          <input
            className={'form-control ' + (errors.terrain ? 'is-invalid' : '')}
            {...register('terrain', { required: 'This is required.' })}
          />
          <div className='invalid-feedback'>{errors.terrain?.message}</div>
        </div>
        <div className='form-group'>
          <label>Date</label>
          <Controller
            rules={{ required: true }}
            control={control}
            name='date'
            render={({ field }) => {
              return (
                <DatePicker
                  placeholderText='Select date'
                  className={
                    'form-control ' + (errors.date ? 'is-invalid' : '')
                  }
                  dateFormat={'MM/dd/yyyy'}
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              );
            }}
          />
          <div className='invalid-feedback'>{errors.terrain?.message}</div>
        </div>
        <div className='form-group'>
          <label>Required Slots</label>
          <input
            className={'form-control ' + (errors.type ? 'is-invalid' : '')}
            type='number'
            defaultValue={1}
            {...register('reqSlots', { min: 1 })}
            onChange={(e) =>
              (e.target.value = e.target.value <= 0 ? 1 : e.target.value)
            }
          />
          <div className='invalid-feedback'>{errors.reqSlots?.message}</div>
        </div>
        <div className='form-group'>
          <label>maxStatsLimit</label>
          <input
            className={'form-control ' + (errors.type ? 'is-invalid' : '')}
            type='number'
            defaultValue={1}
            {...register('maxStatsLimit', { min: 1 })}
            onChange={(e) =>
              (e.target.value = e.target.value <= 0 ? 1 : e.target.value)
            }
          />
          <div className='invalid-feedback'>
            {errors.maxStatsLimit?.message}
          </div>
        </div>
        <br />
        <input type='submit' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default CreateLeague;
