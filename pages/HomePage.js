import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import WeatherService from '../services/weather-service';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from '../actions/wheaterActions';
import Loading from '../components/Loading';

class HomePage extends React.Component {
  serv = new WeatherService();

  constructor(props) {
    super(props);
    // this.getWeather();
  }

  getWeather = async () => {
    await this.props.weatherActions.getWeather();
  };

  componentDidMount() {
    this.getWeather();
    console.log('the props', this.props);
  }

  render() {
    const dataweth = this.props.dataReducer;
    const datasys = this.props.datasysReducer;
    const weather = this.props.dataweatherReducer;
    const main = this.props.datamainReducer;
    console.log(dataweth);
    console.log(datasys);
    return (
      <LinearGradient colors={['#0000ff', '#ffffff']} style={{ flex: 1 }}>
        {!this.props.isLoading ? (
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{ fontSize: 24, fontStyle: 'bold', color: 'white' }}>
                {dataweth.name}
              </Text>
              <Text style={{ color: 'white' }}>Vendredi 11 octobre 2019</Text>
            </View>
            <View
              style={[
                styles[dataweth.main],
                { flex: 1, justifyContent: 'center', alignItems: 'center' }
              ]}>
              <ImgWeather icon={weather.icon} />
              <Text>{main.temp}°c</Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Sunrise time={datasys.sunrise} />
              <Sunset time={datasys.sunset} />
            </View>
          </View>
        ) : (
          <Loading displayColor='orange'>
            <Text>connexion au serveur...</Text>
          </Loading>
        )}
      </LinearGradient>
    );
  }
}

const ImgWeather = (props) => {
  return (
    <Image
      style={{ width: 80, height: 80 }}
      source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }}
    />
  );
};

const Sunrise = (props) => {
  const dt = new Date(props.time * 1000);
  return <Text> {`${dt.getHours()}:${dt.getMinutes()}`}</Text>;
};

const Sunset = (props) => {
  const dt = new Date(props.time * 1000);
  return <Text> {`${dt.getHours()}:${dt.getMinutes()}`}</Text>;
};

mapStateToProps = (state) => ({
  dataReducer: state.weatherReducer.data,
  datasysReducer: state.weatherReducer.sys,
  dataweatherReducer: state.weatherReducer.weather,
  datamainReducer: state.weatherReducer.main,
  isLoading: state.weatherReducer.loading
});
mapDispatchToProps = (dispatch) => ({
  weatherActions: bindActionCreators(weatherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

const styles = StyleSheet.create({
  Clear: {
    color: 'blue'
  },
  Sunny: {
    color: 'yellow'
  }
});
