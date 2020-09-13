import {
  DATA_START,
  DATA_SUCCESS,
  DATA_ERROR,
} from '../actionTypes';

const INIT_STATE = {
  loading: false,
  status: false,
  data: '',
  error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
      case DATA_START: {
          return {
              ...state,
              loading: true,
              data: '',
              error: '',
          };
      }
      case DATA_SUCCESS: {
          return {
              ...state,
              status: true,
              loading: false,
              data: action.payload || '',
              error: '',
          };
      }
      case DATA_ERROR: {
          return {
              ...state,
              status: false,
              loading: false,
              data: '',
              error: action.payload || ''
          };
      }
      default:
          return state;
  }
}