import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground } from 'react-native';

const City = () => {
    return(
        <SafeAreaView style = {styles.container}>
            <ImageBackground
                source = {require('../../assets/ankara-background.jpg')}
                style ={styles.image}
            >
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex:1
    } 
})
export default City;