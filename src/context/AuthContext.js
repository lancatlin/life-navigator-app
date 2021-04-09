import SecureStore from 'expo-secure-store';
import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        token: state.payload,
        isLoading: false,
      };

    case 'SIGN_IN':
      return {
        ...state,
        token: state.payload,
        isSignout: false,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        token: null,
        isSignout: true,
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

const signOut = (dispatch) => async () => {
  dispatch({ type: 'SIGN_OUT' });
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    restoreToken,
    signIn,
    signOut,
  },
  {
    token: null,
    isLoading: true,
    isSignout: true,
  },
);
