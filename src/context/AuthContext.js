import SecureStore from 'expo-secure-store';
import createDataContext from './createDataContext';

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

    case 'SIGN_UP':
      return {
        ...state,
        token: action.payload,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        token: null,
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

const signIn = (dispatch) => async () => {
  dispatch({ type: 'SIGN_IN', payload: 'dummy_token' });
};

const signUp = (dispatch) => async () => {
  dispatch({ type: 'SIGN_UP', payload: 'dummy_token' });
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
  },
);
