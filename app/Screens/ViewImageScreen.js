import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'

import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function ViewImageScreen() {
  return (
    <View style ={styles.container}>
        <View style ={styles.closeIcon}>
    <MaterialCommunityIcons name='close' color= 'white' size={35}/>
    </View>
    <View style={styles.deleteIcon}> 
    <MaterialCommunityIcons name='trash-cam-outline' color= 'white' size={35}/>
</View>
    <Image resizeMode='contain' style = {styles.image} source = {require('../assets/chair.jpg')}/>
    </View>
  )
}
const styles = StyleSheet.create({
    image : {
        width : "100%",
        height : "100%",

    },
    container : {
        flex : 1,
        backgroundColor : "#000",

    },closeIcon : {
        position : "absolute",
        top : 40,
        left: 30,
    },
    deleteIcon : {
    
        position : "absolute",
        top : 40,
        right: 30,



    }
})