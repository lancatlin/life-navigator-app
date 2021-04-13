import * as SecureStore from 'expo-secure-store';
import createDataContext from './createDataContext';
import api from '../api/api';

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        token: action.payload,
        isLoading: false,
      };

    case 'SIGN_IN':
      return {
        ...state,
        token: action.payload,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        token: null,
        errorMsg: '',
      };

    case 'ERROR':
      return {
        ...state,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

const restoreToken = (dispatch) => async () => {
  try {
    const token = await SecureStore.getItemAsync('TOKEN');
    dispatch({ type: 'RESTORE_TOKEN', payload: token });
    return true;
  } catch (err) {
    return false;
  }
};

const signIn = (dispatch) => async (email, password) => {
  try {
    const response = await api.post('/signin', { email, password });
    await SecureStore.setItemAsync('TOKEN', response.data.token);
    dispatch({ type: 'SIGN_IN', payload: response.data.token });
    console.log(response.data.token);
  } catch (err) {
    dispatch({ type: 'ERROR', action: err.message });
    console.log(err);
  }
};

const signUp = (dispatch) => async (email, password) => {
  try {
    const response = await api.post('/signup', { email, password });
    await SecureStore.setItemAsync('TOKEN', response.data.token);
    dispatch({ type: 'SIGN_IN', payload: response.data.token });
    console.log(response.data.token);
  } catch (err) {
    dispatch({ type: 'ERROR', action: err.message });
    console.log(err);
  }
};

const signOut = (dispatch) => async () => {
  dispatch({ type: 'SIGN_OUT' });
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    restoreToken,
    signIn,
    signUp,
    signOut,
  },
  {
    token: null,
    isLoading: true,
    isSignout: true,
    errorMsg: '',
  },
);
