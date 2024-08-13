import { View, StyleSheet, Touchable } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ListitemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style ={styles.containter}> 
    <MaterialCommunityIcons name='trash-can' color={colors.white} size ={35}/>
      
    </View>

    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    containter :{
        backgroundColor : colors.danger,
        width : 70,
        justifyContent : "center",
        alignItems : "center,"
    },
    
})