import React from "react";
import { SafeAreaView, Text, StyleSheet,
        ImageBackground, StatusBar, View} from 'react-native';
import IconText from "../components/IconText";

const City = () => {
    const { container, cityName, cityText, countryName,
            populationWrapper, populationText,
            riseSetWrapper, riseSetText, rowLayout, image } = styles
    return(
        <SafeAreaView style = {container}>
            <ImageBackground
                source = {require('../../assets/ankara-background.jpg')}
                style ={image}
            >
                <Text style = {[cityName, cityText]}> Ankara</Text>
                <Text style = {[countryName, cityText]}> Turkey </Text>

                <View style = {[populationWrapper, rowLayout]}>
                    <IconText iconName = {'user'}
                    iconColor = {'red'}
                    bodyText = {8000}
                    bodyTextStyles = {populationText}/>
                </View>

                <View style = {[riseSetWrapper, rowLayout]}>
                    <IconText iconName = {'sunrise'}
                    iconColor = {'white'}
                    bodyText = {'10:43:12am'}
                    bodyTextStyles = {riseSetText}/>

                    <IconText iconName = {'sunset'}
                    iconColor = {'white'}
                    bodyText = {'17:43:12pm'}
                    bodyTextStyles = {riseSetText}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex:1
    },
    cityName:{
        fontSize: 40,
    },
    countryName:{
        fontSize: 30,
    },
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper:{
        justifyContent: 'center',
        marginTop: 30
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper:{
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white',
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City;