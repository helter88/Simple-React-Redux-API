import axios from 'axios';
const initialState = {
  loading: false,
  data: [],
  error: '',
};
export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_REQUEST' });

    const sendRequest = async () => {
      const request = await axios('https://jsonplaceholder.typicode.com/users');
      return request.data;
    };

    try {
      const userData = await sendRequest();
      dispatch({ type: 'FETCH_SUCCESS', payload: userData });
    } catch (err) {
      dispatch({ type: 'FETCH_FAILURE', payload: err.message });
    }
  };
};
