import rc from '../constants/redux-constants';
import Services from '../services';

export const getWeather = () => ({
  types: [rc.WHEATER_LOAD, rc.WHEATER_SUCCESS, rc.WHEATER_FAIL],
  promise: () => Services.WeatherService.getWeatherHome()
});
