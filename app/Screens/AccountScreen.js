import {FlatList, StyleSheet} from 'react-native'
import React from 'react'
import Screen from '../Components/Screen'
import ListItem from '../Components/ListItem'
import Icon from '../Components/Icon'
import colors from '../config/colors'
import ListItemSeparator from '../Components/ListItemSeparator'



const menuItems = []

export default function AccountScreen() {
  return (
    <Screen styles = {styles.screen}>
      <View styles = {styles.container}  >
        <ListItem 
        title= "Thokozani"
        subTitle= "thokozanimntamb@gmail.com"
        image={require('../assets/Thokozani.jpg')}
        
        />

      </View>
      <View styles = {styles.container}> 
       <FlatList data={menuItems}
       keyExtractor={menuItems => menuItems.title}
       ItemSeparatorComponent={ListItemSeparator}
       renderItem={({item}) =>
        
       <ListItem
        title={item.title}
        IconCompounent={ <Icon
        name = {item.icon.name} backgroundColor={item.icon.backgroundColor}
        
        
        />}
        />}
        />
              

      </View>
      <ListItem
      title= "Log Out"
      IconCompounent={
        <Icon name = "logout" backgroundColor="#ffe66d"/>
      }
      
      />
    </Screen>
  )
}
const styles = StyleSheet.create({
    container : {
      marginVertical : 20,

    }, 
    screen :{
      backgroundColor: colors.light,
    },
    
})