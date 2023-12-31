import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const RowText = (props) => {
    const { messageOne, messageTwo, messageOneStyles, messageTwoStyles, containerStyles } = props
    return(
        <View style = {containerStyles}>
          <Text style = {messageOneStyles}>{messageOne}</Text>
          <Text style = {messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default RowText;