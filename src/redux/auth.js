const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken,
});

const initialState = {
  authToken: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.authToken,
      };
    default:
      return state;
  }
};
