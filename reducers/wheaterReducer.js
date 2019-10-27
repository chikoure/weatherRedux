import rc from '../constants/redux-constants';

const initialState = {
  data: {},
  sys: {},
  main: {},
  weather: [],
  loading: false,
  error: false
};

export default wheatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case rc.WHEATER_SUCCESS:
      console.log(('the tSTATE', state));
      console.log(('the aCTIONNN', action));
      const dato = action.result.data;

      console.log('theDATAO', dato.weather);
      return {
        ...state,
        data: dato,
        sys: dato.sys,
        weather: dato.weather[0],
        main: dato.main,
        loading: false
      };
    case rc.WHEATER_LOAD:
      return {
        ...state,
        loading: true
      };
    case rc.WHEATER_FAIL:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
