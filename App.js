import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permission';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  /*
  if(loading){
    return (
      <View style = {styles.container}>
        <ActivityIndicator size = {'large'} color = {'blue'}/>
      </View>
    )
  }
  */

  useEffect(() => {
    (async() => {
      //let { status } = await Location.requestForegroundPermissionsAsync
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if(status !== 'granted'){
        setError('permission to access location was denied')
        console.log('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if(location){
    console.log(location)
  }

  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex:1
  }
})
export default App;