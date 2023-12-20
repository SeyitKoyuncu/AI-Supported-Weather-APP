import React from 'react';
import CurrentWeather from './src/screenss/CurrentWeather';
import UpcomingWeather from './src/screenss/UpcomingWeather';
import City from './src/screenss/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import Tabs from './src/components/Tabs';

const App = () => {
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

export default App;