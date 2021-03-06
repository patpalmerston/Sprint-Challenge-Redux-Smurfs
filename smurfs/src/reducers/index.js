//Reducers

import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      }

    case FETCH_SMURF_SUCCESS:
    console.log(action.payload.results)
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...action.payload]
      }

      case FETCH_SMURF_FAILURE:
        return {
          ...state,
          error: action.payload
        }

      case ADD_SMURF_START:
        return {
          ...state,
          addingSmurf: true
        }

      case ADD_SMURF_SUCCESS:
      console.log(action.payload.results)
        return {
          ...state,
          addingSmurf: false,
          smurfs: [...action.payload]
        }

      case ADD_SMURF_FAILURE:
      
        return {
          ...state,
          addingSmurf: false,
          error: action.payload
        }

      default:
        return state;
  }
}

export default reducer;
