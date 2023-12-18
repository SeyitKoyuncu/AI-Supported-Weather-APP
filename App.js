import React from 'react';
import {View, StyleSheet} from 'react-native';
import CurrentWeather from './src/screenss/CurrentWeather';
import UpcomingWeather from './src/screenss/UpcomingWeather';
import City from './src/screenss/City';

const App = () => {
  return(
    <View style = {styles.container}>
      <City/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
export default App;