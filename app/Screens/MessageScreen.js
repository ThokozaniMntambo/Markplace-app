import {FlatList , StyleSheet,} from 'react-native'
import React, { useState } from 'react'
import ListItem from '../Components/ListItem'
import ListItemSeparator from '../Components/ListItemSeparator'
import ListitemDeleteAction from '../Components/ListitemDeleteAction'


const initailMessage=[{
 id : 1,
 title : 'T1',
 decription : 'D1',
 image : require('../assets/Mosh.jpg')
},
{
    id : 2,
    title : 'T2',
    decription : 'D2',
    image : require('../assets/Thokozani.jpg')


},
]
 const handleDelete = message => {
 const  [message , setMessage] = useState(initailMessage);
 // Delete the Message from messages
setMessage(message.filter(m => m.id !== message.id))

 }
 const [refreshing , setRefreshing] = useState(false);


export default function MessageScreen() {
  return (

<Screen>
<FlatList 
data={initailMessage}
keyExtractor={Message => Message.id.toString()}
renderItem={({ item }) => 
  <ListItem title={item.title}
   subTitle={item.decription}
   image={item.image}
   onPress={() => console.log("Message Tapped" , item)}
   renderRightActions={() => <ListitemDeleteAction onPress={() =>handleDelete(item)}/>}
  
  />}
  ItemSeparatorComponent={ListItemSeparator}  
  refreshing={refreshing}
  onRefresh={() => [{
      id : 2,
      title : 'T2',
      decription : 'D2',
      image : require('../assets/Thokozani.jpg')

  }]} 
/>
</Screen>

        

    
  )
}
const styles = StyleSheet.create({
   
})