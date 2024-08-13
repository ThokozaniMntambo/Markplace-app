import { View,StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import { Swipeable } from 'react-native-gesture-handler'
import {MaterialCommunityIcons} from '@expo/vector-icons'



export default function ListItem({title , subTitle , image , IconCompounent, onPress , renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions} >
        <TouchableHighlight underlayColor={colors.light} onPress={onPress} >
        <View style ={styles.container}>
            {IconCompounent}
         {image && <Image style = {styles.image} source ={image}/>}
         <View style = {styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1} > {title} </AppText>
           {subTitle && <AppText style={styles.subTitle} numberOfLines={2}  > {subTitle} </AppText> }
         </View>
         <MaterialCommunityIcons size={25} color={colors.medium} name='chevron-right'/>
        </View>
    
    
        </TouchableHighlight>
        
        

    </Swipeable>
    
  )
}
const styles = StyleSheet.create({
    container : {
      alignItems : "center",
        flexDirection : "row",
        padding : 15,
        backgroundColor : colors.white,
    },
    image : {
      width : 70,
      height : 70,
      borderRadius : 35,
   

    },title : {
        fontWeight : "500",

    },subTitle : {
        color : colors.medium,

    },detailsContainer : {
      flex :1,
        marginLeft : 10 ,
        justifyContent : "center",

    },
    
})