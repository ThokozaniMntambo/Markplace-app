import { View, Image , StyleSheet } from 'react-native'
import React from 'react'
import AppText from '../Components/AppText'
import colors from '../config/colors'
import ListItem from '../Components/ListItem'

export default function ListDetailsScreen() {
  return (
   <View>
     <Image style ={styles.image} source={require('../assets/jacket.jpg')} />
     <View style = {styles.detailContainer}>
      <AppText style={styles.title}> Red jacket for sale</AppText>
      <AppText style={styles.price}> $100 </AppText>
     </View>
     <View style={styles.UserContainer}>
     <ListItem
      image={require('../assets/Thokozani.jpg')}
      title= "Thokozani Mntambo"
      subTitle= " 5 Listings"
     
     />

     </View>

   </View>
)}
const styles = StyleSheet.create({
    detailContainer : {
        padding : 20,
    },
    image : {
        width : "100$",
        height : 300,
    },
    title :{
        fontSize : 20,
        fontWeight : "500",
    },
    price : {
        color : colors.secondary,
        fontWeight : "bold",
        fontSize : 20,
        marginVertical : 10,
         
    },
    UserContainer : {
        marginVertical : 50 ,
    },

   
})