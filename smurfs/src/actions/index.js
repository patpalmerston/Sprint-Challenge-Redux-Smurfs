//Actions

import axios from 'axios';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });

  axios.get('http://localhost:3333/smurfs')
  .then(res => dispatch({
      type: FETCH_SMURF_SUCCESS,
      payload: res.data
  }))
  .catch(err => dispatch({
    type: FETCH_SMURF_FAILURE,
    payload: 'Error! Unable to Fetch API'
  }))
}

export const addSmurf = smurf => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
    return dispatch => {
      dispatch({ type: ADD_SMURF_START });
      newSmurf
        .then(({ data }) => {
          dispatch({ type: ADD_SMURF_SUCCESS, payload: data })
        })
        .catch(err => {
          dispatch({ type: ADD_SMURF_FAILURE,
          payload: 'Error unable to Create Smurf' })
        });
    };
};
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
