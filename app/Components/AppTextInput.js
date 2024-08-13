import { View, StyleSheet} from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import { TextInput } from 'react-native'
import defaultStyles from '../config/styles'


export default function AppTextInput({icon , width = "100%", ...otherProps}) {
  return (
    <View style = {[styles.container , {width}]}> 
           {icon && <MaterialCommunityIcons name ={icon} size = {20} color={colors.medium} style = {styles.icon}/>}
            <TextInput style = {defaultStyles.text}{...otherProps}/>       
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.light,
        borderRadius :25,
      
        padding : 15,
        marginVertical : 10,
    },
    icon : {
     marginRight : 10 ,

    },
   })