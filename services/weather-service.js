import axios from 'axios';

const key = '3d13d25c0c34fa3c3db183ad6b8cdff4';
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;

export default class WeatherService {
  static getWeatherHome = async (city = 'marseille') => {
    const dataDog = await axios.get(`${url}&q=${city}`);
    return dataDog;

    /* return {
             weather: {
                 main: 'Clear',
                 description: `Il fait beau aujourd'hui`
             },
             main: {
                 temp: '13',
                 temp_min: '13',
                 temp_max: '21',
                 humidity: '92',
                 pressure: '1009'
             },
             wind: {
                 speed: '10'
             },
             sys: {
                 sunrise: 1560281377,
                 sunset: 1560333478
             },
             name: 'Nanterre'
         };*/
  };
}
