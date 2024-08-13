import { View,  Image , StyleSheet} from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

export default function Card( {title , subtitle , image}) {
  return (
    <View style ={styles.card}>
        <Image style ={styles.image} source={image}></Image>
      <View style ={styles.detailsContainer}>
        <AppText  style={styles.title}>{title} </AppText>
        <AppText style={styles.subtitle}>{subtitle} </AppText>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card :{
        borderRadius : 15,
        backgroundColor : colors.white,
        marginButton : 20,
        overflow : "hidden",

        
    },image :{
        width :"100%",
        height : 200,

    },detailsContainer :{
        padding :20,

    },title :{
        marginBottom : 7,
    },
    subtitle :{
        color : colors.secondary,
        fontWeight: "bold",
    }
})