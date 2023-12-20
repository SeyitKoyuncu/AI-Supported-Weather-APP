import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highLowWrapper,
          highLow, bodyWrapper, description, message } = styles
  return(
    <SafeAreaView style={wrapper}>
      <View style = {container}>
      <Feather name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style = {temp}>6 </Text>
        <Text style = {feels}>Feels like 5</Text>

        <RowText messageOne = {'High: 8'} messageTwo = {'Low: 5'}
        containerStyles = {highLowWrapper}
        messageOneStyles = {highLow}
        messageTwoStyles = {highLow}/>

        <RowText messageOne = {'Its sunny'} messageTwo = {weatherType['Clear'].message}
        containerStyles = {bodyWrapper}
        messageOneStyles = {description}
        messageTwoStyles = {message}/>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper:{
    backgroundColor: 'pink',
    flex:1
  },
  temp:{
    color: 'black',
    fontSize: 48
  },
  feels:{
    color: 'black',
    fontSize: 30
  },
  highLow:{
    color: 'black',
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  description:{
    fontSize: 48,
    paddingLeft: 25,
  },
  message:{
    fontSize: 30,
    paddingLeft: 25,
    marginBottom: 40
  }
})

export default CurrentWeather
